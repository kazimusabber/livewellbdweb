import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from 'sweetalert';
import Image from 'react-bootstrap/Image'
import http from '../../include/http';
import { useNavigate, useParams } from 'react-router-dom'
export default function Details() {
	const [patientprofile, setPatientprofile] = useState([])
	const [doctorprofile, setDoctorprofile] = useState([])
	const [patientrx, setPatientrx] = useState([])
	const [patientinvestigation, setPatientinvestigation] = useState([])
	const [diagnosis, setDiagnosis] = useState([])
	const [complains, setComplains] = useState([])
	const [advice, setAdvice] = useState([])
	const [createdate, setCreatedate] = useState()
	
	const { id } = useParams()
	const navigate = useNavigate();
	
	useEffect(()=>{
    fetchPrecripttion()
  },[])
 
	const fetchPrecripttion = () => {
    http.get(`/prescriptions/${id}`).then((response) => {
      setPatientprofile(response.data.data.patientProfile);
      setDoctorprofile(response.data.data.doctor);
      setPatientrx(response.data.data.rx);
      setPatientinvestigation(response.data.data.investigations);
      setAdvice(response.data.data.advices);
      setCreatedate(response.data.data.createdAt);
      setDiagnosis(response.data.data.diagnosis);
      setComplains(response.data.data.complaints);

      console.log(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }


  function Calculateage(props){

  	if(props.dob){
	  	const datearray = props.dob.split("/");
	  	var newdateofbirth = datearray[2]+"-"+datearray[1]+"-"+datearray[0];
	    var today = new Date();
	    var birthDate = new Date(newdateofbirth);  // create a date object directly from `dob1` argument
	    
	    
	    var age_now = today.getFullYear() - birthDate.getFullYear();
	    var m = today.getMonth() - birthDate.getMonth();
	    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
	    {
	        age_now--;
	    }
	    return age_now;

	  } else {
	  	return 0;
  	}
    
  }


	return(



		<div className="container">
		    <div className="card">
		    	<div className="card-header"> Prescription Details </div>
			    <div className="card-body"  id="printablediv">
			    	<Row>
						<Col md={{ span: 4, offset: 1 }}>
						<p> <b>{createdate} </b></p>
						<p> Rx ID: <b>{id} </b></p>
							<p> Patient: <b>{patientprofile.name} </b></p>
							<p>Gender: <b>{patientprofile.gender} </b> DOB:  <b>{patientprofile.dob}</b></p>
							<p>Weight: <b> </b> Height:</p>
							<p></p>
						</Col>
						<Col md={{ span: 4, offset: 3 }}>
							<p><b>{doctorprofile.name} </b></p>

							{doctorprofile.qualifications.map((e)=>{
								  	return (
							      <b> {e.degree}, </b>
							    )})}
							<p><b>{doctorprofile.designation} </b></p>
							<p> <b>{doctorprofile.institution} </b></p>	
							<p>BMDC Reg No: <b>{doctorprofile.bmdcNumber} </b></p>
						</Col>
				    </Row>
				    <hr></hr>
				    <Row>
						<Col md={{ span: 3, offset: 1 }} style={{borderRight:"1px solid #d1d1d173"}}>

							<div style={{marginBottom:"60px"}}>
								<h6>Chief Complains</h6>
							    {complains.map((e,index)=>{
								  	return (
							      <b>{ index+1 } . {e} <br></br></b>
							    )})}
							</div>
							<hr></hr>

							<div style={{marginBottom:"60px"}}>
								<h6>Diagnosis</h6>
							    {diagnosis.map((e,index)=>{
								  	return (
							      <b>{ index+1 } . {e} <br></br></b>
							    )})}
							</div>

							<hr></hr>
							<div>
								<h6>Investigations</h6>
							    {patientinvestigation.map((e,index)=>{
								  	return (
							      <b>{ index+1 } . {e} <br></br></b>
							    )})}
							</div>		
						</Col>

						<Col md={{ span: 6}}>
								<h3>Rx</h3>
								  {patientrx.map((e,index)=>{
								  	return (
								  		<>
							      <p style={{marginLeft:"30px"}}><b>{index+1} .  {e.type} {e.name} {e.strength} </b>({e.genericName})</p>
							      <p style={{marginLeft:"50px"}}><span>{e.dosage}</span> <span style={{marginLeft:"40px"}}>{e.duration}</span></p>
							      <hr style={{marginLeft:"30px"}}></hr>
							      </>
							    )})}
						    
						    <h6 style={{marginLeft:"30px"}}>Advice </h6>
						    {advice.map((e)=>{
							  	return (
						      <p style={{marginLeft:"30px"}}><b>{e}</b></p>
						    )})}
						</Col>
				    </Row>
		    	</div>
			</div>
		</div>
	)
}