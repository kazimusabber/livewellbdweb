import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Linkbutton from "../common/linkbutton";
import Patientsidebar from "./sidebar";
import {Outlet} from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function Home() {
    return(
        <>
        <Container>
            <Row  style={{marginTop:"25px"}}>
                <Col md={{ span: 3}}>
                    <Patientsidebar></Patientsidebar>
                </Col>
                <Col md={{ span: 9}}>
                    <Outlet/>
                </Col>
             </Row>
        </Container>
        </>
    )
}
