# Covid
# BuildForSDG Cohort-1 JavaScript Assessment-Frontend Challenge
#Tasks A - For Frontend Developers

Build a simple single page web app that can allow the data passed to your estimator function to be
inputed from a UI. Your goal is to build a simple UI that
. Scores a minimum of 75 for performance, best practices, SEO, and accessibility, as measured by
Chrome's Lighthouse tool. Host your web app with GitHub pages (or Netlify), and make sure the
root of your project has a .env file with a FRONTEND entry pointing to the link of your hosted and
running UI app. E.g:

FRONTEND=http://url-of-hosted-and-running-web-app

. Can allow a user enter data with some input fields, and then click on a button which passes the
data to the estimation function you built from challenge 1 to 3. In the UI, designate each input field with a HTML attribute as follows: 

-input for population data has attribute of data-population 
-input for timeToElapse data has attribute of data-time-to-elapse 
-input for reportedCases data has attribute of data-reported-cases 
-input for totalHospitalBeds data has attribute of data-total-hospital-beds 
-input for periodType data has attribute of data-period-type and should be a SELECT or RADIO input field with values limited to days, weeks, or months the button for submitting the data from the UI should have an attribute of data-go- estimate. 

Feel free to handle submission with the data-go-estimate button and pass the data from the input fields to your estimation function. Though this is not required (we won't even check), doing it helps you have a functional UI you can show off! 

This is the Front-end Repo,
Hosted App Link Here.

 <form onSubmit={this.onSubmit}>
                   <div className="row">
                       <div className="col-sm-5">
                            <label for="region">REGION*</label>
                       </div>
                       <div className="col-sm-7">
                            <input className="form-control" name="region"
                            type="text" id="region"value={this.state.estimate_region} onChange={this.onChangeEstimateRegion}required />
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-sm-2">
                         <  label for="population">POPULATION*</label>
                       </div>
                       <div className="col-sm-10">
                            <input className="form-control" name="population"
                            type="number"id="population" value={this.state.estimate_population} onChange={this.onChangeEstimatePopulation}required data-population />
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-sm-2">
                            <label for="timeToElapse">TIME TO ELAPSE*</label>
                       </div>
                       <div className="col-sm-10">
                            <input className="form-control" name="timeToElapse"
                            type="number"id="timeToElapse" value={this.state.estimate_timeToElapse} onChange={this.onChangeEstimateTimeToElapse}required data-time-to-elapse/>                 
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-sm-2">
                           <label for="periodType">PERIOD TYPE*</label>
                       </div>
                        <div className="col-sm-10">
                            <select data-period-type name="periodType" id="periodType"value={this.state.estimate_periodType}
                            onChange={this.onChangeEstimatePeriodType}>
                                <option value="days">Days</option>
                                <option value="weeks">Weeks</option>
                                <option value="months">Months</option>
                            </select>
                        </div>
                   </div>
                   <div className="row">
                       <div className="col-sm-2">
                            <label for="reportedCases">REPORTED CASES*</label>
                       </div>
                       <div className="col-sm-10">
                            <input className="form-control" name="reportedCases"
                            type="number"id="reportedCases" value={this.state.estimate_reportedCases} onChange={this.onChangeEstimateReportedCases}required data-reported-cases/>                 
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-sm-2">
                            <label for="totalHospitalBeds">TOTAL HOSPITAL BEDS*</label>
                       </div>
                       <div className="col-sm-10">
                            <input className="form-control"id="totalHospitalBeds" name="totalHospitalBeds"
                            type="number" value={this.state.estimate_totalHospitalBeds} onChange={this.onChangeEstimateTotalHospitalBeds} required data-total-hospital-beds /> 
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-sm-12">
                            <input type="submit"value="ESTIMATE" className="btn" data-go-estimate/>
                       </div>
                   </div>
                </form>

