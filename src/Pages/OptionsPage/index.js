import React from 'react'
import './index.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function OptionsPage (){
    return (

      <div class="container-background-none" id="tinted-image">
      {/* /* ------------------logo-------------------------- */ }
      <div class="logo-container">
       <h6 class="grow">VIPFAN</h6>
     </div>

 {/* /* ------------------page titles-------------------------- */ }
   <Container>
      <div class="title-form">  
         <h1>Make YOur Choise and meet the Band!</h1>
          <p>
            Make YOur Choise and meet the Band!
          </p>
       </div>
            
{/* //////////////////////cards///////////////////////// */}
<Card style={{ width: '18rem' }}>
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <Card.Img variant="top" src="https://media.giphy.com/media/l1J9JFmNcyVX8FzP2/giphy.gif" />

 
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

{/* //////////////////////cards///////////////////////// */}
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/concert-poster-design-template-bb8a458084aec92f6a8ae1874d159dfd_screen.jpg?ts=1566602221" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

{/* //////////////////////cards///////////////////////// */}
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/black-pastel-music-festival-poster-design-template-272b07826d110a9fbf155e44c09cd95b.jpg?ts=1566606312" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

{/* //////////////////////cards///////////////////////// */}
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://media.giphy.com/media/TLTt3x4T67fu5vXAbw/giphy.gif" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
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






