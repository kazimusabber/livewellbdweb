import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from 'sweetalert';
import http from '../../include/http';
import { useNavigate, useParams } from 'react-router-dom'
export default function Edit() {
	
	const [rolename, setRolename] = useState("")
	const { id } = useParams()
	const navigate = useNavigate();
	
	useEffect(()=>{
    fetchRole()
  },[])
 
	const fetchRole = () => {
    http.get(`/roles/${id}`).then((response) => {
      setRolename(response.data.data.name);
     
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
		    	<div className="card-header"> Edit Role</div>
			    <div className="card-body">
			    	<Row>
							<Col md={{ span: 10, offset: 1 }}>
							  <form  onSubmit={handleSubmit}>
							  	<div className="form-group mt-3">
							    	<label>Role Name</label>
							    	<input type="text" className="form-control" required=""  value={rolename} onChange={(e) => setRolename(e.target.value)} placeholder="Role Name"/>
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