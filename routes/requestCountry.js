const express = require('express');
const path = require('path');
const rootDirectory = require('../utilities/path');
const router = express.Router();

router.get("/", function(req, res) {
    res.render('requestCountry', {
        pageTitle: 'Request information about the country',
        options: ['Estonia', 'Latvia', 'Lithuania'],
        path: "/"
    });
})

router.post("/", function(req, res) {
    let currency = req.body.currency;
    let url = `https://restcountries.eu/rest/v2/name/{name}?fullText=true `;
    request(url, function(error, response, body){
    console.log("Server status:", response.statusCode);
        
        let data = JSON.parse(response.body);
        let price;

        if (currency === "EUR")
        {

        }
        else 
        {

        }

    })
    console.log(currency);
    
})
module.exports = router;