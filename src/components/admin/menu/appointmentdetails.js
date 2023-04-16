import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from 'sweetalert';
import http from '../include/http';
import { Link } from 'react-router-dom';  
import { useNavigate, useParams } from 'react-router-dom'
export default function Appointmentdetails() {
	
	const [appointmentid, setAppointmentid] = useState("")
	const [doctorid, setDoctorid] = useState("");
	const [patientid, setPatientid] = useState("");
	const [appointmentstatus, setAppointmentstatus] = useState("");
	const [appointmenttype, setAppointmenttype] = useState("");

	const { id } = useParams()
	const navigate = useNavigate();
	
	useEffect(()=>{
    	fetchAppointment()
  	},[])
 	
	const fetchAppointment = () => {
    http.get(`/appointments/${id}`).then((response) => {	
      setAppointmentid(response.data.data._id);
      setDoctorid(response.data.data.doctor.id);
      setPatientid(response.data.data.patientProfile.id);
      setAppointmentstatus(response.data.data.status);
      setAppointmenttype(response.data.data.type);
    })
    .catch((error) => {
      console.log(error);
    })
  }


	let handleSubmit = async (e) => {
	  e.preventDefault();  
	}

	return(
		<div className="container">
		    <div className="card">
		    	<div className="card-header">Appointment Details</div>
			    <div className="card-body">
			    	<Row>
						<Col md="3" style={{ marginBottom: "10px" }}>
				             <Link to="/admin/allappointments"><button class="btn btn-secondary" style={{ width: "100%" }}> <i class="fas fa-user-md"></i> Doctor Info</button></Link>  
						</Col>
						<Col md="3">
				             <Link to={`/admin/patientdetails/${patientid}`}><button class="btn btn-secondary" style={{ width: "100%" }}> <i className="fas fa-procedures"></i> Patient Info</button></Link>  
						</Col>
						<Col md="3">
				             <Link to="/admin/allappointments"><button class="btn btn-secondary" style={{ width: "100%" }}> <i className="fas fa-file"></i> Files</button></Link>  
						</Col>
						<Col md="3">
				             <Link to="/admin/allappointments"><button class="btn btn-secondary" style={{ width: "100%" }}> <i className="fas fa-money-bill"></i> Payment Details</button></Link>  
						</Col>
						<Col md="3">
				             <Link to="/admin/allappointments"><button class="btn btn-secondary" style={{ width: "100%" }}> <i className="fas fa-star"></i> Review</button></Link>  
						</Col>
						<Col md="3">
				             <Link to="/admin/allappointments"><button class="btn btn-secondary" style={{ width: "100%" }}> <i className="fas fa-flag"></i> Case</button></Link>  
						</Col>
						<Col md="3">
				             <Link to={`/admin/prescriptions/${appointmentid}`} ><button class="btn btn-secondary" style={{ width: "100%" }}> <i class="fas fa-prescription"></i> Prescription</button></Link>  
						</Col>
				    </Row>
		    	</div>
			</div>
		</div>
	)
}