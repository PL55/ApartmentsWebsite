var mongoose = require('mongoose');
mongoose.Promise=global.Promise;



var listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    monthlyRent: {
        type: Number,
        min: 0,
        max: 99999999999,
        required: true,
        unique: true
    },
    imageURL: {
        type: String,
        required: true,
        unique: true
    },


});

var Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;