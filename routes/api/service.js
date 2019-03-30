const router = require('express').Router();
const booksController = require('../../controllers/booksController');
const axios = require('axios');
const AUTH_KEY = `Basic ${process.env.REACT_APP_CARMD_AUTH_KEY}`;
const PARTNER_TOKEN = process.env.REACT_APP_CARMD_PARTNER_TOKEN;

// Matches with "/api/service/availableFields"

router.get('/availableFields', (req, res) => {
  const BASEURL = 'https://api.carmd.com/v3.0/fields?';
  console.log(req.query);
  let queryURL;
  const year = `year=${req.query.year}&`;
  const make = `make=${req.query.make}&`;
  const model = `model=${req.query.model}&`;
  const mileage = `mileage=${req.query.mileage}`;
  const vin = `vin=${req.query.vin}&`;
  req.query.vin
    ? (queryURL = BASEURL + vin + mileage)
    : (queryURL = BASEURL + year + make + model + mileage);
  console.log(queryURL);
  axios
    .get(queryURL, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: AUTH_KEY,
        'Partner-Token': PARTNER_TOKEN
      }
    })
    .then(function(response) {
      console.log(response.data);
      res.send(response.data.data);
    });
});
router.get('/getMaintenance', (req, res) => {
  const BASEURL = 'https://api.carmd.com/v3.0/maint?';
  console.log(req.query);
  let queryURL;
  const year = `year=${req.query.year}&`;
  const make = `make=${req.query.make}&`;
  const model = `model=${req.query.model}&`;
  const mileage = `mileage=${req.query.mileage}`;
  const vin = `vin=${req.query.vin}&`;
  req.query.vin
    ? (queryURL = BASEURL + vin + mileage)
    : (queryURL = BASEURL + year + make + model + mileage);
  console.log(queryURL);
  axios
    .get(queryURL, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: AUTH_KEY,
        'Partner-Token': PARTNER_TOKEN
      }
    })
    .then(function(response) {
      // console.log(response.data.data);
      const mydata = response.data.data.map(
        data => `${data.desc}, ${data.due_mileage}`
      );
      console.log(mydata);
      res.send(mydata);
    });
});

router.get('/getRecalls', (req, res) => {
  const BASEURL = 'https://api.carmd.com/v3.0/recall?';
  console.log(req.query);
  let queryURL;
  const year = `year=${req.query.year}&`;
  const make = `make=${req.query.make}&`;
  const model = `model=${req.query.model}&`;
  const vin = `vin=${req.query.vin}&`;
  req.query.vin
    ? (queryURL = BASEURL + vin)
    : (queryURL = BASEURL + year + make + model);
  console.log(queryURL);
  axios
    .get(queryURL, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: AUTH_KEY,
        'Partner-Token': PARTNER_TOKEN
      }
    })
    .then(function(response) {
      // console.log(response.data.data);
      const mydata = response.data.data.map(
        data => `${data.desc}, ${data.recall_date}`
      );
      console.log(mydata);
      res.send(mydata);
    });
});

// Matches with "/api/books/:id"
router
  .route('/:id')
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
