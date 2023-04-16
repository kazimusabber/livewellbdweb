import React,{ useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Specializeddoctorcard() {

return(
	<Card className="mb-2">
      <Card.Body style={{padding:"10px 0px 0px 40px",background:"#809dbc"}}>
        <Row>
          <Col md={{ span: 6}}>
          <Card.Title style={{marginTop:"100px",fontSize:"32px",color:"#2B1A52"}}> Looking for a Specialist ? </Card.Title>
          <Card.Text className="mt-5">
            <Link to={`/specialty`} style={{fontSize:"24px",color:"#FCFCFC",fontWeight:"bold"}}>
               See Specialists
            </Link>
          </Card.Text>
        </Col>
          <Col md={{ span: 6}}>
            <Card.Img variant="top" src="../doctorimage/doctorbackground.png"/>
          </Col>
        </Row>
      </Card.Body>
    </Card>
	)
}