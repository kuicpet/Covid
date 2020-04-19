import React, {Component} from 'react';


export default class CreateEstimate extends Component {
    constructor(props){
        super(props);
        this.state = {
            estimate_region: "",
            estimate_population: "",
            estimate_timeToElapse:"",
            estimate_reportedCases:"",
            estimate_totalHospitalBeds:"",
            estimate_periodType: "",
           
        }
        this.onChangeEstimateRegion = this.onChangeEstimateRegion.bind(this);
        this.onChangeEstimatePopulation = this.onChangeEstimatePopulation.bind(this);
        this.onChangeEstimateTimeToElapse = this.onChangeEstimateTimeToElapse.bind(this);
        this.onChangeEstimateReportedCases = this.onChangeEstimateReportedCases.bind(this);
        this.onChangeEstimateTotalHospitalBeds = this.onChangeEstimateTotalHospitalBeds.bind(this);
        this.onChangeEstimatePeriodType = this.onChangeEstimatePeriodType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChangeEstimateRegion(e){
        this.setState({
            estimate_region: e.target.value
        });
    }
    onChangeEstimatePopulation(e){
        this.setState({
            estimate_population: e.target.value
        });
    }
    onChangeEstimateTimeToElapse(e){
        this.setState({
            estimate_timeToElapse: e.target.value
        });
    }
    onChangeEstimateReportedCases(e){
        this.setState({
            estimate_reportedCases: e.target.value
        });
    }
    onChangeEstimateTotalHospitalBeds(e){
        this.setState({
            estimate_totalHospitalBeds:e.target.value
        });
    }
    onChangeEstimatePeriodType(e){
        this.setState({
            estimate_periodType: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        

        console.log(`Form Submitted:`);
        console.log(`Estimate Region: ${this.state.estimate_region}`);
        console.log(`Estimate Population: ${this.state.estimate_population}`);
        console.log(`Estimate TimeToElapse: ${this.state.estimate_timeToElapse}`);
        console.log(`Estimate ReportedCases: ${this.state.estimate_reportedCases}`);
        console.log(`Estimate TotalHospitalBeds: ${this.state.estimate_totalHospitalBeds}`);
        console.log(`Estimate PeriodType: ${this.state.estimate_periodType}`);

        this.setState({
            estimate_region:"",
            estimate_population: "",
            estimate_timeToElapse:"",
            estimate_reportedCases:"",
            estimate_totalHospitalBeds:"",
            estimate_periodType:"",
        })
    }
    render(){
        return(
            <div style={{marginTop: 2}} className="container">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <h4 className="text-center">Create Estimate</h4><hr/>
                        <form>
                        <div className="form-group row">
                            <label className="col-sm-5 col-form-label text-justify" for="region">Region*</label>
                            <div className="col-sm-7">
                            <input className="form-control my-2" name="region"
                            type="text" id="region"value={this.state.estimate_region} onChange={this.onChangeEstimateRegion}required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-5 col-form-label text-justify" for="population">Population*</label>
                            <div className="col-sm-7">
                            <input className="form-control my-2" name="population"
                            type="number"id="population" value={this.state.estimate_population} onChange={this.onChangeEstimatePopulation}required data-population />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-5 col-form-label text-justify" for="timeToElapse">Time to Elapse*</label>
                            <div className="col-sm-7">
                            <input className="form-control my-2" name="timeToElapse"
                            type="number"id="timeToElapse" value={this.state.estimate_timeToElapse} onChange={this.onChangeEstimateTimeToElapse}required data-time-to-elapse/>    
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-5 col-form-label text-justify" for="periodType">Period Type*</label>
                            <div className="col-sm-7">
                                <select className="my-2"  data-period-type name="periodType" id="periodType"value={this.state.estimate_periodType}
                                onChange={this.onChangeEstimatePeriodType}>
                                    <option value="days">Days</option>
                                    <option value="weeks">Weeks</option>
                                    <option value="months">Months</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-5 col-form-label text-justify" for="reportedCases">Reported Cases*</label>
                            <div className="col-sm-7">
                            <input className="form-control my-2" name="reportedCases"
                            type="number"id="reportedCases" value={this.state.estimate_reportedCases} onChange={this.onChangeEstimateReportedCases}required data-reported-cases/>   
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-5 col-form-label text-justify" for="totalHospitalBeds">Total Hospital Beds*</label>
                            <div className="col-sm-7">
                            <input className="form-control my-2"id="totalHospitalBeds" name="totalHospitalBeds"
                            type="number" value={this.state.estimate_totalHospitalBeds} onChange={this.onChangeEstimateTotalHospitalBeds} required data-total-hospital-beds /> 
                             </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <input type="submit" className="btn btn-primary px-5" value="Estimate" data-go-estimate/>
                            </div>
                        </div>    
                        </form>
                    </div>
                    <div className="col-sm-2"></div> 
                </div>
                <div className="footer my-5 py-2">
                    <small className="footer-copyright text-center">&copy;2020 | KingsleyUmujeyan</small>
                </div>
            </div>
        )
    }
};