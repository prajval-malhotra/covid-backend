const mongoose = require('mongoose')

const resourceSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  item: {
    type: String,
  },
  phone: {
    type: Number,
  },
  description: {
    type: String,
  },
  cost: {
    type: Number,
  },
  date: {
    type: Date,
  },
})

resourceSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Resource', resourceSchema)