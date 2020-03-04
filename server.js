const express = require("express");
const request = require("request");
const path = require('path');
const app = express();
const requestRoute = require('./routes/requestCountry')
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));

//Use of the Path package ensures the server always finds the file regardless of the operating system or file system the app currently runs on.
//path.join(__dirname, 'folder', 'file.html')

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(requestRoute);

app.use(function(req, res, next){
    res.status(404).render('404', {
        pageTitle: "Page not Found.",
        pageNotFound: "We apologize, but we're unable to find the page you're looking for.",
        path: ""
    });
});

app.listen(5000, ()=> {
    console.log("Server is running on port 3000.");
})