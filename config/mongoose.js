// getting-started.js
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
// we're connected!
// });

const mongoose = require("mongoose");

//mongoose.connect("mongodb://localhost/hospital");

mongoose.connect('mongodb+srv://varunpriyadarshi:abcde@12345@cluster0.i82qpoo.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log("Varun Priyadarshi",err));

const db = mongoose.connection;

//db.on("error", console.error.bind(console, "Error connecting to Mongodb"));

//db.once("open", function () {
 // console.log("Connected to database :: MongoDB");
//});

module.exports = db;