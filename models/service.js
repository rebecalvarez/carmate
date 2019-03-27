const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  serviceDescription: { type: String, required: true },
  dueMileage: { type: Number, required: true },
  totalCost: Number,
  date: { type: Date, default: Date.now }
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
