import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Subtitle(props) {

return(
		<p className={'subtitle'}>{props.subtitle}</p>
	)
}