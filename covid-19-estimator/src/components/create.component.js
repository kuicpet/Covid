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

       /*const newEstimate = {
           estimate_region:this.state.estimate_region,
           estimate_population:this.state.estimate_population,
           estimate_timeToElapse:this.state.estimate_timeToElapse,
           estimate_reportedCases:this.state.estimate_reportedCases,
           estimate_totalHospitalBeds:this.state.estimate_totalHospitalBeds,
           estimate_periodType:this.state.estimate_periodType
       }*/

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
            <div style={{marginTop: 2}}>
                <div>
                    <h3>Create Estimate</h3>
                </div>
                <form onSubmit={this.onSubmit}>
                   <div className="row">
                       <div className="col-25">
                            <label for="region">REGION*</label>
                       </div>
                       <div className="col-75">
                            <input className="form-control" name="region"
                            type="text" id="region"value={this.state.estimate_region} onChange={this.onChangeEstimateRegion}required />
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-25">
                         <  label for="population">POPULATION*</label>
                       </div>
                       <div className="col-75">
                            <input className="form-control" name="population"
                            type="number"id="population" value={this.state.estimate_population} onChange={this.onChangeEstimatePopulation}required data-population />
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-25">
                            <label for="timeToElapse">TIME TO ELAPSE*</label>
                       </div>
                       <div className="col-75">
                            <input className="form-control" name="timeToElapse"
                            type="number"id="timeToElapse" value={this.state.estimate_timeToElapse} onChange={this.onChangeEstimateTimeToElapse}required data-time-to-elapse/>                 
                       </div>
                   </div>
                   <div className="row">
                        <div className="col">
                        <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                            type="radio" id="periodTypeDays" name="periodTypes"
                            value="Days" checked={this.state.estimate_periodType==="Days"}
                            onChange={this.onChangeEstimatePeriodType}data-period-type />
                            <label className="form-check-label"for="periodTypeDays">Days</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                            type="radio" id="periodTypeWeeks" name="periodTypes"
                            value="Weeks" checked={this.state.estimate_periodType==="Weeks"}
                            onChange={this.onChangeEstimatePeriodType}data-period-type />
                            <label className="form-check-label" for="periodTypeWeeks">Weeks</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" 
                            type="radio" id="periodTypeMonths" name="periodTypes"
                            value="Months" checked={this.state.estimate_periodType==="Months"}
                            onChange={this.onChangeEstimatePeriodType}data-period-type />
                            <label className="form-check-label"for="periodTypeMonths">Months</label>
                        </div>
                    </div>
                        </div>
                   </div>
                   <div className="row">
                       <div className="col-25">
                            <label for="reportedCases">REPORTED CASES*</label>
                       </div>
                       <div className="col-75">
                            <input className="form-control"id="reportedCases" name="reportedCases"
                            type="number" value={this.state.estimate_reportedCases} onChange={this.onChangeEstimateReportedCases}required data-reported-cases />                
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-25">
                            <label for="totalHospitalBeds">TOTAL HOSPITAL BEDS*</label>
                       </div>
                       <div className="col-75">
                            <input className="form-control"id="totalHospitalBeds" name="totalHospitalBeds"
                            type="number" value={this.state.estimate_totalHospitalBeds} onChange={this.onChangeEstimateTotalHospitalBeds} required data-total-hospital-beds /> 
                       </div>
                   </div>
                   <div className="row">
                   <    input type="submit"value="ESTIMATE"  data-go-estimate/>
                   </div>
                </form>
            </div>
        )
    }
};