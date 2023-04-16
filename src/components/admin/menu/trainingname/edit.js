import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from 'sweetalert';
import http from '../../include/http';
import { useNavigate, useParams } from 'react-router-dom'
export default function Edit() {
	
	const [specialtydata, setSpecialtydata] = useState([])
	const [specialization, setSpecialization] = useState('')
	const [trainingname, setTrainingname] = useState("");
	const [field, setField] = useState("");
	const [trainingid, setTrainingid] = useState("");
	const { id } = useParams()
	const navigate = useNavigate();
	
	useEffect(()=>{
    fetchspecialtyData()
    fetchtraingData()
  },[])

  console.log(specialization);

  const fetchtraingData = () => {
    http.get(`/training/${id}`).then((response) => {
      setTrainingname(response.data.data.name);
      setField(response.data.data.fields[0].trim());
      setTrainingid(response.data.data.id);
    })
    .catch((error) => {
      console.log(error);
    })
	}
 	
	const fetchspecialtyData = () => {
    http.get('/specialties').then((response) => {
      setSpecialtydata(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    })
	}

	
	let handleSubmit = async (e) => {
	  e.preventDefault();  

	  http.patch(`/training/${trainingid}`, {
	    	name:trainingname,fields:[specialization]
	    }).then((response) => {
	    if (response.data) {
    		swal("Data Updated Successfully");
	      	navigate("/admin/trainingname");
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
		    	<div className="card-header"> Edit Training</div>
			    <div className="card-body">
			    	<Row>
							<Col md={{ span: 10, offset: 1 }}>
							  <form  onSubmit={handleSubmit}>
							  	<div className="form-group mt-3">
							    	<label>Training Name</label>
							    	<input type="text" className="form-control" required=""  value={trainingname} onChange={(e) => setTrainingname(e.target.value)} placeholder="Specialty Name"/>
							  	</div>
							  	<div className="form-group mt-3">
									    <label>Specialty</label>
									    <select className="form-select" aria-label="Default select example" data-live-search="true" onChange={(e) => setSpecialization(e.target.value)}>
										  
										  {specialtydata.map((specialty_data) => ( 
										  		<option value={specialty_data.name} selected={specialty_data.name === field ? "selected":null}>{specialty_data.name}</option>
										  )) }
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