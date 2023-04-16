import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from 'react-router-dom';
export default function Home() {
    return(
        <>
        <Container>
            <Row>
                <Col md={{ span: 12}}>
                    <h1>hello</h1>
                </Col>
             </Row>
        </Container>
        </>
    )
}
