import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import Users from './screens/Users.js'
import HomeScreen from './screens/HomeScreen'
import YourAccountScreen from './screens/YourAccountScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'


const App = () => {
  return (
    
    <Router>
      <Header />
      <main>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/liveUsers' component={Users} />
          <Route path='/youraccount' component={YourAccountScreen} />
        </Container>

      </main>

      <Footer />
    
    </Router>
  )
}

export default App
