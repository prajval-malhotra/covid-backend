require('dotenv').config()

const PORT = process.env.PORT || 4000
const MONGODB_URI = 'mongodb+srv://user:prajval@cluster0.n9mty.mongodb.net/covid?retryWrites=true&w=majority'

module.exports = {
  MONGODB_URI,
  PORT
}