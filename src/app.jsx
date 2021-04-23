import React from 'react';
import { Route, Switch } from 'react-router';
import './app.css';
import Home from './components/home';
import Nav from './components/nav';
import Topics from './components/topics';

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/topics">
          <Topics />
        </Route>

      </Switch>
    </>
  );
}

export default App;
