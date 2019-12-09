import React from 'react';
import './index.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

export default function OptionsPage() {
	return (
		<div class="container-background-none" id="tinted-image">
			{/* /* ------------------logo-------------------------- */}
			<div class="logo-container">
				<h6 class="grow">VIPFAN</h6>
			</div>

			{/* /* ------------------page titles-------------------------- */}
			<Container>
				<div class="title-container">
					<p>Meet the Band!</p>
					<h1>Metalica</h1>
				</div>

				{/* --------------carousel-------------------------- */}

				<Carousel>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://townsquare.media/site/366/files/2011/12/Metallica.jpg?w=980&q=75"
							alt="First slide"
						/>
						<Carousel.Caption>
							<h3>Dinner with your favorite Band. </h3>
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
							<h3>Meet the Band at back stage. </h3>
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
							<p1>Metalica gives back to the community. </p1>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>

				{/* --------------------cards------------------------- */}

				<div class="big-card-container">
					<Card-big class="card-big">
						<Card.Header>
							<Nav variant="pills" defaultActiveKey="#first">
								<Nav.Item>
									<Nav.Link href="#link">Home</Nav.Link>
								</Nav.Item>

								<Nav.Item>
									<Nav.Link href="#link">Charity</Nav.Link>
								</Nav.Item>
							</Nav>
						</Card.Header>
						<Card.Body>
							<Card.Title>Metalica 2020 Tour</Card.Title>
							<p>Live : 10/29/2020</p>
							<p>Location: New York</p>
							<p>Your Bid: Dinner after Concert with one of the stars</p>
							<h2>Make you best offer!</h2>
							<Card.Text>
								All exclusive experience a dinner with your favorite Band at the most elegant private
								dining rooms in Mayfair awarded a Michelin star. Proceeds will got to All Within My
								Hands to assist the lives of members of the communities who have supported the band for
								years.
							</Card.Text>
							<Button variant="primary">Buy Ticket</Button>
						</Card.Body>
					</Card-big>

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
			<Navbar collapseOnSelect expand="lg" variant="dark" sticky="bottom">
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Link className="btn" to="/loginpage">
							Home
						</Link>
						{/* <Nav.Link href="#features">Home</Nav.Link> */}
					</Nav>
					<Nav>
						<Link className="btn" to="/optionspage">
							Options
						</Link>
						{/* <Nav.Link class="text" href="#pricing">
							See Events
						</Nav.Link> */}
						<Link className="btn" to="/buypage">
							Buy
						</Link>
						<Link className="btn" to="/eventformpage">
							Create
						</Link>
						<Link className="btn" to="/ticketpage">
							My Ticket
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

// -------------------caruselle here----------------------///
