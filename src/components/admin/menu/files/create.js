import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from 'sweetalert';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function Create() {
	const navigate = useNavigate();
	const [selectedFile, setSelectedFile] = useState("");
	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
	};
	
	const http = axios.create({
      baseURL: 'http://localhost:3000/api/v1.0',
      timeout: 10000,
      headers: {
      	'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'multipart/form-data',
        'Authorization':localStorage.getItem('token'),
      },
  }); 
	

	let handleSubmit = async (e) => {
	  	e.preventDefault();
	  	const formData = new FormData();
	  	console.log(selectedFile);
    	formData.append('files', setSelectedFile)
	    http.post('/files/upload/62b736241bfb7618709bcaee', {
	    	formData,
	    }).then((response) => {
	    if (response.data) {
    		swal("Data Added Successfully");
	      navigate("/admin/files");
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
		    <div className="card-header"> Add File</div>
		    <div className="card-body">
		    	<Row>
					<Col md={{ span: 10, offset: 1 }}>
					  <form  onSubmit={handleSubmit}>
						  	<div className="form-group mt-3">
						    	<label>Select File</label>
						    	<input type="file" className="form-control" required="" onChange={changeHandler} />
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