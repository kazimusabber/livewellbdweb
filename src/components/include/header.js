import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default function Header() {


    var isLoggedIn = localStorage.getItem('islogin');
    return(
        <>
        <Container>
            <Row>
                <Col md={{ span: 12}}>
                <Navbar>
                    <Navbar.Brand href="/">
                        <img src="../livewelllogo.svg" alt="nothing"/>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    {!isLoggedIn ? (
                    <Navbar.Collapse className="justify-content-end">
                      <Navbar.Text style={{display:"flex"}}>
                        <Link to="/login">
                            <button className="btn btn-primary  primarybutton">
                                Login
                            </button>
                        </Link>
                        <Link to="/registration">
                            <button className="btn btn-primary primarybuttongreen" style={{marginLeft: "2px"}}>
                                Registration
                            </button>
                        </Link>
                      </Navbar.Text>
                    </Navbar.Collapse>
                     ) : (
                    <Navbar.Collapse className="justify-content-end">
                      <Nav className="ml-auto">
                        <NavDropdown title="User" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/patientprofile">Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/changepatientpassword">Change Password</NavDropdown.Item>
                        </NavDropdown>
                      </Nav>
                    </Navbar.Collapse>
                     )}
                </Navbar>
                </Col>
             </Row>
        </Container>
        </>
    )
}
