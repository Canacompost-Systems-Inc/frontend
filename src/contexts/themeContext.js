import React from "react";

export const ThemeContext = React.createContext();

function ThemeProvider(props) {
    const [theme, setTheme] = React.useState('dark');

    const toggleTheme = () => {
      if (theme === "dark") {
        setTheme("light");
      } else
      if (theme === "light") {
        setTheme("dark")
      } else {
        setTheme("dark")
      }
    }

    return <ThemeContext.Provider value={{theme, toggleTheme}} {...props} />;
}

function useThemeContext() {
    return React.useContext(ThemeContext);
}

export {ThemeProvider, useThemeContext};