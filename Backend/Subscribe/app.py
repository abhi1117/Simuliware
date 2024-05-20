from flask import Flask, render_template, redirect, url_for, request, flash, get_flashed_messages,jsonify
from flask_login import LoginManager, UserMixin, login_required, login_user, logout_user, current_user
from datetime import datetime, timedelta
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
import razorpay
import uuid
from flask import redirect
from hashlib import sha256
import hmac
import binascii
from flask_cors import CORS


# Initialize Flask app
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

app.config['SECRET_KEY'] = 'your_secret_key'  # Secret key for session management
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///subscriptions.db'  # SQLite database URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Disable tracking modifications for SQLAlchemy

# Initialize SQLAlchemy database
db = SQLAlchemy(app)

# Initialize Flask-Login
login_manager = LoginManager(app)
login_manager.login_view = 'login'  # Set the login view

# Initialize Razorpay client with test API keys
razorpay_client = razorpay.Client(auth=("rzp_test_Okn2IaTnaEIYb3", "Ca1ApldEQbGAomS4tBk7c3gp"))

# Define the User model
class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True)
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))
    subscription_active = db.Column(db.Boolean, default=False)
    subscription_expiry = db.Column(db.DateTime)
    subscription_level = db.Column(db.Integer, default=0)
       

    def set_password(self, password):
        self.password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)
    
    # Define the Payment model
class Payment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    payment_id = db.Column(db.String(100), nullable=False)
    order_id = db.Column(db.String(100), nullable=False)
    signature = db.Column(db.String(100), nullable=False)
    payment_date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

