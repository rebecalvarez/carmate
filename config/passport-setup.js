require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const User = require('../models/user');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      callbackURL: '/auth/google/redirect',
      clientID: process.env.GOOGLE_USER_CLIENTID,
      clientSecret: process.env.GOOGLE_USER_CLIENTSECRET
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleid: profile.id }).then(currentUser => {
        if (currentUser) {
          console.log('User ' + currentUser + ' is logged in.');
          done(null, currentUser);
        } else {
          new User({
            username: profile.displayName,
            googleid: profile.id
          })
            .save()
            .then(newUser => {
              console.log(
                'New user ' + newUser + ' has been added to database.'
              );
              done(null, newUser);
            });
        }
      });
    }
  )
);
