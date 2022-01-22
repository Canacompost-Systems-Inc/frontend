import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import DataTable from './components/dataTable/DataTable';
import Buttons from './components/buttons/Buttons';

class App extends Component {

  render() {

    return (
      <div className="App">
        
        <div className="page-header">
          <h3> Canacompost Control Console </h3>
          <h4> <small> Monitor and control the status of the composter. </small> </h4>
        </div>

        <DataTable />
        <Buttons />
      </div>
    );
  }
}

export default App;