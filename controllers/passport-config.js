const passport = require('passport');
var GoogleTokenStrategy = require('passport-google-token').Strategy;
const User = require('../models/user');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });

});


passport.use(
  new GoogleTokenStrategy({
    // options for google strategy
    callbackURL: '/auth/google/redirect',
    clientID: process.env.REACT_APP_GOOGLE_USER_CLIENTID,
    clientSecret: process.env.REACT_APP_GOOGLE_USER_CLIENTSECRET
  }, (accessToken, refreshToken, profile, done) => {
    // check if user exists in db

    User.findOne({googleid: profile.id}).then((currentUser)=>{
      if(currentUser){
        //already have user
        console.log('user is: ', currentUser);
        done(null, currentUser);
      } else {
        //new user, create in db
        new User({
          username: profile.displayName,
          googleid: profile.id
        }).save().then((newUser) => {
          console.log('new user created: ' + newUser);
          done(null, newUser);
        });
      }
    });


  })
);
