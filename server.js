// Declaring express
const express = require('express');
const logger = require('morgan');
require('dotenv').config();

// Auth Dependancies
const userRoutes = require('./routes/api/user');
// const passportSetup = require('./config/passport-setup');
// const passport = require('passport');
// const cookieSession = require('cookie-session');

// Other dependencies
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

// Logging
app.use(logger('dev'));
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}


// Add routes, both API and view

app.use('/api', userRoutes);
app.use(routes);


// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/carmatedb',
  () => {
    console.log('Connected to mongodb');
  }
);

app.on('listening', function () {
  console.log('ok, server is running');
});
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

