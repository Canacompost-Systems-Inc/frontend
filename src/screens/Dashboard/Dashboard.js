import React from 'react';
import Template from '../Template';
import './Dashboard.css';

function Dashboard() {
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
            </div>
        </Template>
    )
};

Dashboard.displayName = "Dashboard";

export default Dashboard;