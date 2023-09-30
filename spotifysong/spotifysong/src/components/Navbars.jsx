import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navbars() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container style={{ backgroundColor: "gray" }}>
                    <Navbar.Brand href="#home">Spofity Music</Navbar.Brand>

                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        style={{ marginLeft: "800px" }}
                    >
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            {/* <Nav.Link href="#link">Link</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navbars;
