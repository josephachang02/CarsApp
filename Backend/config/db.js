const mongoose = require('mongoose');


let connectionString = `mongodb+srv://josephachang02:${process.env.MONGO_PASS}@cluster0.vz6knf8.mongodb.net/?retryWrites=true&w=majority`
;

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once('open', ()=> {
    console.log('connected to DATABASE'); 
  });