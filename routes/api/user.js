const router = require('express').Router();
const db = require('../../models/user');
const Service = require('../../models/service');
// const Service = require('../../controllers/servicesController');
// const axios = require('axios');

router.post('/user', (req, res) => {
  // console.log('api user: ', req.body.email);
  db.create(req.body).then(function (dbUser) {
    // If saved successfully, send the the new User document to the client
    // console.log('dbuser', dbUser);
    res.json(dbUser);
  })
    .catch(function (err) {
      // If an error occurs, send the error to the client
      res.json(err);
    });
});

router.get('/userservices', (req, res) => {
  userCookieValue = req.headers.cookie.replace(/(?:(?:^|.*;\s*)tokenId\s*\=\s*([^;]*).*$)|^.*$/, '$1');
  // db.findAll(userCookieValue)
  // Service.findAll({ userEmail: userCookieValue }, function(err, services) {
  //   if (err) {
  //     res.json(err);
  //   }

  //   res.json(services);
  // });
  console.log('useremail: ' + userCookieValue);
  // db.Service.findById({userEmail: userCookieValue}, function(services) {
  //   console.log(services);
  // });
  Service.find({ userEmail: userCookieValue }, function (err, docs) {
    res.json(docs);
    if (err) {
      console.log(err);
    }
  });

});


module.exports = router;
