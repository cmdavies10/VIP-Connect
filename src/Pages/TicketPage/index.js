import React from 'react'
import './index.css'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function TicketPage (){
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
             Congratulations you made a great choice
            </p>
            <h1>Peter you are all set to Meet the Band!</h1>
         </div>
              
  {/* --------------------cards------------------------- */}

  <Card className="text-center">




  <Card.Body>
  <Card.Footer ><Card.Img variant="top" src="http://www.sandysclass.com/2017%20Websites/Janeck_Tieler/metallicaheader.jpg" /></Card.Footer>
    <Card.Title>Metallica VIP Package</Card.Title>
    <Card.Text>
   Enjoy your experience and Thanks you for supporting "All Within My Hands"
    </Card.Text>
    <CardDeck>
  <Card>
    <Card.Img variant="top" src="https://abouttruckdriving.com/wp-content/uploads/2010/10/Google-directions.png" />
    <Card.Body>
      <Card.Title>Metallica VIP Package</Card.Title>
      <Card.Text>
                       <p>Live : 10/29/2020</p>
                       <p>Location: New York</p>
                       <p>Your Bid: Dinner after Concert with one of the stars</p>
                       All exclusive experience a dinner with your favorite Band at the
                most elegant private dining rooms in Mayfair awarded a Michelin
                star. Proceeds will got to All Within My Hands to assist the lives of members of
                the communities who have supported the band for years.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Card.Title>Your Ditections</Card.Title>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src="http://qrcode.kaywa.com/img.php?s=8&d=http%3A%2F%2Fwww.heresjonny.com" />
   
    <Card.Footer>
    <Card.Title>Your Barcode Ticket</Card.Title>
    </Card.Footer>
  </Card>
</CardDeck>

    <Button variant="primary">Go Home</Button>
  </Card.Body>
  
</Card>
  
  
  
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




                      