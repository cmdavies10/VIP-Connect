import React from 'react'
import './index.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'
// import NavBar from '../components/NavBar'


export default function LogInPage (){
    return (
        <div class="container1" id="tinted-image">
          {/* <Jumbotron fluid> */}
          <div class="container2">
            <Container>
              <Navbar expand="lg" id="Navbar">
                <Navbar.Brand href="#home">
                <div id="logo">VIP<span id='secondLogo'>fan</span></div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link class="nav-link" href="#link">See Events</Nav.Link>
                    <Nav.Link href="#link">Buy</Nav.Link>
                    <Nav.Link href="#link">Create</Nav.Link>
                    <Nav.Link href="#link">My Tickets</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              {/* <h1>Fluid jumbotron</h1> */}
              <p>
                {/* This is a modified jumbotron that occupies the entire horizontal space of
                its parent. */}
              </p>
          {/* ///////////////////////////////////// */}
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" class="form-control" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label type="text" >Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" class="form-control" id="exampleInputPassword1"/>
                  </Form.Group>
                </Form.Row>
                <Button variant="primary" type="submit" btn="rounded">
                  Submit
                </Button>
                <Button variant="primary" type="submit" btn="rounded">
                  Create
                </Button>
              </Form>
            </Container>
          {/* </Jumbotron> */}
      </div>
      </div>
    )
}