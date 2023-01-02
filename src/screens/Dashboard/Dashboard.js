import React from 'react';
import Card from '../../components/Card';
import Meter from '../../components/Meter';
import Template from '../Template';
import { useActuatorsContext } from '../../contexts/actuatorsContext';
import './Dashboard.css';

function Dashboard() {
    const actuatorContext = useActuatorsContext();
    const {sensors} = actuatorContext;

    return (
        <Template>
            <div className="dashboard-header">
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
            <div className="dashboard-main">
                <div className="dashboard-main-cards">
                    <div className={`dashboard-card`}>
                        <Card>
                            <div className="chamber-card">
                                <h2 className="card-title">Bioreactor 1</h2>
                                <div className="card-content">
                                    <div className='card-row'>
                                        <Meter
                                            min={0}
                                            max={100}
                                            value={sensors.bioreactor_1.air_temperature}
                                            label="Air Temp"
                                        />
                                        <Meter
                                            min={0}
                                            max={100}
                                            value={sensors.bioreactor_1.humidity}
                                            label="Humidity"
                                        />
                                    </div>
                                    <div className='card-row'>
                                        <Meter
                                            min={0}
                                            max={100}
                                            value={sensors.bioreactor_1.soil_temperature}
                                            label="Soil Temp"
                                        />
                                        <Meter
                                            min={0}
                                            max={100}
                                            value={sensors.bioreactor_1.c02}
                                            label="CO2"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className={`dashboard-card`}>
                        <Card>
                            <div className="chamber-card">
                                <h2 className="card-title">Bioreactor 2</h2>
                                <div className="card-content">
                                    <div className='card-row'>
                                        <Meter
                                            min={0}
                                            max={100}
                                            value={sensors.bioreactor_2.air_temperature}
                                            label="Air Temp"
                                        />
                                        <Meter
                                            min={0}
                                            max={100}
                                            value={sensors.bioreactor_2.humidity}
                                            label="Humidity"
                                        />
                                    </div>
                                    <div className='card-row'>
                                        <Meter
                                            min={0}
                                            max={100}
                                            value={sensors.bioreactor_2.soil_temperature}
                                            label="Soil Temp"
                                        />
                                        <Meter
                                            min={0}
                                            max={100}
                                            value={sensors.bioreactor_2.c02}
                                            label="CO2"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className={`dashboard-card`}>
                        <Card>
                            <div className="chamber-card">
                                <h2 className="card-title">BSF Reproduction</h2>
                                <div className="card-content">
                                    <div className='card-row'>
                                        <Meter
                                            min={0}
                                            max={100}
                                            value={sensors.bsf_reproduction.air_temperature}
                                            label="Air Temp"
                                        />
                                        <Meter
                                            min={0}
                                            max={100}
                                            value={sensors.bsf_reproduction.humidity}
                                            label="Humidity"
                                        />
                                    </div>
                                    <div className='card-row'>
                                        <Meter
                                            min={0}
                                            max={100}
                                            value={sensors.bsf_reproduction.soil_temperature}
                                            label="Soil Temp"
                                        />
                                        <Meter
                                            min={0}
                                            max={100}
                                            value={sensors.bsf_reproduction.c02}
                                            label="CO2"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className={`dashboard-card`}>
                        <Card>
                            <div className="chamber-card">
                                <h2 className="card-title">Shredder</h2>
                                <div className="card-content">
                                    <div className='card-row'>
                                        <Meter min={0} max={100} value={sensors.shredder.air_temperature} label="Air Temp"/>
                                        <Meter min={0} max={100} value={sensors.shredder.humidity} label="Humidity"/>
                                    </div>
                                    <div className='card-row'>
                                        <Meter min={0} max={100} value={sensors.shredder.soil_temperature} label="Soil Temp"/>
                                        <Meter min={0} max={100} value={sensors.shredder.c02} label="CO2"/>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className={`dashboard-card`}>
                        <Card>
                            <div className="chamber-card">
                                <h2 className="card-title">Shared Air</h2>
                                <div className="card-content">
                                    <Meter isLarge min={0} max={100} value={sensors.shared_air.pressure} label="Pressure"/>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </Template>
    )
};

Dashboard.displayName = "Dashboard";

export default Dashboard;