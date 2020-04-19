import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import CreateEstimate from "./components/create.component";


class App extends Component {
  render(){
    return (
      <Router>
          <div className="container my-3">
            <h1>Novel COVID-19 Estimator</h1>
            <hr/>
            <Route path="/" component={CreateEstimate} />
          </div>
      </Router>
    )
  }
}
export default App;