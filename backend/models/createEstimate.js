const mongoose = require('mongoose');

let createEstimateSchema = mongoose.Schema({
    estimate_region: { type:String },
    estimate_population: { type: Number },
    estimate_timeToElapse:{ type: Number },
    estimate_reportedCases:{ type: Number },
    estimate_totalHospitalBeds:{ type: Number },
    estimate_periodType: { type: String },
});
const CreateEstimate = mongoose.model("CreateEstimate",createEstimateSchema);
module.exports = CreateEstimate;