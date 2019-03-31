// Declaring express
const express = require('express');
require('dotenv').config();

// Auth Dependancies
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./config/passport-setup');
const passport = require('passport');
const cookieSession = require('cookie-session');

// Other dependencies
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

//setting cookie time limit and encrypting

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.SESSION_COOKIE_ENCRYPT]
  })
);

//initialize passport

app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/carmatedb',
  () => {
    console.log('Connected to mongodb');
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
