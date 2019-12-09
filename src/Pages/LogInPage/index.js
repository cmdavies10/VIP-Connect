import React,{Component} from 'react'
import './index.css'
// import Jumbotron from 'react-bootstrap/Jumbotron'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'
// import NavBar from '../components/NavBar'
import {Link} from 'react-router-dom'


class LogInPage extends Component{
     state= {
       user : "",
       password : ""
     }
     handleSubmit=(event)=>{
      event.preventDefault() 
      console.log("Hello");
      console.log(event);
     }




   render(){
    return (

    <div class="container-background" id="tinted-image">
       {/* /* ------------------logo-------------------------- */ }
       <div class="logo-container">
       <h6 class="grow">VIPFAN</h6>
    </div>

          
      <Container>    
          {/* /-------------log in form ------------------ */}
       <div class="container-log-form">
          <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label class="label">Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" class="form-control" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label class="label">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" class="form-control" id="exampleInputPassword1"/>
                 </Form.Group>
              </Form.Row>
                <Button variant="primary" type="submit" onClick={()=> this.handleSubmit()} btn="rounded grow">
                  Submit
                 </Button>
                 
                 <Button variant="primary" type="submit" btn="rounded grow">
                  Create
                </Button>
          </Form>
       </div>

      </Container>
         {/* ------------ navbarbotom---------------------*/}
         
      <Navbar collapseOnSelect expand="lg"  variant="dark" sticky="bottom">
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
}

export default LogInPage