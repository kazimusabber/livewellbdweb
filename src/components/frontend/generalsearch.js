import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from 'sweetalert';
import http from '../admin/include/http';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
export default function Create() {
	const navigate = useNavigate();
	const [specialty, setSpecialty] = useState([])
	const [searchvalue, setSearchvalue] = useState("")
	const [specialtyvalue, setSpecialtyvalue] = useState("")

	useEffect(() => {
    fetchData();
  }, [])

  const fetchData = () => {
    http.get(`/specialties`).then((response) => {
      setSpecialty(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }
	
	let handleSubmit = async (e) => {
	  e.preventDefault();

	  navigate('/searchdoctor', { state: { searchval: searchvalue, specialtyval: specialtyvalue} });
	}

	return(
		<div className="container">
		    <div className="card">
		    <div className="card-body">
		    	<Row>
					<Col md={{ span: 10, offset: 1 }}>
					  <form  onSubmit={handleSubmit}>
					  		<div className="form-group mt-3">
						    	<label>Search by doctor name</label>
						    	<input type="text" className="form-control" required=""  onChange={(e) => setSearchvalue(e.target.value)} placeholder="Search by doctor name"/>
						  	</div>
						  	<div className="form-group mt-3">
						    	<label>Search by specialty</label>
						    	<select onChange={(e) => setSpecialtyvalue(e.target.value)} className="form-control">
						    			<option value="" disabled>Search by specialty</option>
						    		{specialty.map((allspecialty) => (
								        <option value={allspecialty.name}>{allspecialty.name}</option>
								      ))}
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