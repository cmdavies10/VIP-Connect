import React from 'react'
import './index.css'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

export default function BuyPage (){
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
            You are almost there get your ticket and 
          </p>
          <h1>Meet the Band!</h1>
       </div>
            
{/* --------------------cards------------------------- */}


            <Form class="form-body">
  <Form.Row>
    <Form.Group as={Col} controlId="formGridFirstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="FirstName" placeholder="Enter First Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridLastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="LastName" placeholder="Enter Last Name" />
    </Form.Group>
  </Form.Row>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridContactNumber">
      <Form.Label>Contact Number</Form.Label>
      <Form.Control type="ContactNumber" placeholder="Enter Contact Number" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridCreditCardNumber">
    <Form.Label>Credit Card Number</Form.Label>
    <Form.Control type="CreditCardNumber" placeholder="Enter Credit Card Number" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridSecurityCode">
      <Form.Label>Security Code</Form.Label>
      <Form.Control type="SecurityCode" placeholder="Enter security Code" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridExpirationDate">
      <Form.Label>Expiration Date</Form.Label>
      <Form.Control type="ExpirationDate" placeholder="Enter Expiration Date" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Billing Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>



  <Button variant="primary" type="submit">
    Submit
  </Button>

</Form>

</Container>
</div>
    )
}



