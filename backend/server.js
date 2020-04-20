const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const estimateRouter = require('./routes/routes');
const PORT = 4000;

const app = express();

app.use(express.json())
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const url = process.env.MONGO_URI;

mongoose.connect(url,{ useNewUrlParser:true, useUnifiedTopology: true}).then(() => {
    console.log("Successfully connected to Database");
}).catch((error) => {
    console.log("Unable to connect to Database!");
    console.log(error);
});

app.use(estimateRouter);

app.listen(PORT,() => {
    console.log(`Server is running on Port: ` + PORT);
});
