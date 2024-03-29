import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar} from 'react-bootstrap'

const Header = () => {
    return (

        <Navbar expand="md" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container>
                <Nav.Link as={Link} to="/" style={{ color: 'whitesmoke' }}>
                    <Navbar.Brand to="/" className="header" style={{ color: 'whitesmoke' }}>Minh Cheng</Navbar.Brand>
                </Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/project" className="header-link item2" style={{ color: 'whitesmoke' }}>
                            Project
                        </Nav.Link>
                        <Nav.Link as={Link} to="/resume" className="header-link item1" style={{ color: 'whitesmoke' }}>
                            Resume
                            </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    )
}
export default Header