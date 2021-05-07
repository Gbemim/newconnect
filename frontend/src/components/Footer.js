import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <a
              href='https://gbemi.ca/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Copyright &copy; and Made by Gbemi
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
