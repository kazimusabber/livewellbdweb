import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from 'sweetalert';
import http from '../../include/http';
import { useNavigate, useParams } from 'react-router-dom'
export default function Servicecharge() {
	
	const [servicecharge, setServicecharge] = useState("")
	const [percentage, setPercentage] = useState("")
	
	const navigate = useNavigate();
	
	useEffect(()=>{
    fetchServicecharge()
  },[])
 
	const fetchServicecharge = () => {
    http.get(`/settings/service-charge`).then((response) => {
     
     
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
		    	<div className="card-header"> SERVICE CHARGE SETTING</div>
			    <div className="card-body">
			    	<Row>
							<Col md={{ span: 10, offset: 1 }}>
							  <form  onSubmit={handleSubmit}>
							  	<div className="form-group mt-3">
							    	<label>Service Charge</label>
							    	<input type="number" className="form-control" required=""  onChange={(e) => setServicecharge(e.target.value)} placeholder="Service Charge"/>
							  	</div>

							  	<div className="form-group mt-3">
							    	<label>Enable Percentage</label>
							    	<select className="form-control" required=""  onChange={(e) => setPercentage(e.target.value)}>
							    		<option value="1">Enable</option>
							    		<option value="2">Disable</option>
							    	</select>
							  	</div>
									<div>
							    	<button type="submit" className="btn btn-primary"> Submit </button>
							  	</div>
								</form>
							</Col>
				    </Row>
		    </div>
			</div>
		</div>
	)
}