import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Onlinedoctorslider from "../frontend/allcard/onlinedoctorslider";

import Specializeddoctor from "../frontend/allcard/specializeddoctorcard";
import Urgentspecializeddoctor from "../frontend/urgentspecializeddoctor";
import { Link } from 'react-router-dom';
export default function Patientdashboard() {
    return(
        <>
        <Container>
            <Row>
                <Col md={{ span: 12}}>
                    <Specializeddoctor></Specializeddoctor>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 12}}>
                    <Onlinedoctorslider></Onlinedoctorslider>
                </Col>
             </Row>
             <Row>
                <Col md={{ span: 12}} className="custom-margin">
                    <Urgentspecializeddoctor></Urgentspecializeddoctor>
                </Col>
            </Row>
        </Container>
        </>
    )
}
