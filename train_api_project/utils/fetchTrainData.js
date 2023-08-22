const axios = require('axios');
const fs = require('fs');

// ... your existing code ...


const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTI3MTU1NTQsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiOTYxOWJjYWMtMzQ4OC00NWIxLTllOGQtNTUyNjkzNmIzOTI2Iiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IlJBMjAxMTAwMzAxMTExMiJ9.a2Shgd6tUNkrUeWTY-8BOChSC0iUZ_RJOsMH0j8PGLU';  // Replace with the token you received

axios.get('http://20.244.56.144/train/trains', {
    headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`
    }
})
.then(response => {
    const trainData = response.data;
    const currentHours = new Date().getHours();
const currentMinutes = new Date().getMinutes();

const filteredTrains = trainData.filter(train => {
    const departureHours = train.departureTime.Hours;
    const departureMinutes = train.departureTime.Minutes + train.delayedBy;

    return (departureHours * 60 + departureMinutes) - (currentHours * 60 + currentMinutes) > 30;
});

const sortedTrains = filteredTrains.sort((a, b) => {
    const priceA = a.price.sleeper + a.price.AC;  // Example: sum of both prices
    const priceB = b.price.sleeper + b.price.AC;

    const seatsA = a.seatsAvailable.sleeper + a.seatsAvailable.AC;
    const seatsB = b.seatsAvailable.sleeper + b.seatsAvailable.AC;

    const timeA = a.departureTime.Hours * 60 + a.departureTime.Minutes + a.delayedBy;
    const timeB = b.departureTime.Hours * 60 + b.departureTime.Minutes + b.delayedBy;

    if (priceA !== priceB) return priceA - priceB;
    if (seatsA !== seatsB) return seatsB - seatsA;
    return timeB - timeA;
});

console.log(sortedTrains);
fs.writeFileSync('sortedTrains.json', JSON.stringify(sortedTrains, null, 2));


})
.catch(error => {
    console.log(error);
});
