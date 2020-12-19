import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './stylesheet/styles.css';
import { Home } from './components/Home';
import { AddEmployees } from './components/AddEmployees';
import { EditEmployees } from './components/EditEmployees';


import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add" component={AddEmployees} exact />
        <Route path="/edit/:id" component={EditEmployees} exact />
      </Switch>
      </BrowserRouter>

    </GlobalProvider>
  );
}

export default App;