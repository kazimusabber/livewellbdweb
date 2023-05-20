import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from 'sweetalert';
import http from '../include/http';
import { useNavigate, useParams } from 'react-router-dom'
export default function Patientdetails() {
	const [patientprofile, setPatientprofile] = useState([])
	const { id } = useParams()
	const navigate = useNavigate();
	
	useEffect(()=>{
    fetchPatientdetails()
  },[])
 
	const fetchPatientdetails = () => {
    http.get(`/users/patient-profile/${id}`).then((response) => {
      setPatientprofile(response.data.data);

      console.log(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }

	return(
		<div className="container">
		    <div className="card">
		    	<div className="card-header"> Patient Details </div>
			    <div className="card-body"  id="printablediv">
				    <Row>
						<Col md={{ span: 4}}>
						    <img src={patientprofile.avatar} height="200px" width="200px"/>
						</Col>
						<Col md={{ span: 6}}>
						  	<h4>Relation: <b> {patientprofile.relation}</b></h4>
					      	<p style={{marginBottom:"1px"}}>Name:<b> {patientprofile.name}</b></p>
						    <p>Gender: <b> {patientprofile.gender}</b></p>
						    <p> DOB: <b> {patientprofile.dob}</b></p>
						</Col>
				    </Row>
		    	</div>
			</div>
		</div>
	)
}