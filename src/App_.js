import React from 'react';
import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';
import ThemeTogglerButton from './theme-toggler-button';


function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
         state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    this.state = {
      theme: themes.red,
      toggleTheme: this.toggleTheme,
      name : 'aizaz'
    };
  }

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <div>
        <ThemeContext.Provider value={this.state}>
          <Content />
        </ThemeContext.Provider>
      </div>
    );
  }
}
export default App;
