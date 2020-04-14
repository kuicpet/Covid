(this["webpackJsonpcovid-19-estimator"]=this["webpackJsonpcovid-19-estimator"]||[]).push([[0],{19:function(e,t,a){e.exports=a(31)},24:function(e,t,a){},25:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),s=a(15),i=a.n(s),l=(a(24),a(5)),r=a(6),m=a(7),c=a(8),p=a(18),d=a(4),u=(a(25),a(3)),E=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var o;return Object(l.a)(this,a),(o=t.call(this,e)).state={estimate_region:"",estimate_population:"",estimate_timeToElapse:"",estimate_reportedCases:"",estimate_totalHospitalBeds:"",estimate_periodType:""},o.onChangeEstimateRegion=o.onChangeEstimateRegion.bind(Object(u.a)(o)),o.onChangeEstimatePopulation=o.onChangeEstimatePopulation.bind(Object(u.a)(o)),o.onChangeEstimateTimeToElapse=o.onChangeEstimateTimeToElapse.bind(Object(u.a)(o)),o.onChangeEstimateReportedCases=o.onChangeEstimateReportedCases.bind(Object(u.a)(o)),o.onChangeEstimateTotalHospitalBeds=o.onChangeEstimateTotalHospitalBeds.bind(Object(u.a)(o)),o.onChangeEstimatePeriodType=o.onChangeEstimatePeriodType.bind(Object(u.a)(o)),o.onSubmit=o.onSubmit.bind(Object(u.a)(o)),o}return Object(r.a)(a,[{key:"onChangeEstimateRegion",value:function(e){this.setState({estimate_region:e.target.value})}},{key:"onChangeEstimatePopulation",value:function(e){this.setState({estimate_population:e.target.value})}},{key:"onChangeEstimateTimeToElapse",value:function(e){this.setState({estimate_timeToElapse:e.target.value})}},{key:"onChangeEstimateReportedCases",value:function(e){this.setState({estimate_reportedCases:e.target.value})}},{key:"onChangeEstimateTotalHospitalBeds",value:function(e){this.setState({estimate_totalHospitalBeds:e.target.value})}},{key:"onChangeEstimatePeriodType",value:function(e){this.setState({estimate_periodType:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),console.log("Form Submitted:"),console.log("Estimate Region: ".concat(this.state.estimate_region)),console.log("Estimate Population: ".concat(this.state.estimate_population)),console.log("Estimate TimeToElapse: ".concat(this.state.estimate_timeToElapse)),console.log("Estimate ReportedCases: ".concat(this.state.estimate_reportedCases)),console.log("Estimate TotalHospitalBeds: ".concat(this.state.estimate_totalHospitalBeds)),console.log("Estimate PeriodType: ".concat(this.state.estimate_periodType)),this.setState({estimate_region:"",estimate_population:"",estimate_timeToElapse:"",estimate_reportedCases:"",estimate_totalHospitalBeds:"",estimate_periodType:""})}},{key:"render",value:function(){return n.a.createElement("div",{style:{marginTop:2}},n.a.createElement("div",null,n.a.createElement("h3",null,"Create Estimate")),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-25"},n.a.createElement("label",{for:"region"},"REGION*")),n.a.createElement("div",{className:"col-75"},n.a.createElement("input",{className:"form-control",name:"region",type:"text",id:"region",value:this.state.estimate_region,onChange:this.onChangeEstimateRegion,required:!0}))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-25"},n.a.createElement("label",{for:"population"},"POPULATION*")),n.a.createElement("div",{className:"col-75"},n.a.createElement("input",{className:"form-control",name:"population",type:"number",id:"population",value:this.state.estimate_population,onChange:this.onChangeEstimatePopulation,required:!0,"data-population":!0}))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-25"},n.a.createElement("label",{for:"timeToElapse"},"TIME TO ELAPSE*")),n.a.createElement("div",{className:"col-75"},n.a.createElement("input",{className:"form-control",name:"timeToElapse",type:"number",id:"timeToElapse",value:this.state.estimate_timeToElapse,onChange:this.onChangeEstimateTimeToElapse,required:!0,"data-time-to-elapse":!0}))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"form-check form-check-inline"},n.a.createElement("input",{className:"form-check-input",type:"radio",id:"periodTypeDays",name:"periodTypes",value:"Days",checked:"Days"===this.state.estimate_periodType,onChange:this.onChangeEstimatePeriodType,"data-period-type":!0}),n.a.createElement("label",{className:"form-check-label",for:"periodTypeDays"},"Days")),n.a.createElement("div",{className:"form-check form-check-inline"},n.a.createElement("input",{className:"form-check-input",type:"radio",id:"periodTypeWeeks",name:"periodTypes",value:"Weeks",checked:"Weeks"===this.state.estimate_periodType,onChange:this.onChangeEstimatePeriodType,"data-period-type":!0}),n.a.createElement("label",{className:"form-check-label",for:"periodTypeWeeks"},"Weeks")),n.a.createElement("div",{className:"form-check form-check-inline"},n.a.createElement("input",{className:"form-check-input",type:"radio",id:"periodTypeMonths",name:"periodTypes",value:"Months",checked:"Months"===this.state.estimate_periodType,onChange:this.onChangeEstimatePeriodType,"data-period-type":!0}),n.a.createElement("label",{className:"form-check-label",for:"periodTypeMonths"},"Months"))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-25"},n.a.createElement("label",{for:"reportedCases"},"REPORTED CASES*")),n.a.createElement("div",{className:"col-75"},n.a.createElement("input",{className:"form-control",id:"reportedCases",name:"reportedCases",type:"number",value:this.state.estimate_reportedCases,onChange:this.onChangeEstimateReportedCases,required:!0,"data-reported-cases":!0}))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-25"},n.a.createElement("label",{for:"totalHospitalBeds"},"TOTAL HOSPITAL BEDS*")),n.a.createElement("div",{className:"col-75"},n.a.createElement("input",{className:"form-control",id:"totalHospitalBeds",name:"totalHospitalBeds",type:"number",value:this.state.estimate_totalHospitalBeds,onChange:this.onChangeEstimateTotalHospitalBeds,required:!0,"data-total-hospital-beds":!0}))),n.a.createElement("div",{className:"row"},n.a.createElement("input",{type:"submit",value:"ESTIMATE",className:"btn","data-go-estimate":!0}))))}}]),a}(o.Component),h=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h2",null,"Result Estimates"))}}]),a}(o.Component),g=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return n.a.createElement(p.a,null,n.a.createElement("div",{className:"container"},n.a.createElement("h1",null,"Novel COVID-19 Estimator"),n.a.createElement("hr",null),n.a.createElement(d.a,{path:"/",component:E}),n.a.createElement(d.a,{path:"/result",component:h})))}}]),a}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.a73d7c57.chunk.js.map