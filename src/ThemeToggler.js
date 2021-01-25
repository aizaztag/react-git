import React,{useContext} from "react";
import ThemeContext from "./Context/ThemeContext";

const themeTogglerStyle = {
    cursor: "pointer"
}
const ThemeToggler = () => {
    const[themeMode, setThemeMode] = useContext(ThemeContext);
    console.log('useContext(ThemeContext)' , useContext(ThemeContext))
    return(
        <div style = {themeTogglerStyle} onClick = {() => {setThemeMode(themeMode === "light"? "dark": "light")}}>
            <span title = "switch theme">
                {themeMode === "light" ? "🌙" : "☀️"}
            </span>
        </div>
    );
}

export default ThemeToggler;
