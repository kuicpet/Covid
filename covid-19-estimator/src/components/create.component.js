import React, {Component} from 'react';

export default class CreateEstimate extends Component {
    
    constructor(props){
        super(props);

        this.onChangeRegion = this.onChangeRegion.bind(this);
        this.onChangePopulation = this.onChangePopulation.bind(this);
        this.onChangeAvgAge = this.onChangeAvgAge.bind(this);
        this.onChangeAvgDailyIncomeInUSD = this.onChangeAvgDailyIncomeInUSD.bind(this);
        this.onChangeAvgDailyIncomePopulation = this.onChangeAvgDailyIncomePopulation.bind(this);
        this.onChangePeriodType = this.onChangePeriodType.bind(this);
        this.onChangeTimeToElapse =this.onChangeTimeToElapse.bind(this);
        this.onChangeReportedCases = this.onChangeReportedCases.bind(this);
        this.onChangeTotalHospitalBeds = this.onChangeTotalHospitalBeds.bind(this); 


        this.state = {
            region:'',
            population:'',
            avgAge:'',
            avgDailyIncomeInUSD:'',
            avgDailyIncomePopulation: '',
            periodType:'',
            timeToElapse:'',
            reportedCases:'',
            totalHospitalBeds:'' 
        };
    };
    onChangeRegion(e){
        this.setState({
            data_region: e.target.value
        });
    }
    onChangePopulation(e){
        this.setState({
            data_population: e.target.value
        });
    }
    onChangeAvgAge(e){
        this.setState({
            data_avg_age: e.target.value
        });
    }
    onChangeAvgDailyIncomeInUSD(e){
        this.setState({
            data_avg_daily_income_in_usd: e.target.value
        });
    }
    onChangeAvgDailyIncomePopulation(e){
        this.setState({
            data_avg_daily_income_population: e.target.value
        });
    }
    onChangePeriodType(e){
        this.setState({
            data_period_type: e.target.value
        });
    }
    onChangeTimeToElapse(e){
        this.setState({
            data_time_to_elapse: e.target.value
        });
    }
    onChangeReportedCases(e){
        this.setState({
            data_reported_cases: e.target.value
        });
    }
    onChangeTotalHospitalBeds(e){
        this.setState({
            data_total_hospital_beds: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();

        console.log(`Form Submitted:`);
        console.log(`Region:${this.state.region}`);
        console.log(`Population:${this.state.population}`);
        console.log(`AvgAge:${this.state.avgAge}`);
        console.log(`AvgDailyIncomeInUSD:${this.state.avgDailyIncomeInUSD}`);
        console.log(`AvgDailyIncomePopulation:${this.state.avgDailyIncomePopulation}`);
        console.log(`PeriodType:${this.state.periodType}`);
        console.log(`TimeToElapse:${this.state.timeToElapse}`);
        console.log(`ReportedCases:${this.state.reportedCases}`);
        console.log(`TotalHospitalBeds:${this.state.totalHospitalBeds}`);

        this.setState({
            region:'',
            population:'',
            avgAge:'',
            avgDailyIncomeInUSD:'',
            avgDailyIncomePopulation: '',
            periodType:'',
            timeToElapse:'',
            reportedCases:'',
            totalHospitalBeds:'' 
        })
    }

    render(){
        return(
            <div>
                <h3>Create an Estimate</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name of Region*</label>
                        <input type="text" className="form-control"value={this.state.data_region} 
                        onChange={this.onChangeRegion}required/>
                    </div>
                    <div className="form-group">
                        <label>Population of Region*</label>
                        <input type="number" className="form-control"value={this.state.data_population} 
                        onChange={this.onChangePopulation}required/>
                    </div>
                    <div className="form-group">
                        <label>AvgAge*</label>
                        <input type="number" className="form-control"value={this.state.data_avg_age} 
                        onChange={this.onChangeAvgAge}required/>
                    </div>
                    <div className="form-group">
                        <label>AvgDailyIncomeInUSD*</label>
                        <input type="number" className="form-control"value={this.state.data_avg_daily_income_in_usd} 
                        onChange={this.onChangeAvgDailyIncomeInUSD}required/>
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                            type="radio"
                            name="periodType"
                            id="periodTypeDays"
                            value="Days"
                            checked={this.state.data_period_type==='Days'}
                            onChange={this.onChangePeriodType}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>TimeToElapse*</label>
                        <input type="number" className="form-control"value={this.state.data_time_to_elapse} 
                        onChange={this.onChangeTimeToElapse}required/>
                    </div>
                    <div className="form-group">
                        <label>ReportedCases*</label>
                        <input type="number" className="form-control"value={this.state.data_reported_cases} 
                        onChange={this.onChangeReportedCases}required/>
                    </div>
                    <div className="form-group">
                        <label>TotalHospitalBeds*</label>
                        <input type="text" className="form-control"value={this.state.data_total_hospital_beds} 
                        onChange={this.onChangeTotalHospitalBeds}required/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Estimate" className="btn"/>
                    </div>
                </form>
            </div>
        )
    }
};