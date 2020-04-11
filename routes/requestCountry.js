const express = require('express');
const path = require('path');
const request = require('request');
const bodyParser = require("body-parser");
const rootDirectory = require('../utilities/path');
const router = express.Router();
router.use(bodyParser.urlencoded({extended: true}));

var est = {parameter: "Estonia", name: "Estonia"};
var lat = {parameter: "Latvia", name: "Latvia"};
var lit = {parameter: "Lithuania", name: "Lithuania"};
var countryarr = [est, lat, lit];
router.get("/", function(req, res) {
    res.render('requestCountry', {
        pageTitle: 'Request information about the country',
        countryarray: countryarr,
        path: "/"
    });
})

router.post("/", function(req, res) {
    let country = req.body.country;
    let url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true `;
    console.log(country);
    request(url, function(error, response, body){
    console.log("Server status:", response.statusCode);
    let data = JSON.parse(response.body);
        console.log(data);
    })
    
})
module.exports = router;