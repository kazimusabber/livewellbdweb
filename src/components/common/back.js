import React,{ useState, useEffect } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Back({prevStep}) {
const goprevious = (e) => {
  e.preventDefault();
  prevStep();
};
return(

	<Row style={{marginBottom: "20px"}}>
		<Col md={{ span: 1}}>
			<span><span onClick={goprevious}><FontAwesomeIcon icon="fas fa-chevron-left" /></span></span>
		</Col>
		<Col md={{ span: 11}}>
		</Col>
	</Row>
	
	)
}