import React from 'react'
import { Link } from 'gatsby'
import { Nav, Navbar } from 'react-bootstrap'

export default function Navigation() {
    
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand><Link to="/"><h3 className="mybrand">MB</h3></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav className="align-items-center">
                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                <Nav.Link><Link to="/about">About</Link></Nav.Link>
                <Nav.Link><Link to="/portfolio">Portfolio</Link></Nav.Link>
                <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </>
    )
}
