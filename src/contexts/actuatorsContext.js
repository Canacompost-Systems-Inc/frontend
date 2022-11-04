import React from "react";
// import axios from "axios";

export const ActuatorsContext = React.createContext();

// Mock Data to be used for now to test ui rendering.
const mockData = [
    {id: 'e0', value: null, type: 'RADIO', description: 'Rotary Diverter Valve From Shared Air',
        options: [
            {name: 'option 1', value: 1},
            {name: 'option 2', value: 2},
            {name: 'option 3', value: 3},
            {name: 'option 4', value: 4},
            {name: 'option 5', value: 5},
            {name: 'option 6', value: 6},
            {name: 'option 7', value: 7},
            {name: 'option 8', value: 8},
            {name: 'option 9', value: 9},
            {name: 'option 10', value: 10}
        ]
    },
    {id: 'e1', value: null, type: 'RADIO', description: 'Rotary Diverter Valve To Shared Air',
        options: [
            {name: 'option 11', value: 1},
            {name: 'option 12', value: 2},
            {name: 'option 13', value: 3},
            {name: 'option 14', value: 4},
            {name: 'option 15', value: 5}
        ]
    },
    {id: 'e2', value: 2, type: 'RADIO', description: 'Rotary Diverter Valve Compost Loop',
        options: [
            {name: 'option 16', value: 1},
            {name: 'option 17', value: 2},
            {name: 'option 18', value: 3},
            {name: 'option 19', value: 4},
            {name: 'option 20', value: 5}
        ]
    },
    {id: 'e3', value: 20, type: 'RANGE', description: 'Butterfly Valve From Shredder Storage'},
    {id: 'e4', value: 0, type: 'RANGE', description: 'Butterfly Valve From Bioreactor1'},
    {id: 'e5', value: 100, type: 'RANGE', description: 'Butterfly Valve From Bioreactor2'},
    {id: 'e6', value: null, type: 'RANGE', description: 'Butterfly Valve From BSFReproduction'},
    {id: 'e7', value: true, type: 'SWITCH', description: 'Flap Diverter Valve Sensor Loop Bypass'},
    {id: 'e8', value: null, type: 'SWITCH', description: 'Flap Diverter Valve Radiator Bypass'},
    {id: 'ea', value: true, type: 'SWITCH', description: 'Flap Diverter Valve Sensor Box Bypass'},
    {id: 'eb', value: 30, type: 'RANGE', description: 'Environment Exchange Out'},
    {id: 'ec', value: null, type: 'RANGE', description: 'Environment Exchange In'},
    {id: 'ed', value: true, type: 'SWITCH', description: 'Air Hammer Shredder Storage'},
    {id: 'ee', value: null, type: 'SWITCH', description: 'Air Hammer Bioreactor1'},
    {id: 'ef', value: null, type: 'SWITCH', description: 'Air Hammer Bioreactor2'},
    {id: 'f0', value: null, type: 'SWITCH', description: 'Air Hammer BSFReproduction'},
    {id: 'f1', value: null, type: 'SWITCH', description: 'Regen Blower'},
    {id: 'f2', value: true, type: 'SWITCH', description: 'BSFReproduction Light'},
    {id: 'f3', value: null, type: 'SWITCH', description: 'Ozone Generator'},
    {id: 'f4', value: 50, type: 'RANGE', description: 'Regen Blower Output Strength Moderator'}
];

function ActuatorsProvider(props) {
    const [actuators, setActuators] = React.useState(mockData);

    const getActuators = () => {
        // axios.get('http://127.0.0.1:5000/state').then(resp => {
        //     // Current API needs to be adjusted for proper mapping of ui. Using Mock data for now.
        //     // setActuators(resp.data.actuators);
        // }).catch(error => {
        //     console.log("Failed to retrieve actuators")
        //     console.log(error)
        // });
    }
      
    const postActuators = (actuatorState) => {
        setActuators(actuatorState)
    //     axios.post('http://127.0.0.1:5000/state', actuatorState).then(resp => {
    //         // setActuators(resp.data.actuators);
    //     }).catch(error => {
    //     console.log("Failed to update actuators")
    //     console.log(error)
    //   });
    }
    
    const updateActuators = (newData) => {
        postActuators(newData);
    }

    // Update actuator state every 5 seconds.
    React.useEffect(() => {
        setInterval(() => {
            getActuators();
        }, 5000);
    }, []);

    return <ActuatorsContext.Provider value={{actuators, updateActuators}} {...props} />;
}

function useActuatorsContext() {
    return React.useContext(ActuatorsContext);
}

export {ActuatorsProvider, useActuatorsContext};
