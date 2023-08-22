const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

const sortedTrainsData = require('./sortedTrains.json');

app.use(cors());

app.get('/trains', (req, res) => {
    res.json(sortedTrainsData);
});

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
