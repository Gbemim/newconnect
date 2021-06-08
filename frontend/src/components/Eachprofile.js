import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, OverlayTrigger, Popover, Form } from 'react-bootstrap'

const Eachprofile = ({ profile }) => {
  const [roomName, setRoomName] = useState('')
  const [token, setToken] = useState(null)

  const handleRoomNameChange = useCallback(event => {
    setRoomName(event.target.value);
  }, [])

  const handleSubmit = useCallback(async event => {
    event.preventDefault();
    const data = await fetch('/video/token', {
      method: 'POST',
      body: JSON.stringify({
        identity: profile.name,
        room: roomName
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json());
    setToken(data.token);
  }, [profile.name, roomName]);

  const handleLogout = useCallback(event => {
    setToken(null);
  }, []);


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
          {/* <Link to={`/dataprofile/${profile._id}`}>
            <Button className='callbutton'>
              <img
                className='videoicon'
                alt='messaging'
                src='chatting.png'
              ></img>
            </Button>
          </Link> */}
          {['right'].map((placement) => (
            <OverlayTrigger
              trigger="click"
              key={placement}
              placement={placement}
              overlay={
                <Popover id={`popover-positioned-${placement}`}>
                  <Popover.Title as="h4">
                    Verify Video Call With: {profile.name}
                  </Popover.Title>
                  <Popover.Content as="h6">
                    
                    <Form onSubmit={handleSubmit}>             
                      <Form.Group>
                        <Form.Label htmlFor="room">Room name:</Form.Label>
                        <Form.Control
                          type="text"
                          id="room"
                          value={roomName}
                          onChange={handleRoomNameChange}
                          required
                        />
                      </Form.Group>
                      <Link to={`/room`}>
                        <Button className='callbutton'> Video Call </Button>
                      </Link>
                    </Form>
                  </Popover.Content>
                </Popover>
              }>
              <Button variant="secondary" className='verifyCallbutton'>
                <img className='videoicon' alt='camera' src='camera.png'></img>{' '}
              </Button>
            </OverlayTrigger>
          ))}
          
        </Card.Link>
      </Card.Body>    
    </Card>
  )
}

export default Eachprofile
