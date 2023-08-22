const axios = require('axios');

// Registration details
const registrationData = {
    "companyName": "Train Central",
    "ownerName": "saiprasadgudari",
    "rollNo": "RA2011003011112",
    "ownerEmail": "saiprasadgudari@gmail.com",
    "accessCode": "TzEfMS"
};

// Registering the company
axios.post('http://20.244.56.144/train/register', registrationData)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });
