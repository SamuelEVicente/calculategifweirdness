import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Main from './pages/Main'
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
