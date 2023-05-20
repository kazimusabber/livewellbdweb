import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function Yearcomponent(props) {

return(
	<select className="form-control" name="year" onChange={(e) => props.setYear(e.target.value)} >
		<option value="" disabled selected>Select ... </option>
		<option value="2023">2023</option>
		<option value="2022">2022</option>
		<option value="2021">2021</option>
		<option value="2020">2020</option>
		<option value="1999">1999</option>
		<option value="1998">1998</option>
		<option value="1997">1997</option>
		<option value="1996">1996</option>
		<option value="1995">1995</option>
		<option value="1994">1994</option>
		<option value="1993">1993</option>
	</select>
	)
}