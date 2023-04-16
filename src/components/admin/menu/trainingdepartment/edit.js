import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from 'sweetalert';
import http from '../../include/http';
import { useNavigate, useParams } from 'react-router-dom'
export default function Edit() {
	
	const [specialty, setSpecialty] = useState("")
	const [selectedFile, setSelectedFile] = useState("");
	const { id } = useParams()
	const navigate = useNavigate();
	
	useEffect(()=>{
    fetchSpecialty()
  },[])
 
	const fetchSpecialty = () => {
    http.get(`/specialties/${id}`).then((response) => {
      setSpecialty(response.data.data.name);
      setSelectedFile(response.data.data.imageUrl);
    })
    .catch((error) => {
      console.log(error);
    })
  }

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
	};

	let handleSubmit = async (e) => {
	  e.preventDefault();  
	}

	return(
		<div className="container">
		    <div className="card">
		    	<div className="card-header"> Edit Specialty</div>
			    <div className="card-body">
			    	<Row>
							<Col md={{ span: 10, offset: 1 }}>
							  <form  onSubmit={handleSubmit}>
							  	<div className="form-group mt-3">
							    	<label>Specialty</label>
							    	<input type="text" className="form-control" required=""  value={specialty} onChange={(e) => setSpecialty(e.target.value)} placeholder="Specialty Name"/>
							  	</div>
							  	<img width="50px" src={selectedFile}/>
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