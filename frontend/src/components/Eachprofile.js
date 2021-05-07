import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'

const Eachprofile = ({ profile }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Card.Img src={profile.image} variant='top' />

      <Card.Body>
        <Card.Title as='div'>
          <strong>{profile.name}</strong>
        </Card.Title>

        <Card.Text as='div'>
          <div className='my-3'>{profile.about}</div>
        </Card.Text>

        <Card.Link as='div'>
          <Link to={`/dataprofile/${profile._id}`}>
            <Button className='callbutton'>
              <img
                className='videoicon'
                alt='messaging'
                src='chatting.png'
              ></img>
            </Button>
          </Link>

          <Link to={`/dataprofile/${profile._id}`}>
            <Button className='callbutton'>
              <img className='videoicon' alt='camera' src='camera.png'></img>{' '}
            </Button>
          </Link>
        </Card.Link>
      </Card.Body>
    </Card>
  )
}

export default Eachprofile
