import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Message from '../components/Message.js'
import Loader from '../components/Loader.js'
import Eachprofile from '../components/Eachprofile'
import { listUsers } from '../actions/userActions.js'

const Users = ({ history }) => {
  const dispatch = useDispatch()

  const userList = useSelector((state) => state.userList)
  const { loading, error, users } = userList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo && userInfo.isLive) {
      dispatch(listUsers())
    } else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo])

  return (
      <>
      <h1>Live Users</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {users.map((profile) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Eachprofile profile={profile} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default Users
