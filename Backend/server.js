const Car = require('./Backend/models/cars.js');

const express = require('express');
const cors = require ('cors');
const morgan = require('morgan');
const helmet = require('helmet');
require('dotenv').config();
const PORT = 3000;
require('./config/db.js')

const app = express();

// START MIDDLEWARE
app.use(express.json());
app.use(cors({
    origin: "*"
}));
app.use(morgan('dev'));
app.use(helmet());
// END MIDDLEWARE



app.get('/cars', async (req,res) => {
    let carDB = await Car.find();
    res.send(carDB); 
})

app.post('/cars', async (req,res) => {
    let response = await Car.create(req.body);
    res.send(response);

})

app.get('/cars/:carName', (req,res) => {
    
})