import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from 'sweetalert';
import http from '../include/http';
import { useNavigate, useParams } from 'react-router-dom'
export default function Appointmentfile() {
	const [file, setFile] = useState([])
	const { id } = useParams()
	const navigate = useNavigate();
	
	useEffect(()=>{
    fetchAppointmentfile()
  },[])
 
	const fetchAppointmentfile = () => {
    http.get(`/appointments/${id}`).then((response) => {
      setFile(response.data.data.files);

      console.log(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }

	return(
		<div className="container">
		    <div className="card">
		    	<div className="card-header"> Files </div>
			    <div className="card-body"  id="printablediv">
					<Row>
						{file.map((e)=>{
						  	return (
						  	<Col md={{ span: 6}}>
					      <img src={e} height="500px" width="500px"/>
					      </Col>
						
					    )})} 
					</Row>    
		    	</div>
			</div>
		</div>
	)
}