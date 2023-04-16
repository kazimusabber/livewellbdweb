import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from 'sweetalert';
import http from '../../include/http';
import { useNavigate } from "react-router-dom";
export default function Addurgentdoctorschedule() {
	const navigate = useNavigate();
	const [doctordata, setDoctordata] = useState([])
	const [specialtydata, setSpecialtydata] = useState([])
	const [specialization, setSpecialization] = useState('')
	const [date, setDate] = useState('')
	const [formtime, setFormtime] = useState('')
	const [totime, setTotime] = useState('')
	const [isactive, setIsactive] = useState('')
	const [doctors, setDoctor] = useState('')
	useEffect(() => {
    fetchdoctorData()
    fetchspecialtyData()
	}, [])


	const fetchdoctorData = () => {
    http.get('/doctors').then((response) => {
      setDoctordata(response.data.data);
      console.log(response.data.data);
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

	    	console.log(doctors);

	    http.post('/doctors/urgent/', {
	      	specialization: specialization,
	      	doctors: doctors.array,
	      	date:date,
	      	from:formtime,
	      	to:totime,
	      	isActive:isactive
	    }).then((response) => {
		    if (response.data) {
		    			swal("Data Added Successfully");
			        navigate("/admin/urgentdoctorschedule");
		      	} 
		      	else {
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
		    <div className="card-header"> Add Doctor Schedule</div>
		    <div className="card-body">
		    	<Row>
					<Col md={{ span: 10, offset: 1 }}>
					  <form  onSubmit={handleSubmit}>
							<div className="form-group mt-3">
							    <label>Doctor Name</label>
							    <select className="form-select" aria-label="Default select example" data-show-subtext="true"  data-live-search="true" onChange={(e) => setDoctor(e.target.value)}>
								  <option selected>Select Doctor Name</option>
								  { doctordata.map((doctor_data) => ( 
								  	<option value={doctor_data._id}>{doctor_data.name}</option>

								  )) }
								</select>
							</div>
							<div className="form-group mt-3">
							    <label>Specialty</label>
							    <select className="form-select" aria-label="Default select example" data-live-search="true" onChange={(e) => setSpecialization(e.target.value)}>
								  <option selected>Select Specialty</option>
								  { specialtydata.map((specialty_data) => ( 
								  <option value={specialty_data.id}>{specialty_data.name}</option>
								  )) }
								</select>
							</div>
						  	<div className="form-group mt-3">
						    	<label>Day</label>
						    	<input type="date" className="form-control" required=""  onChange={(e) => setDate(e.target.value)}/>
						  	</div>
						  	<div className="form-group mt-3">
						    	<label>Start Time</label>
						    	<input type="time" className="form-control" required="" onChange={(e) => setFormtime(e.target.value)}/>
						  	</div>
						  	<div className="form-group mt-3">
						    	<label>End Time</label>
						    	<input type="time" name="_start_time" className="form-control" required="" onChange={(e) => setTotime(e.target.value)}/>
						  	</div>
						  	<div className="form-group mt-3">
							    <label>Status</label>
							    <select className="form-select" aria-label="Default select example" onChange={(e) => setIsactive(e.target.value)}>
								  <option selected>Open this select menu</option>
								  <option value="true">Active</option>
								  <option value="false">Inactive</option>
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