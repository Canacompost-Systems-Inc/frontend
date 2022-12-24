import React from 'react';
import Card from '../../components/Card';
import Meter from '../../components/Meter';
import Template from '../Template';
import { useActuatorsContext } from '../../contexts/actuatorsContext';
import { useThemeContext } from '../../contexts/themeContext';
import './Chambers.css';

function Chambers() {
    // All our chamber references for displaying paginated screens.
    const chambers = [
        {name: "Bio. 1", value: "bioreactor_1"},
        {name: "Bio. 2", value: "bioreactor_2"},
        {name: "BSF", value: "bsf_reproduction"},
        {name: "Shredder", value: "shredder"},
        {name: "Shared", value: "shared_air"},
    ]

    const actuatorContext = useActuatorsContext();
    const {sensors, updateSensors} = actuatorContext;

    const themeContext = useThemeContext();
    const {theme} = themeContext;

    const [activeChamber, setActiveChamber] = React.useState(0);
    
    const [setValues, setSetValues] = React.useState({});
    const [savedSetValues, setSavedSetValues] = React.useState({});

    const [meters, setMeters] = React.useState(Object.keys(sensors[chambers[activeChamber].value]));

    React.useEffect(() => {
        setMeters(Object.keys(sensors[chambers[activeChamber].value]))
    }, [activeChamber])

    const updateData = (id, key, val) => {
        if (val) {
            const updatedSensors = {
                ...sensors,
                [id]: {
                    ...sensors[id],
                    [key]: val
                }
            };
            updateSavedSetValue(val, id, key)
            updateSensors(updatedSensors)
        }
    };

    const handlePagination = (val) => {
        if (val > chambers.length - 1) {
            return 0;
        } else
        if (val < 0) {
            return chambers.length - 1;
        } else {
            return val;
        }
    }

    const handleTitles = (val) => {
        if (val.includes("_")) {
            const textArray = val.split("_");
            
            return textArray.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        } else {
            return val.charAt(0).toUpperCase() + val.slice(1);
        }
    }

    const updateSetValue = (val, key, id) => {
        setSetValues({...setValues, [`${key}-${id}`]: val})
    };

    const updateSavedSetValue = (val, id, key) => {
        setSavedSetValues({...savedSetValues, [`${id}-${key}`]: val})
    };

    // checks if setValue exist, if not displays default current meter value.
    // returns display value and boolean to indicate if val was found or not.
    const checkForSetValue = (state, property) => {
        let updatedSetValue = state[`${chambers[activeChamber].value}-${property}`];

        if (updatedSetValue) {
            return [updatedSetValue, true];
        } else {
            return [sensors[chambers[activeChamber].value][property], false];
        }
    }

    return (
        <Template>
            <div className="chambers-header">
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
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082"
                    />
                </svg>
                <h1 className="screen-title">{handleTitles(chambers[activeChamber].value)}</h1>
            </div>
            <div className="chambers-main">
                <nav className="chambers-nav">
                    <ul className="chambers-pagination">
                        <li>
                            <button
                                onClick={() => setActiveChamber(handlePagination(activeChamber - 1))}
                                className={`btn pagination-chamber-${theme}`}
                            >
                                {`<`}
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setActiveChamber(0)}
                                className={`btn pagination-chamber pagination-chamber-${theme} ${activeChamber === 0 ? 'pagination-chamber-selected' : ''}`}
                            >
                                Bio. 1
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setActiveChamber(1)}
                                className={`btn pagination-chamber pagination-chamber-${theme} ${activeChamber === 1 ? 'pagination-chamber-selected' : ''}`}
                            >
                                Bio. 2
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setActiveChamber(2)}
                                className={`btn pagination-chamber pagination-chamber-${theme} ${activeChamber === 2 ? 'pagination-chamber-selected' : ''}`}
                            >
                                BSF
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setActiveChamber(3)}
                                className={`btn pagination-chamber pagination-chamber-${theme} ${activeChamber === 3 ? 'pagination-chamber-selected' : ''}`}
                            >
                                Shredder
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setActiveChamber(4)}
                                className={`btn pagination-chamber pagination-chamber-${theme} ${activeChamber === 4 ? 'pagination-chamber-selected' : ''}`}
                            >
                                    Shared
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setActiveChamber(handlePagination(activeChamber + 1))}
                                className={`btn pagination-chamber-${theme}`}
                            >
                                {`>`}
                            </button>
                        </li>
                    </ul>
                </nav>
                <div className="chamber-main-cards">
                    {Array.isArray(meters) && meters.length ? meters.map(property => {
                        if (property !== 'py/object') {
                            return (
                                <div className="chambers-card" key={property}>
                                    <Card>
                                        <div className="chamber-card">
                                            <h2 className="card-title">{handleTitles(property)}</h2>
                                            <div className="chamber-card-content">
                                                <Meter isLarge min={0} max={100} value={sensors[chambers[activeChamber].value][property]} label={handleTitles(property)}/>
                                            </div>
                                            <div className='chamber-card-content-row'>
                                                <button
                                                    onClick={() => updateSetValue(checkForSetValue(setValues, property)[0] - 1, chambers[activeChamber].value, property)}
                                                    type="button"
                                                    className={`btn chambers-btn chambers-btn-${theme}`}
                                                >
                                                    -
                                                </button>
                                                <label className='chambers-set-to'>
                                                    {
                                                        (
                                                            checkForSetValue(savedSetValues, property)[0] === checkForSetValue(setValues, property)[0] &&
                                                            checkForSetValue(savedSetValues, property)[1] && checkForSetValue(setValues, property)[1]
                                                        ) ? "Set to" : ""
                                                    }
                                                    {
                                                        checkForSetValue(savedSetValues, property)[0] === checkForSetValue(setValues, property)[0] &&
                                                        checkForSetValue(savedSetValues, property)[1] && checkForSetValue(setValues, property)[1] ? <br/> : null
                                                    }
                                                    <b>{checkForSetValue(setValues, property)[0]}</b>
                                                </label>
                                                <button
                                                    onClick={() => updateSetValue(checkForSetValue(setValues, property)[0] + 1, chambers[activeChamber].value, property)}
                                                    type="button"
                                                    className={`btn chambers-btn chambers-btn-${theme}`}
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <div className='chamber-card-content-row'>
                                                <button
                                                    className={`btn set-btn set-btn-${theme}`}
                                                    onClick={() => updateData(chambers[activeChamber].value, property, setValues[`${chambers[activeChamber].value}-${property}`])}
                                                >
                                                    Set {handleTitles(property)}
                                                </button>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            )
                        }
                    }) : null}
                </div>
            </div>
        </Template>
    )
};

Chambers.displayName = "Chambers";

export default Chambers;