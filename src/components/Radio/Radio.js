import React from 'react';
import PropTypes from "prop-types";
import './Radio.css';

const propTypes = {
    /** id for radio component. */
    id: PropTypes.string.isRequired,

    /** Value to set radio to. Will be matched against option values. */
    value: PropTypes.any,
  
    /** List of radio options. Needs to include name, and value for each option.*/
    options: PropTypes.array.isRequired,

    /** Function call on change.*/
    onChange: PropTypes.func,
  };

function Radio (props) {
    const {id, value, options, onChange, ...moreProps} = props;

    const [radioValue, setRadioValue] = React.useState(value);
    
    return (
        <div className="radio-container" {...moreProps}>
            {options.map(radio => {
                return(
                    <div className='radio-item' key={radio.name}>
                        <input
                            checked={radio.value === radioValue}
                            onChange={() => [
                                onChange(radio.value),
                                setRadioValue(radio.value)
                            ]}
                            className="radio"
                            type="radio"
                            name={radio.name}
                            id={`${id}-${radio.name}`}
                        />
                        <label
                            className="radio-label"
                            htmlFor={`${id}-${radio.name}`}
                        >
                            {radio.name}
                        </label>
                    </div>
                )
            })}
        </div>
    )
}

const defaultProps = {
    label: '',
    value: null,
    options: [],
    onChange: () => {}
}

Radio.displayName = "Radio";
Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;

export default Radio;