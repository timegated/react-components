import React from 'react';
import {
  Link,
} from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  position: static;
  top: 0;
  left: 0;
  margin: 0;
  padding: 2.5rem;
  background: #FFFFFF;
  width: 100%;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: row;
  }
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
        </NavList>
      </NavContainer>
   
  )
}

export default Navigation;
