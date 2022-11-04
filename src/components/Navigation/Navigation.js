import React from 'react';
import {useThemeContext} from '../../contexts/themeContext';
import Switch from '../Switch';
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import './Navigation.css';

function Navigation() {
    const themeContext = useThemeContext();
    const {theme, toggleTheme} = themeContext;

    const location = useLocation();
    const [currentPath, setCurrentPath] = React.useState(location.pathname);
    
    return (
        <div className={`navigation nav-${theme}`}>
            <p className="nav-logo">CANACOMPOST</p>

            <nav className={`navigation-routes navigation-routes-${theme}`}>
                <Link
                    className={
                        `
                        navigation-route
                        navigation-route-${theme}
                        ${currentPath === '/' ? 'navigation-route-active' :''}
                        `
                    }
                    to="/"
                    onClick={() => setCurrentPath(location.pathname)}
                >
                    <svg
                        style={{
                            width:"1.5em",
                            height:"1.5em",
                            color:`${currentPath === '/' ? '#43DA66' : ''}`
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
                    <span className="nav-item">
                        Dashboard
                    </span>
                </Link>
                <Link
                    className={
                        `navigation-route navigation-route-${theme}
                        ${currentPath === '/chambers' ? 'navigation-route-active' : ''}`
                    }
                    to="/chambers"
                    onClick={() => setCurrentPath(location.pathname)}
                >
                    <svg
                        style={{
                            width:"1.5em",
                            height:"1.5em",
                            color:`${currentPath === '/chambers' ? '#43DA66' : ''}`
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
                    <span className="nav-item">
                        Chambers
                    </span>
                </Link>
                <Link
                    className={
                        `navigation-route navigation-route-${theme}
                        ${currentPath === '/advanced' ? 'navigation-route-active' : ''}`
                    }
                    to="/advanced"
                    onClick={() => setCurrentPath(location.pathname)}
                >
                    <svg
                        className="nav-item-active"
                        style={{
                            width:"1.5em",
                            height:"1.5em",
                            color:`${currentPath === '/advanced' ? '#43DA66' : ''}`
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
                            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                        />
                    </svg>
                    <span className="nav-item">
                        Advanced
                    </span>
                </Link>
            </nav>

            <div
                style={{
                    position:"absolute",
                    bottom: "2rem"
                }}
            >
                <Switch
                    hasIcons
                    labelLeft="Dark"
                    labelRight="Light"
                    value={theme === "dark" ? false : true}
                    onChange={toggleTheme}
                />
            </div>
        </div>
    )
}

Navigation.displayName = "Navigation";

export default Navigation;