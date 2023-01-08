import React from "react";

export const DashboardDisplayContext = React.createContext();

function DashboardDisplayProvider(props) {
    const [dashboardDisplay, setDashboardDisplay] = React.useState(0);

    const handleDashboardDisplay = () => {
        if (dashboardDisplay === 2) {
            setDashboardDisplay(0)
        } else {
            setDashboardDisplay(dashboardDisplay + 1)
        }
    }

    return <DashboardDisplayContext.Provider value={{dashboardDisplay, handleDashboardDisplay}} {...props} />;
}

function useDashboardDisplayContext() {
    return React.useContext(DashboardDisplayContext);
}

export {DashboardDisplayProvider, useDashboardDisplayContext};