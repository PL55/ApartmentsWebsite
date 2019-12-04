var mongoose = require('mongoose');
mongoose.Promise=global.Promise;

var reviewSchema = new mongoose.Schema({});

var forSaleSchema = new mongoose.Schema({
    rating: {
        type: Number,
        min: 0.0,
        max: 5.0,
        required: true
    },
    comment: {
        type: String
    },
    author: {
        type: String,
        required: true
    }
});

var addressSchema = new mongoose.Schema({
    street: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    State: {
        type: String,
        required: true
    },

    Zipcode: {
        type: Number,
        required: true
    }
})

var listingSchema = new mongoose.Schema({,

    address: [addressSchema],

    year: {
        type: Number,
        min: 0,
        max: 2019,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    reviews: [reviewSchema] 
});

var Listing = mongoose.model('Listing', movieSchema);
module.exports = Listing;