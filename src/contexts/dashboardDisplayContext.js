import React from "react";
import axios from "axios";

export const DashboardDisplayContext = React.createContext();

function DashboardDisplayProvider(props) {
    const [dashboardDisplay, setDashboardDisplay] = React.useState(0);
    const [measurements, setMeasurements] = React.useState(new Map());

    const handleDashboardDisplay = () => {
        if (dashboardDisplay === 2) {
            setDashboardDisplay(0)
        } else {
            setDashboardDisplay(dashboardDisplay + 1)
        }
    }

    const getMeasurement = () => {
        axios.get('http://127.0.0.1:5000/measurement').then(resp => {
            //setMeasurements(resp.data.measurements.reduce((map, obj) => (map[obj.name] = obj.val, map), {}));
            setMeasurements(new Map(resp.data.measurements.map((obj) => [obj.name, obj])));
            console.log(measurements)
        }).catch(error => {
            console.log("Failed to retrieve measurements")
            console.log(error)
        });
    }

    React.useEffect(() => {
        getMeasurement();
    }, []);

    return <DashboardDisplayContext.Provider value={{dashboardDisplay, handleDashboardDisplay, measurements}} {...props} />;
}

function useDashboardDisplayContext() {
    return React.useContext(DashboardDisplayContext);
}

export {DashboardDisplayProvider, useDashboardDisplayContext};