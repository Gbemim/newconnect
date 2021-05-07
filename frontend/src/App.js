import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1 className='title'>Welcome to Connect!</h1>

          <p className='description'>
            A platform that allows Linkedin users to have a one on one video
            call with another Linkedin user
          </p>
        </Container>
        <Container>
          {/* <Link href="/profile"> */}
          <a
            href='https://www.linkedin.com/oauth/v2/authorization?response_type=code&scope=r_liteprofile&client_id=78tkd2wwr2p92m&redirect_uri=https%3A%2F%2Fwww.netconnect.online%2Fprofile'
            // onClick={tesst}
            className='card'
          >
            <h3>Login & Signup &rarr;</h3>
          </a>
          {/* </Link> */}
        </Container>
      </main>

      <Footer />
    </>
  )
}

export default App
