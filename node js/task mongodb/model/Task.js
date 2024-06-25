const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  taskname: String,
  completed: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model('Task', TaskSchema)