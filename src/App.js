import React from 'react';
import './App.css';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import Home from "./components/Home";

function App() {
  return <HashRouter>
    <>
      <Switch>
        <Route path='/' component={Home}/>
        <Route path='/zaloguj' component={Home}/>
        <Route path='/rejestracja' component={Home}/>
      </Switch>
     </>
  </HashRouter>;
}

export default App;
