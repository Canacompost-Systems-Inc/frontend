import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';
import './DataTable.css';

class DataTable extends Component {

  getTableData() {
    return [
      {
        "device": "Thermometer",
        "value": "4C",
        "delta": "+1C"
      },
      {
        "device": "Humidity Detector",
        "value": "60%",
        "delta": "+3%"
      },
      {
        "device": "Oxygen Detector",
        "value": "70%",
        "delta": "-2%"
      }
    ]
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
            {this.getTableData().map(row => (this.renderRow(row)))}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default DataTable;