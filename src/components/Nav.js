import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function Nav() {
  return (
    <div>
      <Navbar sticky='top' bg='danger' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>Contct from</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Nav