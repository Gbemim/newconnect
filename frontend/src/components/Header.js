import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
// import dataprofiles from '../dataprofile'


const Header = () => {
  return (
    <header>
      <Navbar bg='light' variant='light' collapseOnSelect expand='lg'>

          
        <Navbar.Brand href='/'>Linked&Connect</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav>
                <Nav.Link href='/profile'>Profiles</Nav.Link>
                {/* <Nav.Link href={`${dataprofiles._id}`}>Account</Nav.Link> */}
                <Nav.Link href="/youraccount/:id">Account</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
