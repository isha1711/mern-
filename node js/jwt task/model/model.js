const mongoose = require('mongoose')

const taskSchema  = new mongoose.Schema({
    name : {
        type : String,
        required : [true,"Name must be provided"]
        
    },
    completed: {
        type: Boolean,
        default: false,
      },
})

module.exports={
    taskSchema
}