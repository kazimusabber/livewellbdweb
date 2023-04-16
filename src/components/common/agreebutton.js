import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Back() {

return(
	<Row style={{ marginTop: 100}} className={'border-style'}>
		<Col md={{ span: 1, offset: 8}}>
			<button type="submit" className={'agreebutton'}>I Agree</button>
		</Col>
	</Row>
	)
}