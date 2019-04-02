const router = require('express').Router();
const db = require('../../models/user');
// const axios = require('axios');

router.post('/user', (req, res) => {
  console.log('api user: ', req.body.email);
  db.create(req.body).then(function(dbUser) {
    // If saved successfully, send the the new User document to the client
    console.log('dbuser', dbUser);

    res.json(dbUser);
  })
    .catch(function(err) {
      // If an error occurs, send the error to the client
      res.json(err);
    });

});


module.exports = router;

// )create(req.body).then(
//     (response) => {
//       res.json({ successful: response });
//     }
//   ).catch(
//     (err) => {
//       res.json({ error: err });
//     }
//   );
// });