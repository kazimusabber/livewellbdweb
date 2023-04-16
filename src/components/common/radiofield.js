import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Readiofield(props) {

return(
		<input type="radio" name={props.name} value={props.name}/>
	)
}