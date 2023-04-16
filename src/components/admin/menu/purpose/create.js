import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from 'sweetalert';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function Create() {
	const navigate = useNavigate();
	const [specialty, setSpecialty] = useState("")
	const [selectedFile, setSelectedFile] = useState("");
	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
	};
	
	const http = axios.create({
      baseURL: 'https://server.livewellbd.com/api/v1.0',
      timeout: 10000,
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization':'Bearer '+localStorage.getItem('token'),
      },
  }); 
	

	let handleSubmit = async (e) => {
	  e.preventDefault();
	  const formData = new FormData();
	  console.log(selectedFile);
    formData.append('data', "")
    formData.append('image', setSelectedFile)
    
	    http.post('/specialties', {
	    	formData,
	    }).then((response) => {
	    if (response.data) {
    		swal("Data Added Successfully");
	      navigate("/admin/specialty");
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
		    <div className="card-header"> Add Specialty</div>
		    <div className="card-body">
		    	<Row>
					<Col md={{ span: 10, offset: 1 }}>
					  <form  onSubmit={handleSubmit}>
						  	<div className="form-group mt-3">
						    	<label>Specialty</label>
						    	<input type="text" className="form-control" required=""  onChange={(e) => setSpecialty(e.target.value)} placeholder="Specialty Name"/>
						  	</div>
						  	<div className="form-group mt-3">
						    	<label>Specialty Image</label>
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