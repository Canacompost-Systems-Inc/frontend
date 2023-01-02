import React from "react";
import axios from "axios";

export const ActuatorsContext = React.createContext();

// Mock Data to be used for now to test ui rendering.
const mockData = {
    sensors: {
        shared_air: {
            pressure: null,
        },
        shredder: {
            humidity: 0,
            c02: 0,
            air_temperature: 0,
            soil_temperature: 0
        },
        bioreactor_1: {
            humidity: 0,
            c02: 0,
            air_temperature: 0,
            soil_temperature: 0
        },
        bioreactor_2: {
            humidity: 0,
            c02: 0,
            air_temperature: 0,
            soil_temperature: 0
        },
        bsf_reproduction: {
            humidity: 0,
            c02: 0,
            air_temperature: 0,
            soil_temperature: 0
        }
    }
};

function ActuatorsProvider(props) {
    const [actuators, setActuators] = React.useState([]);
    const [sensors, setSensors] = React.useState(mockData.sensors);

    const getActuators = () => {
        axios.get('http://127.0.0.1:5000/state').then(resp => {
            setSensors(resp.data.sensors)
            setActuators(resp.data.actuators);
        }).catch(error => {
            console.log("Failed to retrieve actuators")
            console.log(error)
        });
    }
      
    const postActuators = (newActuators, newSensors) => {
        let data = {actuators: newActuators, sensors: newSensors, ["py/object"]:"application.controller.dto.machine_state.MachineState"};
        axios.post('http://127.0.0.1:5000/state', data).catch(error => {
        console.log("Failed to update actuators")
        console.log(error)
      });
    }
    
    const updateActuators = (newData) => {
        postActuators(newData, sensors);
    }

    const updateSensors = (newData) => {
        postActuators(actuators, newData);
    }

    // Update actuator state every 5 seconds.
    React.useEffect(() => {
        getActuators();
        setInterval(() => {
            getActuators();
        }, 5000);
    }, []);

    return <ActuatorsContext.Provider value={{actuators, sensors, updateActuators, updateSensors}} {...props} />;
}

function useActuatorsContext() {
    return React.useContext(ActuatorsContext);
}

export {ActuatorsProvider, useActuatorsContext};
