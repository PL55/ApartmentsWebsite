var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise=global.Promise;
var dotenv = require('dotenv');
var Listing = require('./models/Listing');

// Load envirorment variables
dotenv.load();


// Connect to MongoDB
console.log(process.env.MONGODB)
mongoose.connect(process.env.MONGODB);
mongoose.connection.on('error', function() {
    console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
    process.exit(1);
});

// Setup Express App
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/listing', function(req, res) {
    // Create new movie
    var listing = new Listing({
        title: req.body.title,
        monthlyRent: parseInt(req.body.monthlyRent),
        imageURL: req.body.imageURL,
     

    });

    // Save movie to database
    listing.save(function(err) {
        if (err) throw err;
        return res.send('Succesfully inserted listing.');
    });  

});


app.get('/listing', function(req, res) {
    // Get all movies
    Listing.find({}, function(err, listings) {
        if (err) throw err;
        res.send(listings);
    });
});



app.listen(3000, function() {
    console.log('App listening on port 3000!');
})