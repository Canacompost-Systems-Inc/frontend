import React from 'react';
import PropTypes from "prop-types";
import {useThemeContext} from '../../contexts/themeContext';
import './Meter.css';

const propTypes = {
    /** isLarge makes the Meter a larger sized Meter.*/
    isLarge: PropTypes.bool,
    /** Label displayed below the Meter.*/
    label: PropTypes.string,
    /** Maximum  value of the Meter's range.*/
    max: PropTypes.number,
    /** Minimum value of the Meter's range.*/
    min: PropTypes.number,
    /** Maximum value of the Meter's before it shows an error.*/
    idealMax: PropTypes.number,
    /** Minimum value of the Meter's range before it shows an error.*/
    idealMin: PropTypes.number,
    /** Current value of the Meter.*/
    value: PropTypes.number,
  };

function Meter(props) {
    const themeContext = useThemeContext();
    const {theme} = themeContext;
    
    const {isLarge, label, max, min, idealMax, idealMin, value, ...moreProps} = props;

    const calculatPointerPosition = () => {
        // range of motion.
        const totalDegrees = 240;

        const sum = min + max;

        const fraction = value / sum;

        let degrees = (fraction * totalDegrees) - (totalDegrees / 2);

        // make sure value cant go beyond defined range/degrees.
        if (degrees > (totalDegrees / 2)) {
            degrees = (totalDegrees / 2);
        }
        if (degrees < 0 - (totalDegrees / 2)) {
            degrees = (0 - (totalDegrees / 2));
        }

        return degrees;
    }; 

    const validateRange = () => {
        if (value != 0 && (idealMax < value || value < idealMin)) {
            return false;
        } else {
            return true;
        }
    }

    return (
        <div
            className={`
                    meter-container
                    meter-${theme}
                    ${isLarge ? 'meter-container-large' : ''}
                `}
                {...moreProps}
            >
            <div className={`meter-bar ${isLarge ? 'meter-bar-large' : ''}`}>
                <div
                    className={`
                        meter-pointer
                        meter-pointer-${theme}
                        ${isLarge ? 'meter-pointer-large' : ''}
                    `}
                    style={{
                        transform: `rotate(${calculatPointerPosition()}deg)`
                    }} />
                <p
                    className={`
                        meter-value
                        meter-value-${theme}
                        ${isLarge ? 'meter-value-large' : ''}
                        ${!validateRange() ? 'meter-error' : ''}
                    `}
                >
                    {value}
                </p>
            </div>
            <div
                className={`
                    meter-bottom-hidden
                    meter-bottom-${theme}
                    ${isLarge ? 'meter-bottom-hidden-large' : ''}
                    ${!validateRange() ? 'meter-error' : ''}
                `}
            >
                {label}
            </div>
            <div
                className={`
                    meter-bar-hidden
                    meter-bar-${theme}
                    ${isLarge ? 'meter-bar-hidden-large' : ''}
                `}
            />
        </div>
    )
}

const defaultProps = {
    label: '',
    value: 50,
    min: 0,
    max: 100,
    idealMin: 0,
    idealMax: 100,
    isLarge: false
}

Meter.displayName = "Meter";
Meter.propTypes = propTypes;
Meter.defaultProps = defaultProps;

export default Meter; 