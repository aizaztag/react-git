import React, { Component } from "react";
import ThemeContext from "./Context/ThemeContext";
import AppTheme from "./Colors";

class Main extends Component{
    constructor(){
        super();
    }

    state = {
        themeMode: '',
      }
    
      // Method to update state
      setThemeMode = (theme) => {
        
        this.setState({ themeMode: theme });
        
      }

    static contextType = ThemeContext;
    
    render(){
        const currentTheme = AppTheme[this.context[0]]; // =AppTheme['light']
        console.log('this context' , this.context)
        return(
            <main style={{
                padding: "1rem",
                backgroundColor: `${currentTheme.backgroundColor}`,
                color: `${currentTheme.textColor}`,

            }}>
                <h1>Heading 1</h1>
                <p>This is a paragraph</p>
                <button onClick = {() => {this.setThemeMode(this.state.themeMode === "light"? "dark": "light")}}>   This is a button dsdds</button>
                {this.state.themeMode}
                {currentTheme.theme}
            </main>

        );
    }

}

export default Main;