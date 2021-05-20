import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Message from '../components/Message.js'
import Loader from '../components/Loader.js'
import Eachprofile from '../components/Eachprofile'
import { listUsers } from '../actions/userActions.js'

const Users = () => {
    const dispatch = useDispatch()

    const userList = useSelector(state => state.userList)
    const {loading, error, users} = userList

    useEffect(() => {
       dispatch(listUsers())
    }, [dispatch])

    return (
        <>
        <h1>Live Users</h1>
        { loading ? (
            <Loader/>
        ) : error ? (<Message variant='danger'>{error}</Message>)
         : 
        (<Row>
            {users.map(profile => (
                <Col sm={12} md={6} lg={4} xl={3}>
                   <Eachprofile profile={profile} />
                </Col>
            ))}
        </Row>)}
        
    </>
    )
}

export default Users
