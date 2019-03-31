const router = require('express').Router();
const servicesController = require('../../controllers/servicesController');
const axios = require('axios');
const AUTH_KEY = `Basic ${process.env.REACT_APP_CARMD_AUTH_KEY}`;
const PARTNER_TOKEN = process.env.REACT_APP_CARMD_PARTNER_TOKEN;
const db = require('../../models');

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
    })
    .catch(err =>
      console.log(err.message, 'no available fields for this model!')
    );
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
      const maintenanceData = response.data.data;
      // const maintenanceData = response.data.data.map(
      //   data => `${data.desc} at ${data.due_mileage} miles\n`
      // );
      console.log(maintenanceData);

      // db.Service.create(maintenanceData).then(function (dbServices) {
      //   console.log(dbServices);
      //   response.json(dbServices);
      // }).catch(function (error) {
      //   return error;
      // });

      db.Service.collection.insertMany(maintenanceData).then(function(dbServices){
        console.log(dbServices);
        response.json(dbServices);
      }).catch(function(error){
        return error;
      });

      // res.send(maintenanceData);
    })
    .catch(err => console.log(err.message, 'maintenance doesn\'t exist!'));
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
      const recallData = response.data.data.map(
        data =>
          `recall description: ${data.desc}\n consequence: ${
            data.consequence
          }\n recall date: ${data.recall_date}\n`
      );
      console.log(recallData);
      res.send(recallData);
    })
    .catch(err => console.log(err.message, 'recalls don\'t exist!'));
});

router.get('/getUpcoming', (req, res) => {
  const BASEURL = 'https://api.carmd.com/v3.0/upcoming?';
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
      const upcomingData = response.data.data.map(
        data => `repair: ${data.desc} total cost: ${data.total_cost}\n`
      );
      console.log(upcomingData);
      res.send(upcomingData);
    })
    .catch(err => console.log(err.message, 'no upcoming repairs!'));
});

router.get('/getWarranty', (req, res) => {
  const BASEURL = 'https://api.carmd.com/v3.0/warranty?';
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
      const warrantyData = response.data.data.map(
        data => `warranty: ${data.type}\n criteria:${data.criteria}\n`
      );
      console.log(warrantyData);
      res.send(warrantyData);
    })
    .catch(err => console.log(err.message, 'warranty info doesn\'t exist!'));
});

// router.route('/')
//   // .get(servicesController.findAll)
//   .get(servicesController.create);

// Matches with "/api/books/:id"
// router
//   .route('/:id')
//   .get(servicesController.findById)
//   .put(servicesController.update)
//   .delete(servicesController.remove);

module.exports = router;
