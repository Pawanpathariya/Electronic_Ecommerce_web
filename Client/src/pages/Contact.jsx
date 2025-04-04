import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }


  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }


  return (
    <div style={{ backgroundColor: '#212529', textAlign: 'center', color: 'white', marginBottom: '20px', padding: '20px' }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <h2 className="text-center">Contact Us</h2>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleChange} />
              </Form.Group>

              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" name="name" value={formData.name} onChange={handleChange} />
              </Form.Group>

              <Form.Group controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} name="message" value={formData.message} onChange={handleChange} />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3" onClick={handleSubmit}>
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact

