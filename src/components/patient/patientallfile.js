import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from 'sweetalert';
import http from '../admin/include/http';
import { useNavigate, useParams } from 'react-router-dom'
export default function Appointmentfile() {
	const [file, setFile] = useState([])
	const { id } = useParams()
	const navigate = useNavigate();
	
	useEffect(()=>{
    fetchPatientfile()
  },[])
 
	const fetchPatientfile = () => {
    http.get(`/files/${id}`).then((response) => {
      setFile(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }

	return(
		<div className="container">
		    <div className="card">
		    	<h2 style={{textAlign:"center"}}>Files</h2>
			    <div className="card-body"  id="printablediv">
					<Row>
						{file?.map((e)=>{
						  	return (
						  	<Col md={{ span: 4}}>
					      		<img src={e.link} height="500px" width="500px" className="img-thumbnail"/>
					      	</Col>
					    )})} 
					</Row>    
		    	</div>
			</div>
		</div>
	)
}