import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Primarybutton from './primarybutton'
export default function Next() {


return(
	<Row style={{ marginTop: 100}} className={'border-style'}>
		<Col md={{ span: 1}}>
			
		</Col>
		<Col md={{ span: 1, offset: 7}}>
			<Primarybutton></Primarybutton>
		</Col>
	</Row>
	)
}