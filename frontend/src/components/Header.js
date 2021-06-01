import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userLoginActions'

// import dataprofiles from '../dataprofile'

const Header = ({ history, match }) => {
  const [isLive, setIsLive] = useState(true)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateAccount = useSelector((state) => state.userUpdateAccount)
  const { success } = userUpdateAccount

  useEffect(() => {
    if (!userInfo) {      
      // history.push('/login')

    } else {
      if (!user || !user.name || success) {
        user.isLive = false
      } else {
        setIsLive(user.isLive)
      }
    }
  }, [dispatch, history, userInfo, user, success])

  const logoutHandler = () => {
    user.isLive = false
    setIsLive(user.isLive)
    dispatch(logout({ id: user._id, isLive }))
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
            {/* //   ): <LinkContainer to='/login'>
          //   <Nav.Link>Live Users</Nav.Link>
          // </LinkContainer>} */}

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
