import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import './Buttons.css';

class Buttons extends Component {

  raiseTemperature() {
    console.log("Raising temperature...");
  }

  raiseHumidity() {
    console.log("Raising Humidity...");
  }

  raiseOxygen() {
    console.log("Raising Oxygen...");
  }

  render() {
    return (
    <div>
        <Button variant="primary" size="sm" onClick={this.raiseTemperature}>Raise Temperature</Button>{' '}
        <Button variant="secondary" size="sm" onClick={this.raiseHumidity}>Raise Humidity</Button>{' '}
        <Button variant="success" size="sm" onClick={this.raiseOxygen}>Raise Oxygen</Button>{' '}
    </div>
    )
  }
}

export default Buttons;