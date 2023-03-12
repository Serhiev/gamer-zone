import React from 'react';
import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../logo.ico';

function MainNavigation() {
  return (
    <Navbar bg='primary' variant='dark'>
      <Container>
        <Navbar.Brand as={NavLink} to={'/'}>
          <img src={logo} width='50' height='50' className='logo' alt='logo' />
        </Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link as={NavLink} to={'/'}>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to={'/about'}>
            About
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MainNavigation;
