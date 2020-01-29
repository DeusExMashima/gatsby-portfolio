import React from "react"

import Layout from "../components/layout/Layout"
import SEO from "../components/layout/SEO"
import ContactForm from "../components/subcomponents/ContactForm"
import ConnectLinks from "../components/subcomponents/ConnectLinks"

import { Container, Row, Col } from 'react-bootstrap'


export default function Contact() {

    return (
        <Layout>
        <SEO title="Contact" />

        <Container>
            <Row><h2>Contact</h2></Row>
            <Row>
                <Col sm={12} md={7}><ContactForm /></Col>
                <Col sm={12} md={1}></Col>
                <Col sm={12} md={4}><ConnectLinks /></Col>
            </Row>
         </Container>
      </Layout>
    )
}
