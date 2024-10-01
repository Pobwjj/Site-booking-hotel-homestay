const mongoose = require('mongoose');

var mongoURL = 'mongodb+srv://chivihuynh204:Huynhvi2004@cluster0.gb4mz.mongodb.net/booking-hotel'

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })

var connection = mongoose.connection

connection.on('error', () => {
    console.log('Mongo DB conncetion error')
})

connection.on('connected', () => {
    console.log('Mongo DB conncetion successful')
})


module.exports = mongoose
