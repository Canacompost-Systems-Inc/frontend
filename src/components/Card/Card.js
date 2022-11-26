import React from 'react';
import PropTypes from "prop-types";
import {useThemeContext} from '../../contexts/themeContext';
import './Card.css';

const propTypes = {
    /** Child elements to be rendered inside the Card.*/
    children: PropTypes.node,
  };

function Card(props) {
    const themeContext = useThemeContext();
    const {theme} = themeContext;
    
    const {children, ...moreProps} = props;

    return (
        <div className={`card-container card-${theme}`} {...moreProps}>
            {children}
        </div>
    )
}

Card.displayName = "Card";
Card.propTypes = propTypes;
export default Card;