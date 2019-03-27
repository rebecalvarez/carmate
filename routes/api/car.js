const router = require('express').Router();
const booksController = require('../../controllers/booksController');
const axios = require('axios');
const BASEURL = 'https://api.carmd.com/v3.0/fields?';
const AUTH_KEY = `Basic ${process.env.REACT_APP_CARMD_AUTH_KEY}`;
const PARTNER_TOKEN = process.env.REACT_APP_CARMD_PARTNER_TOKEN;

// Matches with "/api/car/fields"
router.get('/fields', (req, res) => {
  const queryURL = BASEURL + 'vin=1GNALDEK9FZ108495&' + 'mileage=55000';
  axios
    .get(queryURL, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: AUTH_KEY,
        'Partner-Token': PARTNER_TOKEN
      }
    })
    .then(function(response) {
      res.send(response.data.data);
    });
});

// Matches with "/api/books/:id"
router
  .route('/:id')
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
