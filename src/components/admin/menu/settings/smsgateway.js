import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from 'sweetalert';
import http from '../../include/http';
import { useNavigate, useParams } from 'react-router-dom'
export default function Smsgateway() {
	
	const [smsapikey, setSmsapikey] = useState("")
	const [smssecretkey, setSmssecretkey] = useState("")
	
	const navigate = useNavigate();
	
	useEffect(()=>{
    fetchSmsgateway()
  },[])
 
	const fetchSmsgateway = () => {
    http.get(`/settings/sms`).then((response) => {
      
     
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
		    	<div className="card-header"> SMS GATEWAY SETTING</div>
			    <div className="card-body">
			    	<Row>
							<Col md={{ span: 10, offset: 1 }}>
							  <form  onSubmit={handleSubmit}>
							  	<div className="form-group mt-3">
							    	<label>SMS API key</label>
							    	<input type="text" className="form-control" required=""  value={smsapikey} onChange={(e) => setSmsapikey(e.target.value)} placeholder="Sms API key"/>
							  	</div>
							  	<div className="form-group mt-3">
							    	<label>SMS Secret Key</label>
							    	<input type="text" className="form-control" required=""  value={smssecretkey} onChange={(e) => setSmssecretkey(e.target.value)} placeholder="Sms secret key"/>
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