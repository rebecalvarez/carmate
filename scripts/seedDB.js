const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  'mongodb://localhost/carmatedb'
);

const serviceSeed = [
  {
    serviceDescription: 'Change Engine Oil and Filter',
    dueMileage: 75000,
    totalCost: 108.38,
    date: new Date(Date.now())
  },
  {
    serviceDescription: 'Rotate Tires, Inspect Tire Wear, and Adjust Tire Pressure.',
    dueMileage: 75000,
    totalCost: 65.57,
    date: new Date(Date.now())
  }
];

db.Service
  .remove({})
  .then(() => db.Service.collection.insertMany(serviceSeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
