const axios = require('axios');
const authenticationData = {
    "companyName": "Train Central",
    "clientID": "9619bcac-3488-45b1-9e8d-5526936b3926",
    "ownerName": "saiprasadgudari",
    "ownerEmail": "saiprasadgudari@gmail.com",
    "rollNo": "RA2011003011112",
    "clientSecret": "mIJSJYWUaOHkakUx"
};

// Authenticating to get the access_token
axios.post('http://20.244.56.144/train/auth', authenticationData)
    .then(response => {
        console.log(response.data.access_token);  // This is the token you'll use for subsequent requests
    })
    .catch(error => {
        console.log(error);
    });
