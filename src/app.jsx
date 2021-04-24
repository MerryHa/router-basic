import React from 'react';
import { Route, Switch, useLocation } from 'react-router';
import './app.css';
import Home from './components/home';
import MyPage from './components/my_page';
import Nav from './components/nav';
import Topics from './components/topics';
function App() {
  const location = useLocation();
  return (
    <div className='app'>
      <header>React Router Practice</header>
      <Nav />
      <Switch>
        <Route path={['/', '/home']} exact>
          <Home />
        </Route>
        <Route path="/topics">
          <Topics />
        </Route>
        <Route path="/mypage">
          <MyPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
