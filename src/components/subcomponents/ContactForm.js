import React from 'react'
import { Form, Button } from 'react-bootstrap'

export default function ContactForm() {
    return (
        <div className="contactForm mt-4">
            <p>I am always excited to see new notifications in my email. So please don't hesitate to send me a message!</p>
            <Form action="https://formspree.io/mzbeopvo" method="post" style={{padding: "10px"}}>
                <Form.Group controlId="formGroupName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter Name" />
                </Form.Group>
                
                <Form.Group controlId="formGroupName">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control type="email" name="_replyto" placeholder="Enter Email" />
                </Form.Group>

                <Form.Group controlId="formGroupSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" name="subject" placeholder="Subject" />
                </Form.Group>
                <Form.Group controlId="formGroupText">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" name="message" rows="4" placeholder="Enter your message/inquiry" />
                </Form.Group>
                    <span style={{margin: "1rem"}}><Button variant="primary" type="submit" value="Send">Submit</Button></span>
                    <span><Button variant="secondary" type="reset" value="Reset">Reset</Button></span>
                    
            </Form>
        </div>
    )
}