import React from 'react';
import PropTypes from "prop-types";
import {useThemeContext} from '../../contexts/themeContext';
import "./Range.css";

const propTypes = {
    /** id of the range.*/
    id: PropTypes.string.isRequired,

    /** Value of the range.*/
    value: PropTypes.number,

    /** Max value fo the range.*/
    max: PropTypes.number,

    /** Min value fo the range*/
    min: PropTypes.number,

    /** Unit to be displayed next to range value.*/
    unit: PropTypes.string,

    /** Steps in value changes on the range.*/
    step: PropTypes.number,

    /** Function to be ran when range value changes.*/
    onChange: PropTypes.func,
  };

function Range (props) {
    const {id, value, max, min, unit, step, onChange, ...moreProps} = props;

    const themeContext = useThemeContext();
    const {theme} = themeContext;
    
    const [rangeValue, setRangeValue] = React.useState(value);
    
    return (
        <div className="range-container" {...moreProps}>
            <input
                step={step}
                type="range"
                min={min}
                max={max}
                value={rangeValue}
                className={`range range-${theme}`}
                id={id}
                onChange = {(e) => [setRangeValue(Number(e.target.value)), onChange(Number(e.target.value))]}
            />
            <output className="range-value">{rangeValue}{unit}</output>
        </div>
    )
}

const defaultProps = {
    value: 0,
    max: 90,
    min: 0,
    unit: '%',
    step: 10
}

Range.defaultProps = defaultProps;
Range.propTypes = propTypes;
Range.displayName = "Range";

export default Range;