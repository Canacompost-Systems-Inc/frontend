import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';
import './DataTable.css';

const axios = require('axios');

class DataTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
        oxygen: {
          value:"Retrieving...",
          delta: "Retrieving..."
        },
        temperature: {
          value:"Retrieving...",
          delta: "Retrieving..."
        }
    };
  }

  getTemperature() {
    axios.get('http://127.0.0.1:5000/temperature').then(resp => {
      this.setState({'temperature': {'value': resp.data.value, 'delta': resp.data.delta}})
    }).catch(error => {
      console.log("Failed to retrieve temperature")
      console.log(error)
    });
  }

  getOxygen() {
    axios.get('http://127.0.0.1:5000/oxygen').then(resp => {
      this.setState({'oxygen': {'value': resp.data.value, 'delta': resp.data.delta}})
    }).catch(error => {
      console.log("Failed to retrieve oxygen")
      console.log(error)
    });
  }

  componentDidMount() {
    this.getOxygen();
    this.getTemperature();
  }

  renderRow(row) {
    return (
      <tr>
        <td>{row.device}</td>
        <td>{row.value}</td>
        <td>{row.delta}</td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <Table striped bordered hover>
          <thead className="panel-heading">
            <tr>
              <th>Device</th>
              <th>Value</th>
              <th>Delta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Temperature</td>
              <td>{this.state.temperature.value}</td>
              <td>{this.state.temperature.delta}</td>
            </tr>
            <tr>
              <td>Oxygen Detector</td>
              <td>{this.state.oxygen.value}</td>
              <td>{this.state.oxygen.delta}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}

DataTable.defaultProps = {
};

export default DataTable;