# Define the Subscription model
class Subscription(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    plan = db.Column(db.String(50), nullable=False)
    start_date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    end_date = db.Column(db.DateTime, nullable=False)

# Callback to reload the user object
@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

# Middleware to check if user is registered before accessing other pages
@app.before_request
def check_registration():
    if not current_user.is_authenticated and request.endpoint not in ['register', 'login', 'home']:
        return redirect(url_for('home'))  # Redirect to home if not logged in and trying to access other pages

# Route to handle registration
@app.route('/register', methods=['GET', 'POST'])
def register():
    if current_user.is_authenticated:  # Redirect to home if user is already logged in
        return redirect(url_for('home'))
    
    if request.method == 'POST':
        data = request.get_json()
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')
        
        existing_user = User.query.filter_by(username=username).first()
        if existing_user:
            flash('Username already exists. Please choose a different one.', 'error')
            return redirect(url_for('register'))
        
        new_user = User(username=username, email=email)
        new_user.set_password(password)  # Set hashed password
        try:
            db.session.add(new_user)
            db.session.commit()  # Commit the new user to the database
            flash('Registration successful. Please log in.', 'success')
            return redirect(url_for('login'))
        except Exception as e:
            flash('Error occurred during registration. Please try again.', 'error')
            print(e)  # Print the error for debugging purposes
            db.session.rollback()  # Rollback the transaction in case of error
            
    return render_template('register.html')
    



# Route to handle login
@app.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:  # Redirect to home if user is already logged in
        return redirect(url_for('home'))
    
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        
        user = User.query.filter_by(username=username).first()
        if user and user.check_password(password):  # Check password using a method in the User model
            login_user(user)
            if user.subscription_active:
                return redirect(url_for('index'))  # Redirect to main website service page if subscribed
            else:
                plan = 'ultimate'  # Set a default plan for users who haven't subscribed yet
                update_subscription_status(user.id, plan)  # Update subscription status
                flash('You need to subscribe to access services.', 'info')
                return redirect(url_for('subscribe'))  # Redirect to subscription page after login if not subscribed
        
        flash('Invalid username or password. Please try again.', 'error')
        
    return render_template('login.html')  # Assuming 'login.html' is your Jinja2 template for login


# Route to handle logout
@app.route('/logout')
@login_required
def logout():
    logout_user()
    flash('You have been logged out.', 'success')
    return redirect(url_for('login'))


#Route to handle subscribe
@app.route('/subscribe', methods=['OPTIONS', 'POST', 'GET'])
def subscribe():
    if request.method == 'POST':
        # Respond to preflight request with appropriate CORS headers
        response = make_response()
        response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
        response.headers.add('Access-Control-Allow-Methods', 'GET,POST')
        return response
    elif request.method == 'POST':
        if current_user.is_authenticated:
            plan = request.form.get('plan')
            if plan:
                amount = calculate_amount(plan)
                if amount > 0:
                    response_data = {'plan': plan, 'amount': amount}
                    return jsonify(response_data)
                else:
                    return jsonify({'error': 'Invalid plan selected'}), 400
            else:
                return jsonify({'error': 'Plan not specified'}), 400
        else:
            flash('You need to log in to subscribe.', 'info')
            return redirect(url_for('login'))
        
#Route to handle Payment form
@app.route('/payment_form', methods=['POST', 'GET'])
@login_required
def payment_form():
    plan = "Yearly Subscription"
    amount = 5000
    
    # Pass the user's name to Razorpay order notes
    user_name = current_user.username
    order_notes = {
        'plan': plan,
        'name': user_name,
        'description': 'Payment for subscription'
    }
    
    return render_template('payment_form.html', plan=plan, amount=amount, order_notes=order_notes)





# Route to handle processing payment using Razorpay
@app.route('/process_payment', methods=['POST'])
@login_required
def process_payment():
    try:
        # Process payment here (integration with actual payment gateway)
        plan = "Yearly Subscription"
        amount = 5000
        
        # Prompt the user for their name and email
        name = request.form['name']
        email = request.form['email']
        
        # Generate a unique order ID
        order_id = str(uuid.uuid4())  # Generate a random UUID
        
        # Create Razorpay order
        order_amount = amount * 100  # Razorpay accepts amount in paise
        order_currency = 'INR'  # Change this to your preferred currency if needed
        order_notes = {
            'plan': plan,
            'name': name,  # Use the provided name
            'email': email,  # Use the provided email
            'description': 'Payment for subscription'
        }
        
        # Check if payment with the same details already exists in the database
        existing_payment = Payment.query.filter_by(user_id=current_user.id, amount=amount, plan=plan).first()
        if existing_payment:
            flash('Duplicate payment detected. Your previous payment is being processed.', 'info')
            return redirect(url_for('index'))  # Redirect to index page
            
        # Create order
        order_response = razorpay_client.order.create(
            dict(amount=order_amount, currency=order_currency, notes=order_notes, receipt=order_id)
        )
        
        # Handle order creation response
        
        razorpay_order_id = order_response['id']
        razorpay_order_receipt = order_response['receipt']  # Get the receipt ID from the response
        # Check if the receipt ID matches the one generated
        if razorpay_order_receipt != order_id:
            flash('Error: Order receipt mismatch. Please try again later.', 'error')
            return redirect(url_for('payment_cancel'))  # Redirect to payment cancellation page
        
        # Create a new Payment record in the database and associate it with the current user
        new_payment = Payment(user_id=current_user.id, amount=amount, plan=plan)
        db.session.add(new_payment)
        db.session.commit()  # Commit the transaction to save changes to the database
        
        # Redirect to payment confirmation page with the order ID
        return redirect(url_for('payment_confirm', order_id=razorpay_order_id))
    except Exception as e:
        flash('Payment failed. Please try again later.', 'error')
        print(e)  # Print the error for debugging purposes
        return redirect(url_for('payment_cancel'))  # Redirect to payment cancellation page page


# Route to handle Razorpay payment callback
@app.route('/payment_callback', methods=['POST'])
def payment_callback():
    # Retrieve the Razorpay webhook payload
    payload = request.get_json()
    
    # Extract relevant data from the payload
    order_id = payload['payload']['payment']['entity']['order_id']
    payment_status = payload['payload']['payment']['entity']['status']
    
    # Retrieve the order from your database using the order_id
    razorpay_order = razorpay_client.order.fetch(order_id)
    
    # Check if payment is successful
    if payment_status == 'captured':
        # Extract user ID from the order notes
        user_id = razorpay_order['notes']['user_id']
        
        # Update user's subscription status in your database
        user = User.query.get(user_id)
        if user:
            user.subscription_active = True
            # Update subscription level and expiry based on the plan
            plan = razorpay_order['notes']['plan']
            update_subscription_status(user_id, plan)
            db.session.commit()
            
            # Log the successful payment in your Payment table
            payment = Payment(user_id=user_id, amount=razorpay_order['amount'], plan=plan)
            db.session.add(payment)
            db.session.commit()  # Commit changes to the database
            
            # Send notification to user about successful payment
            send_notification(user.email, f"Payment successful for plan: {plan}")
            
            # Return a response to Razorpay to acknowledge successful payment
            return jsonify({'status': 'success'})
    else:
        # Log failed payment or handle as needed
        return jsonify({'status': 'failed'}), 400

# Payment confirmation route
@app.route('/payment_confirm/<order_id>')
@login_required
def payment_confirm(order_id):
    # Display success message
    flash('Payment successful. Subscription activated.', 'success')
    
    # Redirect to the index page
    return redirect(url_for('index'))  



# Payment cancellation route
@app.route('/payment_cancel')
@login_required
def payment_cancel():
    return render_template('payment_cancel.html')

@app.route('/renew_subscription', methods=['POST'])
@login_required
def renew_subscription():
    plan = request.form['plan']
    user = current_user
    
    if user.subscription_expiry:
        current_expiry = user.subscription_expiry
    else:
        current_expiry = datetime.now()
    
    new_expiry = current_expiry + timedelta(days=365)
    user.subscription_expiry = new_expiry
    user.subscription_active = True
    user.subscription_level = get_subscription_level(plan)  # Update the subscription level

    try:
        db.session.commit() 
        flash('Subscription renewed successfully.', 'success')
    except Exception as e:
        flash('Error occurred while renewing subscription.', 'error')
        print(e)  # Print the error for debugging purposes
        db.session.rollback()

    return redirect(url_for('index'))

@app.route('/')
@login_required
def index():
    subscription_status = "Active" if current_user.subscription_active else "Expired"
    remaining_days = (current_user.subscription_expiry - datetime.now()).days if current_user.subscription_expiry else None
    return render_template('index.html', subscription_status=subscription_status, remaining_days=remaining_days, messages=get_flashed_messages())

@app.route('/home')
def home():
    if current_user.is_authenticated:  # Redirect to main website service page if user is logged in and subscribed
        if current_user.subscription_active:
            return redirect(url_for('index'))
        else:
            return redirect(url_for('subscribe'))  # Redirect to subscription page if not subscribed
    return render_template('home.html')


# Add this route
    @app.route('/api/user')
    @login_required
    def get_user():
        user = {
            'username': current_user.username,
            'email': current_user.email,
            # Add more user details as needed
        }
        return jsonify(user)



# Add routes for service pages
@app.route('/service1')
@login_required
def service1():
    if current_user.subscription_active:
        return render_template('service1.html')
    else:
        flash('You need an active subscription to access this page.', 'error')
        return redirect(url_for('subscribe'))

@app.route('/service2')
@login_required
def service2():
    if current_user.subscription_active:
        return render_template('service2.html')
    else:
        flash('You need an active subscription to access this page.', 'error')
        return redirect(url_for('subscribe'))

@app.route('/service3')
@login_required
def service3():
    if current_user.subscription_active:
        return render_template('service3.html')
    else:
        flash('You need an active subscription to access this page.', 'error')
        return redirect(url_for('subscribe'))

@app.route('/service4')
@login_required
def service4():
    if current_user.subscription_active:
        return render_template('service4.html')
    else:
        flash('You need an active subscription to access this page.', 'error')
        return redirect(url_for('subscribe'))

@app.route('/profile')
@login_required
def profile():
    # Ensure user is authenticated
    if not current_user.is_authenticated:
        flash('You need to log in to view your profile.', 'error')
        return redirect(url_for('login'))

    # Fetch current user
    user = current_user
    
    # Fetch payments for the current user
    payments = Payment.query.filter_by(user_id=user.id).order_by(Payment.payment_date.desc()).all()
    
    # Fetch subscriptions for the current user
    subscriptions = Subscription.query.filter_by(user_id=user.id).order_by(Subscription.start_date.desc()).all()
    
    # Calculate remaining days of subscription
    remaining_days = None
    if user.subscription_expiry:
        remaining_days = (user.subscription_expiry - datetime.now()).days
    
    # Format next subscription date if available
    next_subscription_date = user.subscription_expiry.strftime('%Y-%m-%d') if user.subscription_expiry else None
    
    # Render profile template with user data
    return render_template('profile.html', user=user, next_subscription_date=next_subscription_date, remaining_days=remaining_days, payments=payments, subscriptions=subscriptions)

# Function to calculate amount based on selected plan
def calculate_amount(plan):
    # Dummy prices for demonstration
    prices = {
        'ultimate': 50000     # Price for Ultimate plan (365 days)
    }
    
    # Return the price for the selected plan
    return prices.get(plan, 0)  # Return 0 if plan is not found

# Function to update user's subscription status
def update_subscription_status(user_id, plan):
    user = User.query.get(user_id)
    if user and not user.subscription_active:
        user.subscription_active = True
        user.subscription_level = get_subscription_level(plan)
        subscription_duration = get_subscription_duration(plan)  # Get subscription duration based on plan
        # Calculate the subscription expiry date
        user.subscription_expiry = datetime.now() + timedelta(days=subscription_duration)
        db.session.add(Subscription(user_id=user_id, plan=plan, end_date=user.subscription_expiry))
        db.session.commit()

# Function to get subscription level based on plan
def get_subscription_level(plan):
    if plan == 'ultimate':
        return 3
    else:
        return 0  # Default to 0 if plan is not recognized

# Function to get subscription duration based on plan
def get_subscription_duration(plan):
    durations = {
        'ultimate': 365
    }
    return durations.get(plan, 0)


# Route to display payment history for the current user
@app.route('/payment_history')  
@login_required
def payment_history():
    # Fetch payment history for the current user
    payments = Payment.query.filter_by(user_id=current_user.id).order_by(Payment.payment_date.desc()).all()
    return render_template('payment_history.html', payments=payments)






# Route to handle Razorpay response after payment processing
@app.route('/payment_response', methods=['POST'])
@login_required
def payment_response():
    # Extract Razorpay response parameters from the POST request
    payment_id = request.form.get('razorpay_payment_id')
    order_id = request.form.get('razorpay_order_id')
    signature = request.form.get('razorpay_signature')
    
    # Get your Razorpay API key secret
    razorpay_secret = 'Ca1ApldEQbGAomS4tBk7c3gp'
    
    # Generate the expected signature using HMAC-SHA256
    expected_signature = hmac.new(
        razorpay_secret.encode('utf-8'),
        f'{order_id}|{payment_id}'.encode('utf-8'),
        sha256
    ).hexdigest()
    
    # Verify if the generated signature matches the signature received from Razorpay
    if signature == expected_signature:
        # Payment is successful
        flash('Payment successful. Subscription activated.', 'success')
    else:
        # Signature verification failed, handle accordingly
        flash('Payment failed. Signature verification failed.', 'error')

    # Redirect to the index page
    return redirect(url_for('index'))



@app.route('/custom_webhook', methods=['POST'])
def custom_webhook():
    payload = request.get_json()
    order_id = payload['payload']['payment']['entity']['order_id']
    payment_status = payload['payload']['payment']['entity']['status']
    razorpay_order = razorpay_client.order.fetch(order_id)
    if payment_status == 'captured':
        user_id = razorpay_order['notes']['user_id']
        user = User.query.get(user_id)
        if user:
            user.subscription_active = True
            plan = razorpay_order['notes']['plan']
            update_subscription_status(user_id, plan)
            db.session.commit()
            payment = Payment(user_id=user_id, amount=razorpay_order['amount'], plan=plan)
            db.session.add(payment)
            db.session.commit()
            return jsonify({'status': 'success'})
    return jsonify({'status': 'error'})


# Route to handle Razorpay webhook
@app.route('/payment_webhook', methods=['POST'])
def payment_webhook():
    # Get the JSON payload from the request
    payload = request.get_json()
    
    # Extract relevant information from the payload
    order_id = payload['payload']['payment']['entity']['order_id']
    payment_id = payload['payload']['payment']['entity']['id']
    payment_status = payload['payload']['payment']['entity']['status']
    
    # Fetch the order from the database using the order_id
    razorpay_order = razorpay_client.order.fetch(order_id)
    
    # Check if the payment status is successful
    if payment_status == 'captured':
        # Extract user ID from the order notes
        user_id = razorpay_order['notes']['user_id']
        
        # Retrieve the user from the database
        user = User.query.get(user_id)
        
        # Update the user's subscription status and record the payment
        if user:
            user.subscription_active = True
            plan = razorpay_order['notes']['plan']
            update_subscription_status(user_id, plan)
            db.session.commit()
            
            # Record the payment in the database, including the payment ID
            payment = Payment(user_id=user_id, payment_id=payment_id, amount=razorpay_order['amount'], plan=plan)
            db.session.add(payment)
            db.session.commit()
            
            # Respond to the webhook provider with a success message
            return jsonify({'status': 'success'})
    
    # If the payment status is not successful or the user is not found, respond with an error message
    return jsonify({'status': 'error'})


if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Initialize the database
    app.run(debug=True, port=8000)  # Run the Flask application in debug mode
