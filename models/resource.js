const mongoose = require('mongoose')

const resourceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5
  },
  item: {
    type: String,
    required: true,
    minlength: 5
  },
  phone: {
    type: Number,
    required: true,
    minlength: 5
  },
  description: {
    type: String,
    required: true,
    minlength: 5
  },
  cost: {
    type: Number,
    required: true,
    minlength: 5
  },
  date: {
    type: Date,
    required: true,
  },
  // content: {
  //   type: String,
  //   required: true,
  //   minlength: 5
  // },
  // date: {
  //   type: Date,
  //   required: true,
  // },
  important: Boolean,
})

resourceSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Resource', resourceSchema)