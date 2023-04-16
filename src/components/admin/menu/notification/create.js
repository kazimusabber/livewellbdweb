import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from 'sweetalert';
import http from '../../include/http';
import { useNavigate } from "react-router-dom";
export default function Create() {
	const navigate = useNavigate();
	const [title, setTitle] = useState("")
	const [body, setBody] = useState("")
	
	let handleSubmit = async (e) => {
	  e.preventDefault();
	    http.post('/notifications/send/631c9b578db9cf9944ed2f66', {
	    	title:title,body:body
	    }).then((response) => {
	    if (response.data) {
    		swal("Notification Send Successfully");
	      	navigate("/admin/notification");
      } 
      else
       {
         	swal(response.message);
      	}
	  	})
	  	.catch((error) => {
	    	console.log(error);
		})  
	}

	return(
		<div className="container">
		    <div className="card">
		    <div className="card-header"> Send Notification</div>
		    <div className="card-body">
		    	<Row>
					<Col md={{ span: 10, offset: 1 }}>
					  <form  onSubmit={handleSubmit}>
						  	<div className="form-group mt-3">
						    	<label>Title</label>
						    	<input type="text" className="form-control" required=""  onChange={(e) => setTitle(e.target.value)} placeholder="Title"/>
						  	</div>
						  	<div className="form-group mt-3">
						    	<label>Message</label>
						    	<input type="text" className="form-control" required=""  onChange={(e) => setBody(e.target.value)} placeholder="Messege"/>
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