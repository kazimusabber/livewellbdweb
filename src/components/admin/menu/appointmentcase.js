import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from 'sweetalert';
import http from '../include/http';
import { useNavigate, useParams } from 'react-router-dom'
export default function Appointmentcase() {
	const [appointmentcase, setAppointmentcase] = useState([])
	const { id } = useParams()
	const navigate = useNavigate();
	
	useEffect(()=>{
    fetchAppointmentfile()
  },[])
 
	const fetchAppointmentfile = () => {
    http.get(`/appointments/${id}/review`).then((response) => {
      setAppointmentcase(response.data.data);
      
    })
    .catch((error) => {
      console.log(error);
    })
  }

	return(
		<div className="container">
		    <div className="card">
		    	<div className="card-header"> Case </div>
			    <div className="card-body"  id="printablediv">
					<Row>
						<h5> Case ID: {appointmentcase.caseId}</h5>
						<h5>Issue: <ul>{appointmentcase.issues?.map((e)=>{
							  	return (
						      <li> {e} </li>
						    )})} </ul></h5>
					</Row>    
		    	</div>
			</div>
		</div>
	)
}