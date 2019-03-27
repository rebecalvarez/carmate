const router = require('express').Router();
const booksController = require('../../controllers/booksController');
const axios = require('axios');
const BASEURL = 'https://api.carmd.com/v3.0/fields?';
// const AUTH_KEY = `Basic ${process.env.REACT_APP_CARMD_AUTH_KEY}`;
// const PARTNER_TOKEN = process.env.REACT_APP_CARMD_PARTNER_TOKEN;

// const getAvailableFields = function(vin, mileage) {
//   console.log('authorization:' + AUTH_KEY, 'partner-token:' + PARTNER_TOKEN);
//   vin = `vin=${vin}&`;
//   mileage = `mileage=${mileage}`;
//   return axios.get(BASEURL + 'vin=1GNALDEK9FZ108495&' + mileage, {
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Content-Type': 'application/x-www-form-urlencoded',
//       Authorization: AUTH_KEY,
//       'Partner-Token': 'ef21a9b608e74492ab6fd5cff6898744'
//     }
//   });
// };

// Matches with "/api/books"
router.get('/fields', (req, res) => {
  const queryURL = BASEURL + 'vin=1GNALDEK9FZ108495&' + 'mileage=55000';
  axios
    .get(queryURL, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic Nzg2N2MwZGYtMzA5OC00ZTY1LWIzMzktOWM3ZWY2OGNiYmZh',
        'Partner-Token': 'ef21a9b608e74492ab6fd5cff6898744'
      }
    })
    .then(function(response) {
      console.log(response.data);
    });
});

// Matches with "/api/books/:id"
router
  .route('/:id')
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
