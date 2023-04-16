import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from 'sweetalert';
import http from '../../include/http';
import { useNavigate, useParams } from 'react-router-dom'
export default function Email() {
	
	const [mailmailer, setMailmailer] = useState("")
	const [mailhost, setMailhost] = useState("")
	const [mailport, setMailport] = useState("")
	const [mailusername, setMailusername] = useState("")
	const [mailpassword, setMailpassword] = useState("")
	const [mailencryption, setMailencryption] = useState("")
	const [mailfromaddress, setMailfromaddress] = useState("")
	const [mailername, setMailername] = useState("")
	
	const navigate = useNavigate();
	
	useEffect(()=>{
    fetchEmail()
  },[])
 
	const fetchEmail = () => {
    http.get(`/settings/email`).then((response) => {
      setMailmailer("");
      setMailhost(response.data.data);
      setMailport(response.data.data);
      setMailusername(response.data.data);
      setMailpassword(response.data.data);
      setMailencryption(response.data.data);
      setMailfromaddress(response.data.data);
      setMailername(response.data.data);
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
		    	<div className="card-header"> EMAIL SETTING</div>
			    <div className="card-body">
			    	<Row>
							<Col md={{ span: 10, offset: 1 }}>
							  <form  onSubmit={handleSubmit}>
							  	<div className="form-group mt-3">
							    	<label>Mail Mailer</label>
							    	<input type="text" className="form-control" required=""  value={mailmailer} onChange={(e) => setMailmailer(e.target.value)} placeholder="Mail Mailer"/>
							  	</div>
							  	<div className="form-group mt-3">
							    	<label>Mail Host</label>
							    	<input type="text" className="form-control" required=""  value={mailhost} onChange={(e) => setMailhost(e.target.value)} placeholder="Mail Host"/>
							  	</div>
							  	<div className="form-group mt-3">
							    	<label>Mail Port</label>
							    	<input type="text" className="form-control" required=""  value={mailport} onChange={(e) => setMailport(e.target.value)} placeholder="Mail Port"/>
							  	</div>
							  	<div className="form-group mt-3">
							    	<label>Mail Username</label>
							    	<input type="text" className="form-control" required=""  value={mailusername} onChange={(e) => setMailusername(e.target.value)} placeholder="Mail Username"/>
							  	</div>
							  	<div className="form-group mt-3">
							    	<label>Mail Password</label>
							    	<input type="text" className="form-control" required=""  value={mailpassword} onChange={(e) => setMailpassword(e.target.value)} placeholder="Mail Password"/>
							  	</div>
							  	<div className="form-group mt-3">
							    	<label>Mail Encryption</label>
							    	<input type="text" className="form-control" required=""  value={mailencryption} onChange={(e) => setMailencryption(e.target.value)} placeholder="Mail Encryption"/>
							  	</div>
							  	<div className="form-group mt-3">
							    	<label>Mail From Address</label>
							    	<input type="text" className="form-control" required=""  value={mailfromaddress} onChange={(e) => mailfromaddress(e.target.value)} placeholder="Mail From Address"/>
							  	</div>
							  	<div className="form-group mt-3">
							    	<label>Mailer Name</label>
							    	<input type="text" className="form-control" required=""  value={mailername} onChange={(e) => setMailername(e.target.value)} placeholder="Mailer Name"/>
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