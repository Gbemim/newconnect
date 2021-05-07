import React from 'react'
import { Col, Row } from 'react-bootstrap'
import dataprofiles from '../dataprofile'
import Eachprofile from '../components/Eachprofile'


const Users = () => {
    return (
        <>
        <h1>Live Users</h1>
        <Row>
            {dataprofiles.map(profile => (
                <Col sm={12} md={6} lg={4} xl={3}>
                   <Eachprofile profile={profile} />
                </Col>
            ))}
        </Row>
    </>
    )
}

export default Users
