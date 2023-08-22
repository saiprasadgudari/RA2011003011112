const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// This should be the sortedTrains data from your fetchTrainData.js script.
const sortedTrainsData = require('./sortedTrains.json');

// Enable CORS for all routes
app.use(cors());

// Route to fetch all trains
app.get('/trains', (req, res) => {
    res.json(sortedTrainsData);  // Return the processed train data
});

// Route to fetch a specific train by its number
app.get('/trains/:trainNumber', (req, res) => {
    const trainNumber = req.params.trainNumber;
    const train = sortedTrainsData.find(t => t.trainNumber === trainNumber);
    if (train) {
        res.json(train);
    } else {
        res.status(404).json({ message: 'Train not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
