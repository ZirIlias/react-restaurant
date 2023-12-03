import { useMemo, useState } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeContextProvider = function({children}) {
    
    const [theme, setTheme] = useState('light');  
    const contextValue = useMemo( () => ({theme, setTheme}), [theme]);
    return (
        <ThemeContext.Provider value={contextValue}>
          {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider