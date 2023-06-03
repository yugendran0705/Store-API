const mongoose = require('mongoose')

const connectDB = (url) => {
  mongoose
    .connect(url,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      })
    .then(() => {
      console.log("MongoDB connected")
    })
    .catch(err => {
      console.log(err)
    })
}

module.exports = connectDB
