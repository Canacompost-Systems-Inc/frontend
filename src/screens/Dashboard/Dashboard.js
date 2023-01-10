import React from 'react';
import Card from '../../components/Card';
import Meter from '../../components/Meter';
import Template from '../Template';
import { useActuatorsContext } from '../../contexts/actuatorsContext';
import { useThemeContext } from '../../contexts/themeContext';
import { useDashboardDisplayContext } from '../../contexts/dashboardDisplayContext';
import { handleTitles } from "../../helpers/helpers";
import './Dashboard.css';

function Dashboard() {
    const actuatorContext = useActuatorsContext();
    const {sensors} = actuatorContext;

    const themeContext = useThemeContext();
    const {theme} = themeContext;

    const dashboardDisplayContext = useDashboardDisplayContext();
    const {dashboardDisplay, handleDashboardDisplay} = dashboardDisplayContext;

    return (
        <Template>
            <div className="dashboard-header">
                <div className="dashboard-header-title">
                    <svg
                        style={{
                            width:"1.5em",
                            height:"1.5em"
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                        />
                    </svg>
                    <h1 className="screen-title">Dashboard</h1>
                </div>
                <button
                    className={`toggle-view-btn toggle-view-btn-${theme}`}
                    onClick={() => {handleDashboardDisplay()}}
                >
                    Toggle View
                </button>
            </div>
            <div className="dashboard-main">
                <div className="dashboard-main-routine">
                    <Card>
                        <div className="dashboard-main-routine-row">
                            <b>Active Task</b>
                            <span>Task Name</span>
                        </div>
                    </Card>
                </div>
                <div className="dashboard-main-cards">
                    {
                        Object.keys(sensors).length ? Object.keys(sensors).map(property => {
                            if (property !== "py/object") {
                                return (
                                    <div className={`dashboard-card`} key={property}>
                                        <Card>
                                            <div className="dashboard-chamber-card">
                                                <h2 className="card-title">{handleTitles(property)}</h2>
                                                <div className="card-content">
                                                    {
                                                        Object.keys(sensors[property]).map(nestedProperty => {
                                                            if (nestedProperty !== "py/object") {
                                                                switch (dashboardDisplay) {
                                                                    case 2:
                                                                        return (
                                                                            <div className={`dashboard-card-sensor dashboard-card-sensor-${theme}`} key={`${property}-${nestedProperty}`}>
                                                                                <div className="dashboard-card-sensor-value">
                                                                                    {sensors[property][nestedProperty] ? sensors[property][nestedProperty] : 0}
                                                                                </div>
                                                                                <div className="dashboard-card-sensor-title">
                                                                                    {handleTitles(nestedProperty).replace("Temperature", "Temp")}
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    case 0:
                                                                        return (
                                                                            <Meter
                                                                                key={`${property}-${nestedProperty}`}
                                                                                min={0}
                                                                                max={100}
                                                                                value={sensors[property][nestedProperty] ? sensors[property][nestedProperty] : 0}
                                                                                label={handleTitles(nestedProperty).replace("Temperature", "Temp")}
                                                                            />
                                                                        )
                                                                    case 1:
                                                                        return (
                                                                            <div className="dashboard-card-table" key={`${property}-${nestedProperty}`}>
                                                                                {handleTitles(nestedProperty).replace("Temperature", "Temp")}
                                                                                <b>{sensors[property][nestedProperty] ? sensors[property][nestedProperty] : 0}</b>
                                                                            </div>
                                                                        )
                                                                }
                                                            }
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                )
                            }
                        }) : "No Sensor Data Available."
                    }
                </div>
            </div>
        </Template>
    )
};

Dashboard.displayName = "Dashboard";

export default Dashboard;