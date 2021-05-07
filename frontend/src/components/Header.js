import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

// import dataprofiles from '../dataprofile'

const Header = () => {
  return (
    <header>
      <Navbar bg='light' variant='light' collapseOnSelect expand='lg'>
        <LinkContainer to='/'>
          <Navbar.Brand>Linked&Connect</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav>
            <LinkContainer to='/profile'>
              <Nav.Link>Profiles</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/youraccount'>
              <Nav.Link>Account</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
