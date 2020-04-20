const express = require('express');
const EstimateModel = require('../models/createEstimate');

const app = express();


//Get All Estimates
app.get('/estimates',async(req,res,next) => {
    const estimates = await estimateModel.find({});
    try {
        res.status(200).send(estimates);
    } catch (error) {
        res.status(500).send(error);
    }
    next();
});

app.post('/estimates/create',async(req,res,next) => {
    const estimate = new EstimateModel({
        estimate_region: req.body.estimate_region,
        estimate_population: req.body.estimate_population,
        estimate_timeToElapse: req.body.estimate_timeToElapse,
        estimate_reportedCases: req.body.estimate_reportedCases,
        estimate_totalHospitalBeds: req.body.estimate_totalHospitalBeds,
        estimate_periodType: req.body.estimate_periodType
    });
    try {
        await estimate.save();
        res.status(200).send(estimate);
        console.log("Estimate successfully sent");
    } catch (error) {
        res.status(500).send(error);
        console.log("Unable to send estimate data")
    }
    next();
});


module.exports = app;


