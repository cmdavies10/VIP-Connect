
import React from 'react'
import './index.css'
import Form from 'react-bootstrap/Form'
import {Link} from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function EventFormPage (){
    return (
        <div class="container-ground1">
    
    <Container >  
    {/* <Image src="https://media.giphy.com/media/kF0ngyP7S1DfmzKqiN/g" fluid /> */}
    
    </Container>

    
{/* ------------ navbarbotom---------------------*/}
         
<Navbar collapseOnSelect expand="lg" variant="light" fixed='top'>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
              <Link className='btn' to='/loginpage'>Home</Link>
              {/* <Nav.Link href="#features">Home</Nav.Link> */}
          </Nav>
          <Nav>
            <Link className='btn' to='/optionspage'>See Events</Link> 
            {/* <Nav.Link class="text" href="#pricing">See Events</Nav.Link> */}

              <Link className='btn' to='/buypage'>Buy</Link>
              {/* <Nav.Link href="#features">Buy</Nav.Link> */}

              <Link className='btn' to='/eventformpage'>Contact Us</Link>
              
              <Link className='btn' to='/eventformpage'>Create</Link>
              {/* <Nav.Link href="#features">Create</Nav.Link> */}
              
              <Link className='btn' to='/ticketpage'>My Tickets</Link>
              {/* <Nav.Link href="#pricing">My Tickets</Nav.Link> */}
            </Nav>
           </Navbar.Collapse>
      </Navbar>                                        
  </div>
        
    )

}
