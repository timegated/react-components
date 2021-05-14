import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
// import components here
import Buttons from '../Buttons/Buttons';
import Forms from '../Forms/Forms';
import Inputs from '../Inputs/Inputs';
import DynamicTable from '../Tables/DynamicTable';
import styled from 'styled-components';

const NavContainer = styled.div`
  position: static;
  top: 0;
  left: 0;
  margin: 0;
  padding: 2.5rem;
  background: #FFFFFF;

`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin-left: 0.5rem;

  &:first-child {
    margin: 0;
  }

   a {
    text-decoration: none;
    font-weight: bold;
  }
`;

const Navigation = () => {
  return (
    <>
      <Router>
        <NavContainer>
          <NavList>
            <NavItem>
              <Link to="/buttons">Buttons</Link>
            </NavItem>
            <NavItem>
              <Link to="/forms">Forms</Link>
            </NavItem>
            <NavItem>
              <Link to="/inputs">Inputs</Link>
            </NavItem>
            <NavItem>
              <Link to="/tables">Tables</Link>
            </NavItem>
          </NavList>
        </NavContainer>
        <Switch>
          <Route exact path="/buttons">
            <Buttons />
          </Route>
          <Route exact path="/forms">
            <Forms />
          </Route>
          <Route exact path="/inputs">
            <Inputs />
          </Route>
          <Route exact path="/tables">
            <DynamicTable />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default Navigation;
