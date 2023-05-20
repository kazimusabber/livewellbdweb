import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from 'sweetalert';
import http from '../include/http';
import { useNavigate, useParams } from 'react-router-dom'
export default function Appointmentreview() {
	const [appointmentreview, setAppointmentreview] = useState([])
	const { id } = useParams()
	const navigate = useNavigate();
	
	useEffect(()=>{
    fetchAppointmentfile()
  },[])
 
	const fetchAppointmentfile = () => {
    http.get(`/appointments/${id}/review`).then((response) => {
      setAppointmentreview(response.data.message);
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }

	return(
		<div className="container">
		    <div className="card">
		    	<div className="card-header"> Review </div>
			    <div className="card-body">
					<Row>
						<h3>{appointmentreview}</h3>
					</Row>    
		    	</div>
			</div>
		</div>
	)
}