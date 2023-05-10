import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form, Card, Button } from "react-bootstrap";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
export default function Login({ setToken }) {
	const navigate = useNavigate();
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState("");
	// Handle psosts request
	const header = {
		'accept':'application/json',
	  'Content-Type': 'application/json',
	};
	function getCookie(name) {
		const value = `; ${document.cookie}`;
		const parts = value.split(`; ${name}=`);
		if (parts.length === 2) return parts.pop().split(';').shift();
	}

	const http = axios.create({
	  	baseURL: 'http://localhost:3000/api/v1.0',
	  	//baseURL: 'http://localhost:3000/api/v1.0',
			timeout: 1000,
	  	headers: {
	    	'Content-Type': 'application/json'
	  	},
	});

   	let handleSubmit = async (e) => {
    	e.preventDefault();
      	http.post('/auth/login', {
	      	phone: phone,
	      	password: password,
	    }, {credentials: 'include'}).then((response) => {
		    if (response.data) {

		    	console.log(response.data);
			        
			        swal("Login Successfully!", "success");
			        localStorage.setItem("token","")
			        setToken("authenticate");	
			        localStorage.setItem("islogin","true")
			        if(response.data.data.role === "patient"){
			        	navigate("/patient");
			        }
			        if(response.data.data.role === "doctor"){
			        	navigate("/doctor");
			        }
			        if(response.data.data.role === "admin"){
			        	navigate("/admin");
			        }
		      	} 
		      	else {
		         	swal(response.message);
		      	}
		  	})
		  	.catch((error) => {
		    	console.log(error);
		})
	};

	return(
		<Container>
			<Row>
				<Col md={{ span: 8}} className="custom-margin">
              	</Col>
              	<Col md={{ span: 4}} className="custom-margin">
              		<Card style={{ marginTop: 100 }}>
        				<Card.Body>
						  	<h3>Sign In</h3>
						  	<Form onSubmit={handleSubmit}>
	            				<Form.Group className="mb-3">
	             					<Form.Label>Mobile Number</Form.Label>
	              					<Form.Control type="text" className="form-control mt-1" placeholder="Enter Phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
						  		</Form.Group>
						  		<Form.Group className="mb-3">
	              				<Form.Label>Password</Form.Label>
	              					<Form.Control type="password" className="form-control mt-1" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}/>
						  		</Form.Group>
							  	<div className="d-grid gap-2 mt-3">
							    	<button type="submit" className="btn btn-primary"> Submit </button>
							  	</div>
							  	<p className="forgot-password text-right mt-2"> Forgot <a href="#">password?</a>
							  	</p>
							</Form>
						</Card.Body>
      				</Card>
				</Col>
		    </Row>
		</Container>
	   	)
	}