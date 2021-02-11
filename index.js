const express = require('express')
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan'); // package to log all requests

//import routers
const authRoute = require('./routes/auth');
const demoPrivateRoute = require('./routes/demoPriveteRoute');


dotenv.config();

//connect to DB
mongoose.connect(process.env.DB_URL,()=>{
    console.log("****\nDB Connected\n****");
});

//Middlewares
app.use(express.json());
// app.use(morgan('combined'))

//Route middlewares
app.use('/auth',authRoute);
app.use('/api/demoprivate',demoPrivateRoute);



app.listen(3000, () => console.log("****\nServer Is running\n****"));
