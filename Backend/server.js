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

app.post('/cars', (req,res) => {


})

app.get('/cars', (req,res) => {

})

app.get('/cars/:carName', (req,res) => {
    
})