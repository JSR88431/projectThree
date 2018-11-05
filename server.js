const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
var db = require("./models");

var flash = require('connect-flash');


var passport = require('passport');
var session = require('express-session');
var dotenv = require('dotenv').config()


const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Log-ins
app.use(session({ secret: 'aNtCaRjOhJoS', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.use(flash());

//load passport strategies
require('./config/passport/passport.js')(passport, db.User);

// Log-in Routes
var authRoute = require('./routes/auth.js')(app, passport);

// Define API routes here
const routes = require("./routes/index.js");
app.use(routes);

// Send every other request to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the DB
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});