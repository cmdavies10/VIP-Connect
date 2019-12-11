import React, { Component } from "react";
import "./index.css";
// import Jumbotron from 'react-bootstrap/Jumbotron'
import Navbar from "react-bootstrap/Navbar";
// import axios from "axios";
import API from "../../utils/API";
// import { Redirect } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

// import NavBar from '../components/NavBar'

class LogInPage extends Component {
	state = {
		username: "",
		password: ""
	};

	handleInputChange = event => {
		let value = event.target.value;
		const name = event.target.name;

		if (name === "password") {
			value = value.substring(0, 15);
		}
		// Updating the input's state
		this.setState({
			[name]: value
		});
	};

	handleBtnClick = event => {
		event.preventDefault();

		if (!this.state.username || !this.state.password) {
			alert("Error - Please fill out username and password");
		} else if (this.state.password.length < 6) {
			alert(`Password must be great than six characters`);
		} else {
			API.loginUser({
				username: this.state.username,
				password: this.state.password
			})
				.then(res => console.log(res))
				.catch(err => console.log(err));

			alert(`Hello ${this.state.username} ${this.state.password}`);
		}

		this.setState({
			username: "",
			password: ""
		});
	};

	render() {
		return (
			<div className="container-background" id="tinted-image">
				{/* /* ------------------logo-------------------------- */}
				<div className="logo-container">
					{/* <h6 class="grow">VIPFAN</h6> */}
					<Link className="btn" to="/loginpage">
						<h6 className="grow">VIP FAN</h6>
					</Link>
				</div>

				<Container>
					{/* /-------------log in form ------------------ */}
					<div className="container-log-form">
						<Form>
							<Form.Row>
								<Form.Group as={Col} controlId="formGridEmail">
									<Form.Label className="label">
										Username
									</Form.Label>
									<Form.Control
										type="text"
										name="username"
										value={this.state.username}
										onChange={this.handleInputChange}
										placeholder="Enter username"
										className="form-control"
									/>
								</Form.Group>
								<Form.Group
									as={Col}
									controlId="formGridPassword"
								>
									<Form.Label className="label">
										Password
									</Form.Label>
									<Form.Control
										type="text"
										name="password"
										value={this.state.password}
										onChange={this.handleInputChange}
										placeholder="Password"
										className="form-control"
										// id="exampleInputPassword1"
									/>
								</Form.Group>
							</Form.Row>

							<Button
								variant="primary"
								type="submit"
								onClick={this.handleBtnClick}
								// onClick={() => this.handleSubmit()}
								btn="rounded grow"
							>
								Submit
							</Button>

							{/* <Button variant="primary" type="submit" btn="rounded grow">
                  Create
                </Button> */}

							{/* <Link className="btn" to="/optionspage">
								Submit
							</Link> */}

							{/* <Button variant="primary" type="submit" btn="rounded grow">
                  Create
                </Button> */}
						</Form>
					</div>
				</Container>
				{/* ------------ navbarbotom---------------------*/}

				<Navbar
					collapseOnSelect
					expand="lg"
					variant="light"
					fixed="top"
				>
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
								See Events
							</Link>
							{/* <Nav.Link class="text" href="#pricing">See Events</Nav.Link> */}

							<Link className="btn" to="/buypage">
								Buy
							</Link>
							{/* <Nav.Link href="#features">Buy</Nav.Link> */}

							<Link className="btn" to="/eventformpage">
								Contact Us
							</Link>

							<Link className="btn" to="/eventformpage">
								Create
							</Link>
							{/* <Nav.Link href="#features">Create</Nav.Link> */}

							<Link className="btn" to="/ticketpage">
								My Tickets
							</Link>
							{/* <Nav.Link href="#pricing">My Tickets</Nav.Link> */}
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}

export default LogInPage;
