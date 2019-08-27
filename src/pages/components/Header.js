import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                    <Link to="/about/" className="nav-link">
                        Abount
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
