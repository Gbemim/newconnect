import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userLoginActions'

const Header = () => {
  const [isLive, setIsLive] = useState(true)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateAccount = useSelector((state) => state.userUpdateAccount)
  const { success } = userUpdateAccount

  useEffect(() => {
    if (!user || !user.name || success) {
      user.isLive = false
    } else {
      setIsLive(user.isLive)
    }
  }, [dispatch, userInfo, user, success])

  const logoutHandler = () => {
    dispatch(logout({ id: user._id, isLive }))
    // if(!user.isLive) window.open('/login')
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
            ) : (
              <LinkContainer to='/login'>
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            )}

            {userInfo && userInfo.isLive && (
              <LinkContainer to='/liveUsers'>
                <Nav.Link>Live Users</Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
