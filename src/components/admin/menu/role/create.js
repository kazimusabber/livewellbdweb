import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from 'sweetalert';
import http from '../../include/http';
import { useNavigate } from "react-router-dom";
export default function Create() {
	const navigate = useNavigate();
	const [rolename, setRolename] = useState("")
	
	let handleSubmit = async (e) => {
	  e.preventDefault();
	    http.post('/roles', {
	    	name:rolename,
	    }).then((response) => {
	    if (response.data) {
    		swal("Data Added Successfully");
	      navigate("/admin/role");
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
		    <div className="card-header"> Add Role</div>
		    <div className="card-body">
		    	<Row>
					<Col md={{ span: 10, offset: 1 }}>
					  <form  onSubmit={handleSubmit}>
						  	<div className="form-group mt-3">
						    	<label>Role</label>
						    	<input type="text" className="form-control" required=""  onChange={(e) => setRolename(e.target.value)} placeholder="Role Name"/>
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