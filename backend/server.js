const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 4000;

const app = express();

app.use(express.json())
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect("mongodb+srv://covid:4GPwrLtLdYcSF5Ap@cluster0-x8poy.mongodb.net/test?retryWrites=true&w=majority"
,{ useNewUrlParser:true}).then(() => {
    console.log("Successfully connected to Database");
}).catch((error) => {
    console.log("Unable to connect to Database!");
    console.log(error);
});

app.listen(PORT,() => {
    console.log(`Server is running on Port: ` + PORT);
});
