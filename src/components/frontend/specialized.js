
import Allspecialty from "./specialtylist";
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
				<Allspecialty></Allspecialty>
          	</Col>
        </Row>
	</Container>
	)
}