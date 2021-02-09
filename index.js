const express = require('express')
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

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


//Route middlewares
app.use('/api/user',authRoute);
app.use('/api/demoprivate',demoPrivateRoute);



app.listen(3000, () => console.log("****\nServer Is running\n****"));
