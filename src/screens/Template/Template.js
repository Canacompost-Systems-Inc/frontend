import React from 'react';
import Navigation from '../../components/Navigation';
import {useThemeContext} from '../../contexts/themeContext';
import './Template.css';

function Template(props) {
    const {children, ...moreProps} = props

    const themeContext = useThemeContext();
    const {theme} = themeContext;

    return (
            <div className="align-row">
                <Navigation />
                <div className={`page-container page-container-${theme}`} {...moreProps}>
                    {children}
                </div>
            </div>
    )
};

export default Template;