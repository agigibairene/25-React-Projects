/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const DarkTheme = createContext({
    theme: "",
    toggle: () => {},
});



export default function ThemeContext({children}){
    const [theme, setTheme] = useState('dark')

    function toggleTheme(){
        setTheme(theme === "light" ? "dark" : "light");
    }

   const  values = {
        theme: theme,
        toggle: toggleTheme
    }
    return (
        <DarkTheme.Provider value={values}>
            {children}
        </DarkTheme.Provider>
    )
}