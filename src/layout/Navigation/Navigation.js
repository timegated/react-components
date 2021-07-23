import React from 'react';
import {
  Link,
} from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  margin: 0;
  background: #FFFFFF;
  width: 150px;
  padding-right: 1.5rem;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

const NavItem = styled.li`
  margin-top: .75rem;
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
        </NavList>
      </NavContainer>
   
  )
}

export default Navigation;
