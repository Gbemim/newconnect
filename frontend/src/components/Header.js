import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg='light' variant='light' collapseOnSelect expand='lg'>

          
        <Navbar.Brand href='/'>Linked&Connect</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav>
                <Nav.Link href='/profile'>Profiles</Nav.Link>
                <Nav.Link href='/account'>Account</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
