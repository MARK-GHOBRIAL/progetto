import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const MyFooter = () => {
  return (
    <Navbar bg="primary" variant="dark" fixed="bottom">
      <Container>
        <Navbar.Text>
          Created by Your Name | Data from OpenWeatherMap
        </Navbar.Text>
      </Container>
    </Navbar>
  )
}

export default MyFooter
