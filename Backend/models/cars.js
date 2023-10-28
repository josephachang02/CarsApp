

const mongoose = require('mongoose');

const carSchema = new mongoose.Schema(
    {
        make: {
            type: Date,
            required: true },
        model: {
            type: String,
            required: true},
        color: {
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