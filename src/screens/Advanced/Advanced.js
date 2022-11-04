import React from 'react';
import Card from '../../components/Card'
import Range from '../../components/Range'
import Radio from '../../components/Radio'
import Switch from '../../components/Switch'
import Template from '../Template';
import { useActuatorsContext } from '../../contexts/actuatorsContext';
import './Advanced.css';

function Advanced() {
    const actuatorContext = useActuatorsContext();
    const {actuators, updateActuators} = actuatorContext;

    const updateData = (val, id) => {
        const updatedActuators = actuators.map(item => {
            if (item.id === id) {
                return ({
                    ...item,
                    value: val
                })
            } else {
                return item;
            }
        })
        updateActuators(updatedActuators)
    };

    return (
        <Template>
            <div className="advanced-header">
            <span className="advanced-header-title">
                <svg
                    style={{width:"1.5em",height:"1.5em" }}
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
                        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                    />
                </svg>
                <h1 className="screen-title">Advanced</h1>
                </span>
            </div>
            <div className="advanced-main">
                <div className="advanced-main-row">
                    {actuators.map(item => {
                        if (item.type.toUpperCase() === "SWITCH") {
                            return (
                                <div key={item.id} className="data-item">
                                    <Card>
                                        <label htmlFor={item.id} className="card-label">{`${item.id} - ${item.description}`}</label>
                                        <Switch
                                            onChange={(val) => updateData(val, item.id)}
                                            value={item.value ? item.value : false}
                                        />
                                    </Card>
                                </div> 
                            )
                        } else
                        if (item.type.toUpperCase() === "RANGE") {
                            return (
                                <div key={item.id} className="data-item">
                                    <Card>
                                        <label htmlFor={item.id} className="card-label">{`${item.id} - ${item.description}`}</label>
                                        <Range
                                            id={item.id}
                                            onChange={(val) => updateData(val, item.id)}
                                            value={item.value ? item.value : 0}
                                        />
                                    </Card>
                                </div>
                            )
                        } else
                        if (item.type.toUpperCase() === "RADIO") {
                            return (
                                <div key={item.id} className="data-item">
                                    <Card>
                                        <div className="card-label">{`${item.id} - ${item.description}`}</div>
                                        <Radio
                                            id={item.id}
                                            onChange={(val) => updateData(val, item.id)}
                                            options={item.options}
                                            value={item.value ? item.value : 0}
                                        />
                                    </Card>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </Template>
    )
};

Advanced.displayName = "Advanced";

export default Advanced;