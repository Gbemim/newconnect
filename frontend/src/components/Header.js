import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userLoginActions'
 
// import dataprofiles from '../dataprofile'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar bg='light' variant='light' collapseOnSelect expand='lg'>
        <LinkContainer to='/'>
          <Navbar.Brand>Linked&Connect</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav>
          
          {userInfo ? (
            <NavDropdown title={userInfo.name} id='username'>
              <LinkContainer to='/youraccount'>
                <NavDropdown.Item>Account</NavDropdown.Item>
              </LinkContainer>

              <NavDropdown.Item onClick={logoutHandler}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          ) : <LinkContainer to='/login'>
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>}

            {userInfo ? (
            <LinkContainer to='/liveUsers'>
              <Nav.Link>Live Users</Nav.Link>
            </LinkContainer>
            ): <LinkContainer to='/login'>
            <Nav.Link>Live Users</Nav.Link>
          </LinkContainer>}
            
            

            {/* <LinkContainer to='/youraccount'>
              <Nav.Link>Account</Nav.Link>
            </LinkContainer> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
