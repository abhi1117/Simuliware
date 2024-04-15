import * as React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import firstImage from './photos/1.jpg';
import secondImage from './photos/2.jpg';
import thirdImage from './photos/3.jpg';

export default function JSSS() {
    return (
        <div style={{ textAlign: 'center', marginRight: '100px', paddingTop: '10px', marginLeft: '140px' }}>
        <h2 style={{ color: '#BC1E1E', paddingBottom: '10px', textAlign: 'center', fontSize: '30px' }}>Shop Floor Planning Solutions</h2>
            <h6 style={{ paddingBottom: '40px', paddingTop: '10px', color: '#d14a3b', textDecoration: 'underline', fontSize: '24px' }}>Job Shop Scheduling Simulation</h6>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                <Card sx={{ maxWidth: 480, borderRadius: '15px', boxShadow: '2px 6px 8px 0 rgba(0.5,0.5,0.5,2)', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.07)' } }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={firstImage}
                                alt="green"
                                style={{ maxHeight: 300, maxWidth: '100%', objectFit: 'fill' }}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Reliability vs Sample Size for Single R Value
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
               
                <Grid item xs={4}>
                <Card sx={{ maxWidth: 480, borderRadius: '15px', boxShadow: '2px 6px 8px 0 rgba(0.5,0.5,0.5,2)', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.07)' } }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={secondImage}
                                alt="green iguana"
                                style={{ maxHeight: 300, maxWidth: '100%', objectFit: 'fill' }}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" paddingBottom="35px">
                                    Confidence Level vs Sample Size
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                <Card sx={{ maxWidth: 480, borderRadius: '15px', boxShadow: '2px 6px 8px 0 rgba(0.5,0.5,0.5,2)', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.07)' } }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={thirdImage}
                                alt="green igu"
                                style={{ maxHeight: 300, maxWidth: '100%', objectFit: 'fill' }}

                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Reliability vs Sample Size for Multiple R Values
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}