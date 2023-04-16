import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from 'sweetalert';
import http from '../../include/http';
import { useNavigate, useParams } from 'react-router-dom'
export default function Edit() {
	
	const [primarycommission, setPrimarycommission] = useState("")
	const [secondarycommission, setSecondarycommission] = useState("")
	const [percentage, setPercentage] = useState("")
	
	const navigate = useNavigate();
	
	useEffect(()=>{
    fetchRole()
  },[])
 
	const fetchRole = () => {
    http.get(`/settings/commission`).then((response) => {
     
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
		    	<div className="card-header"> COMMISSION SETTING</div>
			    <div className="card-body">
			    	<Row>
							<Col md={{ span: 10, offset: 1 }}>
							  <form  onSubmit={handleSubmit}>
							  	<div className="form-group mt-3">
							    	<label>Primary commission</label>
							    	<input type="number" className="form-control" required=""  value={primarycommission} onChange={(e) => setPrimarycommission(e.target.value)} placeholder="Primary commission"/>
							  	</div>
							  	<div className="form-group mt-3">
							    	<label>Secondary commission</label>
							    	<input type="number" className="form-control" required=""  value={secondarycommission} onChange={(e) => setSecondarycommission(e.target.value)} placeholder="Secondary commission"/>
							  	</div>
							  	<div className="form-group mt-3">
							    	<label>Enable Percentage</label>
							    	<select className="form-control" required=""  value={percentage} onChange={(e) => setPercentage(e.target.value)}>
							    		<option value="1">Enable</option>
							    		<option value="2">Disabled</option>
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