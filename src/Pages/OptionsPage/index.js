import React from "react";
import "./index.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function OptionsPage() {
  return (
    <div class="container-background-none" id="tinted-image">
      {/* /* ------------------logo-------------------------- */}
      <div class="logo-container">
        {/* <h6 class="grow">VIPFAN</h6> */}
        <Link className="btn" to="/loginpage">
          <h6 class="grow">VIPFAN</h6>
        </Link>
      </div>

      {/* /* ------------------page titles-------------------------- */}
      <Container>
        <div class="title-container">
          <p>Make Your Choice &</p>
          <h1>Meet the Band!</h1>
        </div>

        {/* --------------------cards------------------------- */}

        <div class="card-container">
          <Card style={{ width: "18rem" }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Img
              variant="top"
              src="https://media.giphy.com/media/TgGVK8JKfZERxhEpMv/giphy.gif"
            />
            <Card.Body>
              <Card.Title>
                <strong>Metalica</strong>
              </Card.Title>
              <Card.Text>
                <p>Live : 10/29/2020</p>
                <p>Location: New York</p>
                <p>Your Bid: Dinner after Concert with one of the stars</p>
              </Card.Text>
              {/* <Button variant="primary">More Details Here</Button> */}

              <Link className="btn" to="/descriptionpage">
                More Details Here
              </Link>
            </Card.Body>
          </Card>

          {/* //////////////////////cards///////////////////////// */}
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/concert-poster-design-template-bb8a458084aec92f6a8ae1874d159dfd_screen.jpg?ts=1566602221"
            />
            <Card.Body>
              <Card.Title>
                <strong>Drake</strong>
              </Card.Title>
              <Card.Text>
                <p>Live : 12/02/2020</p>
                <p>Location: Connecticut</p>
                <p>Your Bid: Visit recording session with the star</p>
              </Card.Text>

              {/* <Button variant="primary">More Details Here</Button> */}
              <Link className="btn" to="/descriptionpage">
                More Details Here
              </Link>
            </Card.Body>
          </Card>

          {/* //////////////////////cards///////////////////////// */}

          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://media.giphy.com/media/10joKJOfIW8ZH2/giphy.gif"
            />
            <Card.Body>
              <Card.Title>
                <strong>Grateful Dead</strong>
              </Card.Title>
              <Card.Text>
                <p>Live : 08/12/2020</p>
                <p>Location: Hong Kong</p>
                <p>Your Bid: Back stage after party</p>
              </Card.Text>
              {/* <Button variant="primary">More Details Here</Button> */}
              <Link className="btn" to="/descriptionpage">
                More Details Here
              </Link>
            </Card.Body>
          </Card>

          {/* //////////////////////cards///////////////////////// */}
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://media.giphy.com/media/hcyOHtvt8Q4yQ/giphy.gif"
            />
            <Card.Body>
              <Card.Title>
                <strong>The Rolling Stones</strong>
              </Card.Title>
              <Card.Text>
                <p>Live : 04/25/2020</p>
                <p>Location: Los Angeles</p>
                <p>
                  Your Bid: Private jet flight with the Band for their next
                  concert in Chicago
                </p>
              </Card.Text>
              <Button variant="primary">More Details Here</Button>
            </Card.Body>
          </Card>

          {/* //////////////////////cards///////////////////////// */}

          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://media.giphy.com/media/3o7btScGN6xTs5nkCA/giphy.gif"
            />
            <Card.Body>
              <Card.Title>
                <strong>Matteo Lane</strong>
              </Card.Title>
              <Card.Text>
                <p>Live : 05/11/2020</p>
                <p>Location: Austin</p>
                <p>Your Bid: Private music lesson with the Star</p>
              </Card.Text>
              <Button variant="primary">More Details Here</Button>
            </Card.Body>
          </Card>
          {/* //////////////////////cards///////////////////////// */}
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://media.giphy.com/media/l1J9JFmNcyVX8FzP2/giphy.gif"
            />
            <Card.Body>
              <Card.Title>
                <strong>Dope</strong>
              </Card.Title>
              <Card.Text>
                <p>Live : 03/19/2020</p>
                <p>Location: Berlin</p>
                <p>
                  Your Bid: Back stage pass at the concert and a private dinner
                  with all girl Band
                </p>
              </Card.Text>
              <Button variant="primary">More Details Here</Button>
            </Card.Body>
          </Card>

          {/* //////////////////////cards///////////////////////// */}
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://media.giphy.com/media/UFoF4Hn1huiD6/giphy.gif"
            />
            <Card.Body>
              <Card.Title>
                <strong>Pull the trigger bitch</strong>
              </Card.Title>
              <Card.Text>
                <p>Live : 08/09/2020</p>
                <p>Location: Detroit</p>
                <p>
                  Your Bid: Back stage pass at the concert and a private visit
                  to the tour bus
                </p>
              </Card.Text>
              <Button variant="primary">More Details Here</Button>
            </Card.Body>
          </Card>

          {/* //////////////////////cards///////////////////////// */}
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://media.giphy.com/media/imlEVE26VI8Rq/giphy.gif"
            />
            <Card.Body>
              <Card.Title>
                <strong>Two Door Cinema Club</strong>
              </Card.Title>
              <Card.Text>
                <p>Live : 07/25/2020</p>
                <p>Location: Dublin</p>
                <p>
                  Your Bid: A rivate visit to the tour the Band headquarters
                </p>
              </Card.Text>
              <Button variant="primary">More Details Here</Button>
            </Card.Body>
          </Card>

          {/* //////////////////////cards///////////////////////// */}
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://media.giphy.com/media/3oEhmPfxoTiWmcu0ik/giphy.gif"
            />
            <Card.Body>
              <Card.Title>
                <strong>The Marshall Tucker Band </strong>
              </Card.Title>
              <Card.Text>
                <p>Live : 09/05/2020</p>
                <p>Location: Austin</p>
                <p>
                  Take a Southern Rock Cruise with the Band with all day music,
                  food and drinks.
                </p>
              </Card.Text>
              <Button variant="primary">More Details Here</Button>
            </Card.Body>
          </Card>

          {/* //////////////////////cards///////////////////////// */}
        </div>
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
  );
}
