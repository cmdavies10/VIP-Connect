import React from 'react'
import './index.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

export default function OptionsPage (){
    return (
      <div>
       <Container>
        <h1>Make YOur Choise and meet the Band!</h1>
        <p>
        Make YOur Choise and meet the Band!
        </p>
      </Container>
            <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
              <Card.Title>Card Title</Card.Title>
                <Card.Text>
                 Some Text here...
                </Card.Text>
                 <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
                            
       </div>
    )
}






