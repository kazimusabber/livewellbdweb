import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from 'sweetalert';
import http from '../include/http';
import { useNavigate, useParams } from 'react-router-dom'
export default function Healthhostory() {
	const [healthcondition, setHealthcondition] = useState([])
	const [prescription, setPrescription] = useState([])
	const { id } = useParams()
	const navigate = useNavigate();
	
	useEffect(()=>{
    	fetchAppointmenthealthhistory()
  },[])
 
	const fetchAppointmenthealthhistory = () => {
    http.get(`/appointments/${id}`).then((response) => {
      setHealthcondition(response.data.data.healthCondition);
      setPrescription(response.data.data.prescriptions);
    })
    .catch((error) => {
      console.log(error);
    })
  }
  console.log(healthcondition);
	return(
		<div className="container">
		    <div className="card">
		    	<div className="card-header"> Health History </div>
			    <div className="card-body"  id="printablediv">
					<Row> 	
					  	<Col md={{ span: 6}}>
					  	<h3>Health History</h3>
				      		<h6>{healthcondition?.healthIssue}</h6> 
				      		<h6>{healthcondition?.symptoms}</h6>
				      	</Col>
					</Row>
					<Row> 	
					  	<Col md={{ span: 6}}>
					  		{prescription?.map((e)=>{
							  	return (
							  	<Col md={{ span: 4}}>
						      		<object width="100%" height="400" data={e.link} type="application/pdf"></object>
						      	</Col>
							
						    )})} 
				      		
				      	</Col>
					</Row>     
		    	</div>
			</div>
		</div>
	)
}