import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from '@/components/Navbar';
import Filter from '@/components/Filter';
import About from '@/components/About';
import Main from '@/components/Main';
import Recipes from '@/components/Recipes';
import Profile from '@/components/Profile';
import Footer from '@/components/Footer';
import Developers from '../Developers';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = (): JSX.Element =>  {
  return (
    <div>
      <Router>
        <NaviBar />
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/profile'>
            <Profile />
          </Route>
          <Route exact path='/search'>
            <Filter />
          </Route>
          <Route exact path='/devteam'>
            <Developers />
          </Route>
        </Switch>
        <Recipes />
        <Footer />
      </Router>
    </div>
  );
}
export default App;
