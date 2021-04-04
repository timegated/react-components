import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
// import components here
import Buttons from './components/Buttons/Buttons';
import Forms from './components/Forms/Forms';
import Inputs from './components/Inputs/Inputs';

const App = () => {
  return (
    <>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/buttons"></Link>
            </li>
            <li>
              <Link to="/forms"></Link>
            </li>
            <li>
              <Link to="/inputs"></Link>
            </li>
          </ul>
        </div>
      </Router>
      <Switch>
        <Route exact path="/buttons">
          <Buttons />
        </Route>
        <Route exact path="forms">
          <Forms />
        </Route>
        <Route exact path="/inputs">
          <Inputs />
        </Route>
      </Switch>
    </>
  )
};

export default App;