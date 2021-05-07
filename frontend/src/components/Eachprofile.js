import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Eachprofile = ({ profile }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      {/* <a href={`/dataprofile/${profile._id}`}> */}
      <Card.Img src={profile.image} variant='top' />
      {/* </a> */}

      <Card.Body>
        <Card.Title as='div'>
          <strong>{profile.name}</strong>
        </Card.Title>

        <Card.Text as='div'>
          <div className='my-3'>{profile.about}</div>
        </Card.Text>

        <Card.Link as='div'>
          <a href={`/dataprofile/${profile._id}`}>
            <Button className='callbutton'>
              <img
                className='videoicon'
                alt='messaging'
                src='chatting.png'
              ></img>
            </Button>
          </a>

          <a href={`/dataprofile/${profile._id}`}>
            <Button className='callbutton'>
              <img className='videoicon' alt='camera' src='camera.png'></img>{' '}
            </Button>
          </a>
        </Card.Link>
      </Card.Body>
    </Card>
  )
}

export default Eachprofile
