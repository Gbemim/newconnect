import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Col, Row } from 'react-bootstrap'
// import dataprofiles from '../dataprofile'
import Eachprofile from '../components/Eachprofile'


const Users = () => {
    const [dataprofiles, setDataProfiles] = useState([])

    useEffect(() => {
        const fetchProfiles = async () => {
            const { data } = await axios.get('/api/profile')

            setDataProfiles(data)
        }

        fetchProfiles()
    }, [])

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
