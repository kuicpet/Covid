const mongoose = require('mongoose');

let estimateSchema = mongoose.Schema({
    estimate_region: { type:String,required: true },
    estimate_population: { type: Number,required: true },
    estimate_timeToElapse:{ type: Number,required: true },
    estimate_periodType: { type: String,required: true },
    estimate_reportedCases:{ type: Number,required: true },
    estimate_totalHospitalBeds:{ type: Number,required: true },
   

});
const Estimate = mongoose.model("Estimate",estimateSchema);
module.exports = Estimate;