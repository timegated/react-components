import React from 'react';
import {
  Link,
} from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  background: #FFFFFF;
  margin: 0;
  padding: 1.25rem;
  position: fixed;
  top: 0;
  width: 100%;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

const NavItem = styled.li`

   a {
    text-decoration: none;
    font-weight: bold;
  }
`;

const Navigation = () => {
  return (
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
          <NavItem>
            <Link to="/editable">Editable</Link>
          </NavItem>
          <NavItem>
            <Link to="/expenses">Expenses</Link>
          </NavItem>
          <NavItem>
            <Link to="/composable">Composable</Link>
          </NavItem>
          <NavItem>
            <Link to="/Tooltips">Tooltips</Link>
          </NavItem>
        </NavList>
      </NavContainer>
   
  )
}

export default Navigation;
