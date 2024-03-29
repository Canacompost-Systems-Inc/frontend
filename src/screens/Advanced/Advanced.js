import React from 'react';
import axios from "axios";
import Card from '../../components/Card';
import Range from '../../components/Range';
import Radio from '../../components/Radio';
import Switch from '../../components/Switch';
import Template from '../Template';
import { useActuatorsContext } from '../../contexts/actuatorsContext';
import './Advanced.css';

function Advanced() {
    const actuatorContext = useActuatorsContext();
    const {actuators, updateActuators} = actuatorContext;

    const [metaState, setMetaState] = React.useState(false);

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

    const getMetaState = () => {
        axios.get('http://127.0.0.1:5000/meta_state').then(resp => {
            setMetaState(resp.data.disable_automated_routines);
        }).catch(error => {
            console.log("Failed to retrieve meta state")
            console.log(error)
        });
    }

    const postMetaState = (val) => {
        axios.post('http://127.0.0.1:5000/meta_state', {disable_automated_routines: val, ["py/object"]:"application.controller.dto.system_meta_state.SystemMetaState"}).then(() => {
            setMetaState(val)
        })
        .catch(error => {
            console.log("Failed to update meta state")
            console.log(error)
        });
    }

    React.useEffect(() => {
        getMetaState();
    }, []);

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
                <Card>
                    <Switch value={metaState} onChange={(val) => postMetaState(val)} labelLeft={"Disable Automated Tasks"}/>
                </Card>
            </div>
            <div className="advanced-main">
                <div className="advanced-main-row">
                    {Array.isArray(actuators) && actuators.length ? actuators.map(item => {
                        switch(item.type) {
                            case "SWITCH":
                                return (
                                    <div key={item.id} className="data-item">
                                        <Card>
                                            <label htmlFor={item.id} className="card-label">{`${item.id} - ${item.description}`}</label>
                                            <Switch
                                                onChange={(val) => updateData(val.toString(), item.id)}
                                                value={item.value === "true"}
                                            />
                                        </Card>
                                    </div> 
                                );
                            case "RANGE":
                                return (
                                    <div key={item.id} className="data-item">
                                        <Card>
                                            <label htmlFor={item.id} className="card-label">{`${item.id} - ${item.description}`}</label>
                                            <Range
                                                id={item.id}
                                                onChange={(val) => updateData(val.toString(), item.id)}
                                                value={item.value ? Number(item.value) : 0}
                                            />
                                        </Card>
                                    </div>
                                );
                            case "RADIO":
                                return (
                                    <div key={item.id} className="data-item">
                                        <Card>
                                            <div className="card-label">{`${item.id} - ${item.description}`}</div>
                                            <Radio
                                                id={item.id}
                                                onChange={(val) => updateData(val.toString(), item.id)}
                                                options={item.options}
                                                value={item.value ? Number(item.value) : 0}
                                            />
                                        </Card>
                                    </div>
                                );
                        }
                    }) : "No Actuator Data Available."}
                </div>
            </div>
        </Template>
    )
};

Advanced.displayName = "Advanced";

export default Advanced;