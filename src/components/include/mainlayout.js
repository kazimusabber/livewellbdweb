import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./header";
import {Outlet} from 'react-router-dom';
import Footer from "./footer";
import "../../Customstyle.css";
export default function Mainlayout() {
    return (
        <>
        <Header />
        <Row>
            <Col md={12}>
                <Outlet/>
            </Col>
        </Row>
        </>
      )
  }
