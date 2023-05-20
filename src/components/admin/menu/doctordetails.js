import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from 'sweetalert';
import http from '../include/http';
import { useNavigate, useParams } from 'react-router-dom'
export default function Doctordetails() {
	const [doctorprofile, setDoctorprofile] = useState([])
	const { id } = useParams()
	const navigate = useNavigate();
	
	useEffect(()=>{
	    fetchDoctordetails()
	  },[])
 
	const fetchDoctordetails = () => {
    http.get(`/doctors/${id}`).then((response) => {
      setDoctorprofile(response.data.data);

      console.log(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }

	return(
		<div className="container">
		    <div className="card">
		    	<div className="card-header"> Doctor Details </div>
			    <div className="card-body">
				    <Row>
						<Col md={{ span: 3}}>
						    <img src={doctorprofile.avatar} height="200px" width="200px"/>
						</Col>
						<Col md={{ span: 9}}>
							<h6>Name: {doctorprofile.name}</h6>
							<h6>Name: {doctorprofile.designation}</h6>
							<h6>BMDC Number: {doctorprofile.bmdcNumber}</h6>
							<h6>Specialization: {doctorprofile.specialization}</h6>
						  	<h6>Qualifications: {doctorprofile.qualifications?.map((e)=>{
							  	return (
						      <b> {e.degree} - {e.institute} - {e.year} / </b>
						    )})} </h6>
						    <h6>Experiance: {doctorprofile.experiences?.map((e)=>{
							  	return (
						      <b> {e.department} - {e.designation} - {e.hospitalName} / </b>
						    )})} </h6>
						</Col>
				    </Row>
		    	</div>
			</div>
		</div>
	)
}