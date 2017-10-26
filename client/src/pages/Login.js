import React, { Component } from 'react'
import { Container, Button } from 'reactstrap'
import Navigation from '../components/Navigation'

export default class Login extends Component {
  loginToADFS (e) {
    e.preventDefault()
    window.location = '/auth/login-adfs'
  }

  loginToFacebook (e) {
    e.preventDefault()
    window.location = '/auth/login-facebook'
  }

  loginToGoogle (e) {
    e.preventDefault()
    window.location = '/auth/login-google'
  }

  render () {
    return (
      <div>
        <Navigation />
        <Container className="login-box">
          <Button
            color="secondary"
            onClick={this.loginToADFS.bind(this)}
            className="cursor-pointer"
          >
            Login with ADFS
          </Button>{' '}
        </Container>
      </div>
    )
  }
}
