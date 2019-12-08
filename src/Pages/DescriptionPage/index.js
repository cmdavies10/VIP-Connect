import React from 'react'
import './index.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Carousel from 'react-bootstrap/Carousel'

export default function OptionsPage (){
    return (

  <div class="container-background-none" id="tinted-image">
      {/* /* ------------------logo-------------------------- */ }
      <div class="logo-container">
       <h6 class="grow">VIPFAN</h6>
     </div>

 {/* /* ------------------page titles-------------------------- */ }
 <Container>
      <div class="title-container">  
          <p>
          Meet the Band! 
          </p>
          <h1>Metalica</h1>
       </div>


{/* --------------caruselle-------------------------- */}

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://townsquare.media/site/366/files/2011/12/Metallica.jpg?w=980&q=75"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>All exclusive experience a dinner with your favorite Band at the most elegant private dining rooms in Mayfair awarded a Michelin star. </h3>
      <p1>Dates might change depending on the availability of the artist.</p1>
    </Carousel.Caption>
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ytimg.com/vi/ug-cz4eETMg/maxresdefault.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Meet the Band at back stage and get a chance to talk to each of them in person. </h3>
      <p1>Photo opportunities have to be limited.</p1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.firespring.com/images/96d50d65-35dd-4119-ae9d-bc8467de93fa.jpeg"
    />

    <Carousel.Caption>
      <h3>All Within My Hands </h3>
      <p1>The Foundation aims to assist and enrich the lives of members of the communities who have supported the band for years, as well as encourage participation from fans and friends.</p1>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


            
{/* --------------------cards------------------------- */}
 
<div class="card-container">

<Card class="big-card">
  <Card.Header>
    <Nav variant="pills" defaultActiveKey="#first">
      <Nav.Item>
        <Nav.Link href="#first">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#link">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>



{/* //////////////////////cards///////////////////////// */}

{/* //////////////////////cards///////////////////////// */}
 
{/* //////////////////////cards///////////////////////// */}

{/* //////////////////////cards///////////////////////// */}
 
{/* //////////////////////cards///////////////////////// */}

{/* //////////////////////cards///////////////////////// */}

{/* //////////////////////cards///////////////////////// */}

</div>
</Container>


{/* ---------------- navbar botom---------------------*/}
          {/* <Navbar sticky="bottom" /> */}
          <Navbar collapseOnSelect expand="lg"  variant="dark" sticky="bottom">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="mr-auto">
               <Nav.Link href="#features">Home</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link class="text" href="#pricing">See Events</Nav.Link>
              <Nav.Link href="#features">Buy</Nav.Link>
              <Nav.Link href="#features">Create</Nav.Link>
              <Nav.Link href="#pricing">My Tickets</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
      

                            
 </div>
    )
}


// -------------------caruselle here----------------------///





