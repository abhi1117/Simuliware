import * as React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import seventhImage from './photos/rss.jpg';
import eighthImage from './photos/confidence.jpg';
import ninthImage from './photos/variation.jpg';

export default function ReliabilityTesting() {
    return (
        <div style={{ textAlign: 'center', marginRight: '100px', paddingTop: '40px', marginLeft: '140px' }}>
            <h6 style={{ paddingBottom: '40px', color: '#d14a3b', textDecoration: 'underline', fontSize: '24px' }}>Reliability Testing</h6>
            <Grid container spacing={2}>
                {/* seventh card */}
                <Grid item xs={4}>
                <Card sx={{ maxWidth: 480, borderRadius: '15px', boxShadow: '2px 6px 8px 0 rgba(0.5,0.5,0.5,2)', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.07)' } }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={seventhImage}
                                alt="green"
                                style={{ maxHeight: 300, maxWidth: '100%', objectFit: 'cover' }}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Reliability vs Sample Size for Single R Value
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                {/* eighth Card */}
                <Grid item xs={4}>
                <Card sx={{ maxWidth: 480, borderRadius: '15px', boxShadow: '2px 6px 8px 0 rgba(0.5,0.5,0.5,2)', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.07)' } }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={eighthImage}
                                alt="green iguana"
                                style={{ maxHeight: 330, maxWidth: '100%', objectFit: 'cover' }}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" paddingBottom="35px">
                                    Confidence Level vs Sample Size
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                {/* Ninth Card */}
                <Grid item xs={4}>
                <Card sx={{ maxWidth: 480, borderRadius: '15px', boxShadow: '2px 6px 8px 0 rgba(0.5,0.5,0.5,2)', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.07)' } }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={ninthImage}
                                alt="green igu"
                                style={{ maxHeight: 300, maxWidth: '100%', objectFit: 'cover' }}
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
