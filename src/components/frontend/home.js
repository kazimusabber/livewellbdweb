import Specializeddoctor from "./allcard/specializeddoctorcard";
import Onlinedoctorslider from "./allcard/onlinedoctorslider";

import Urgentdoctorslider from "./allcard/urgentdoctorslider";
import Recentlyviewslider from "./allcard/recentlyviewslider";
import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Specializeddoctorcard() {

return(
	<Container>
		<Row>
			<Col md={{ span: 12}} className="custom-margin">
				<Specializeddoctor></Specializeddoctor>
          	</Col>
        </Row>
        <Row>
          	<Col md={{ span: 12}} className="custom-margin">
          		<Onlinedoctorslider></Onlinedoctorslider>
			</Col>
	    </Row>
	    <Row>
          	<Col md={{ span: 12}} className="custom-margin">
          		<Urgentdoctorslider></Urgentdoctorslider>
			</Col>
	    </Row>
	    <Row>
          	<Col md={{ span: 12}} className="custom-margin">
          		<Recentlyviewslider></Recentlyviewslider>
			</Col>
	    </Row>
	</Container>
	)
}