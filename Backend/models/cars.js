

const mongoose = require('mongoose');

const carSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true},
        make: {
            type: Date,
            required: true },
        model: {
            type: String,
            required: true},
        description: {
            type: String,
            required: true}, 
        year: {
            type: String,
            required: true}, 
        image: {
            type: String,
            required: true}, 
    }, 
    {
        timestamps: true,
    }
); 


// This will point to the collection
const Car = mongoose.model("Car", carSchema);

module.exports = Car;