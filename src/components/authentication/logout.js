import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form, Card, Button } from "react-bootstrap";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
export default function Logout() {
	const navigate = useNavigate();
	 useEffect(() => {
		localStorage.removeItem("islogin")
			navigate("/");

	 })
	
}