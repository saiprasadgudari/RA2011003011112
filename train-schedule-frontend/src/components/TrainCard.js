import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

function TrainCard({ train }) {
  return (
    <Card style={{ margin: '10px' }}>
      <CardContent>
        <Typography variant="h5" component="h2">
            {train.trainName}
        </Typography>
        <Typography color="textSecondary">
          Departure Time: {train.departureTime.Hours}:{train.departureTime.Minutes}
        </Typography>
        <Typography color={train.delayedBy > 0 ? 'error' : 'textSecondary'}>
          Delayed By: {train.delayedBy} minutes
        </Typography>
        <Typography>
          Sleeper Seats: {train.seatsAvailable.sleeper} | Price: {train.price.sleeper}
        </Typography>
        <Typography>
          AC Seats: {train.seatsAvailable.AC} | Price: {train.price.AC}
        </Typography>
        <Typography>
        <Link to={`/trains/${train.trainNumber}`}>View Details</Link>

        </Typography>
      </CardContent>
    </Card>
  );
}

export default TrainCard;
