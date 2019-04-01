const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const serviceSchema = new Schema({
//   serviceDescription: { type: String, required: true },
//   dueMileage: { type: Number, required: true },
//   totalCost: Number,
//   date: { type: Date, default: Date.now }
// });


const TasksSchema = new Schema({ text: {type:String, required: true}, title: {type:String, required: true}, completed: {type: Boolean, default: false}
});

const Tasks = mongoose.model('Tasks', TasksSchema);

module.exports = Tasks;
