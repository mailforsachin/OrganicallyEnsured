/*
   git init
   git remote add azureprod https://sachintewari@onetwothree.scm.azurewebsites.net:443/onetwothree.git
   git status
   git status
   git add .
   git status
   git commit -a -m "Initial Commmit"
   git push azureprod master


    npm init
    npm install --g nodemon  //Installs globally
    npm install --save express ejs express mongoose
    nodemon app.js

    "Routes" to forward the supported requests (and any information encoded in request URLs) 
    to the appropriate controller functions.
    
    Controller functions to get the requested data from the models, create an HTML page displaying 
    the data, and return it to the user to view in the browser.
    
    Views (templates) used by the controllers to render the data.

*/

var express = require('express');
var path = require('path');   //Comes with Default Node installation.
var mongoose = require('mongoose');
var config = require('./config/database.js')

//Testing Database

//At the mongodb install folder, execute c:\Program Files\MongoDB\Server\4.0\bin>mongod
//If C:\data\db doesnt exist, create it
//Why use MongoDB? --- FOR SHOPPING CART APP, retrieving large data etc.
//OLTP use :: RDBMS

const options = {
    useNewUrlParser: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  };
mongoose.connect(config.database, options);
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open',function(){
console.log("Connected to MongoDB");
});

//Initialize App

var app = express();         //Express web framework

//View Engine Setup

app.set('views', path.join(__dirname, 'views'));
//Express look for the view inside /folder/views and you can use the method set() 
//to redefine express's default settings

app.set('view engine', 'ejs');  
//EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.

//Set public folder

//Static files are files that clients download as they are from the server. Create a new directory, public. Express, by default does not allow you to serve static files. 
//You need to enable it using the following built-in middleware.
app.use(express.static(path.join(__dirname,'public')));

//Test app
app.get('/',function(req,res){

    res.send("Working");

});

//Start the server
var port = 3000;
app.listen(port,function(){
console.log("Server started on port "+ port);
});