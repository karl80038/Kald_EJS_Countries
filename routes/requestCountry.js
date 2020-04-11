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
let showTable;
router.get("/", function(req, res) {
    res.render('requestCountry', {
        pageTitle: 'Request information about the country',
        countryarray: countryarr,
        path: "/",

    });
})

router.post("/", function(req, res) {
    let country = req.body.country;
    let Name;
	let top_Level_Domain;
	let callingCode;
	let Capital;
	let Region;
	let subRegion;
	let Population;
	let TimeZone;
	let Language;
    let currCode; 
    let currName; 
    let currSymbol;
	let imgSrc;
    let url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true `;
    console.log(country);
    request(url, function(error, response, body){
    console.log("Server status:", response.statusCode);


    let data = JSON.parse(response.body);
    data.forEach(element => {
        Name = element.name;
        top_Level_Domain = element.topLevelDomain[0];
        callingCode = element.callingCodes[0];
        Capital = element.capital;
        Region = element.region;
        subRegion = element.subregion;
        Population = element.population;
        TimeZone = element.timezones[0];
        Language = element.languages[0].name;
        currCode = element.currencies[0].code;
        currName = element.currencies[0].name;
        currSymbol = element.currencies[0].symbol;
        imgSrc = element.flag;

    });
     console.log (Name);
    console.log (top_Level_Domain);
    console.log (callingCode);
    console.log (Capital);
    console.log (Region);
    console.log (subRegion);
    console.log (Population);
    console.log (TimeZone);
    console.log (Language);
    console.log (currCode);
    console.log (currName);
    console.log (currSymbol);
    console.log (imgSrc); 

    res.render('results', {
        pageTitle: 'Request information about the country',
        countryarray: countryarr,
        path: "/",
        linkToFlag : imgSrc,
        cCode : callingCode,
        name    : Name,
        domain : top_Level_Domain,
        capital : Capital,
        region : Region,
        sRegion : subRegion,
        population : Population,
        timeZone : TimeZone,
        language : Language,
        currencyCode : currCode,
        currencyName : currName,
        currencySymbol : currSymbol,
    });
    })
  
})

module.exports = router;