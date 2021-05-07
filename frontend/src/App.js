import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import Users from './screens/Users.js'
import HomeScreen from './screens/HomeScreen'
import YourAccount from './screens/YourAccount'

const App = () => {
  return (
    
    <Router>
      <Header />
      <main>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/profile' component={Users} />
          <Route path='/youraccount' component={YourAccount} />
        </Container>

      </main>

      <Footer />
    
    </Router>
  )
}

export default App
