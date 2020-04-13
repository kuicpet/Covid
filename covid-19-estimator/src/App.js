import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


import CreateEstimate from "./components/create.component";
import ResultEstimate from "./components/result.component";

class App extends Component {
  render(){
    return (
      <Router>
          <div className="container">
            <h1>COVID-19 Estimator</h1>
            <hr/>

            <Route path="/" component={CreateEstimate} />
            <Route path="/result" component={ResultEstimate} />
          </div>
      </Router>
    )
  }
}
export default App;