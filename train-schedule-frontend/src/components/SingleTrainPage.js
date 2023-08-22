import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import './SingleTrainPage.css';


function SingleTrainPage() {
    const { id } = useParams();
    const trainNumber = id;
    
    const [train, setTrain] = useState(null);

    useEffect(() => {
        async function fetchTrainDetails() {
            try {
                const response = await axios.get(`http://localhost:3000/trains/${trainNumber}`);
                setTrain(response.data);
            } catch (error) {
                console.error("Error fetching train details:", error);
            }
        }

        fetchTrainDetails();
    }, [trainNumber]);

    if (!train) return <div>Loading...</div>;


return (
    <div className="singleTrainContainer">
        <Card className="trainDetailCard">
            <CardContent>
                <Typography className="trainName" variant="h4" component="h1">
                    {train.trainName} ({train.trainNumber})
                </Typography>
                <Divider style={{margin: '10px 0'}}/>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography variant="h6">Departure Time:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>{train.departureTime.Hours}:{train.departureTime.Minutes}</Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography variant="h6">Delay:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography color={train.delayedBy > 0 ? 'error' : 'textSecondary'}>
                            {train.delayedBy} minutes
                        </Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography variant="h6">Sleeper Seats:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>{train.seatsAvailable.sleeper}</Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography variant="h6">Sleeper Price:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>{train.price.sleeper}</Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography variant="h6">AC Seats:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>{train.seatsAvailable.AC}</Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography variant="h6">AC Price:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>{train.price.AC}</Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    </div>
);
    

}

export default SingleTrainPage;
