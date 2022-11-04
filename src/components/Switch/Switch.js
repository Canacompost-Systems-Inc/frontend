import React from 'react';
import PropTypes from "prop-types";
import {useThemeContext} from '../../contexts/themeContext';
import "./Switch.css";

const propTypes = {
    /** If true displays sun and moon icon inside the switch. */
    hasIcons: PropTypes.bool,
  
    /** Label to be displayed on the left tof the switch.*/
    labeLeft: PropTypes.string,

    /** Label to be displayed on the right tof the switch.*/
    labelRight: PropTypes.string,

    /** Value of the switch.*/
    value: PropTypes.bool,

    /** Function to be ran when switch value changes.*/
    onChange: PropTypes.func,

    /** name value of switch.*/
    name: PropTypes.string,
  };


function Switch (props) {
    const {
        hasIcons,
        labelLeft,
        labelRight,
        value,
        onChange,
        name,
        ...moreProps
    } = props;

    const themeContext = useThemeContext();
    const {theme} = themeContext;

    const [switchValue, setSwitchValue] = React.useState(value);

    return (
        <div className="switch-container" {...moreProps}>
        {labelLeft ? <label htmlFor="switch" className="label-left">{labelLeft}</label> : null}
        <label className="switch">
            <input
                checked={switchValue}
                id="switch"
                type="checkbox"
                value={switchValue}
                onChange={(e) => [onChange(e.target.checked), setSwitchValue(e.target.checked)]}
                name={name}
            />
            <span className={`slider round slider-${theme}`}>
                {/* sun icon */}
                {hasIcons && (theme === 'light') ? <svg
                    style={{
                        width: "1rem",
                        height: "1rem",
                        color: "#05102B",
                        position:"absolute",
                        left: "0.2rem"
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
                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                </svg> : null}

                {/* moon icon */}
                {hasIcons && (theme === 'dark') ? <svg
                    style={{
                        width: "1rem",
                        height: "1rem",
                        color: "#F7F7F7",
                        position:"absolute",
                        right: "0.2rem"
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
                        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    />
                </svg> : null}
            </span>
        </label>
        {labelRight ? <label className="label-right">{labelRight}</label> : null}
        </div>
    )
}

const defaultProps = {
    hasIcons: false,
    labelLeft: '',
    labelRight: '',
    value: false,
    onChange: () => {},
    name: ""
}

Switch.defaultProps = defaultProps;
Switch.propTypes = propTypes;
Switch.displayName = "Switch";

export default Switch;