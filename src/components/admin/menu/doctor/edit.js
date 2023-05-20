import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from 'sweetalert';
import http from '../../include/http';
import { useNavigate, useParams } from 'react-router-dom'
export default function Doctordetails() {
	const [doctorprofile, setDoctorprofile] = useState([])
	const [name, setName] = useState("")
  	const [dob, setDob] = useState("")
  	const [gender, setGender] = useState("")
  	const [about, setAbout] = useState("")
  	const [bmdcno, setBmdcno] = useState("")
  	const [bmdcyear, setBmdcyear] = useState("")
	const { id } = useParams()
	const navigate = useNavigate();
	
	useEffect(()=>{
	    fetchDoctordetails()
	  },[])
 
	const fetchDoctordetails = () => {
    http.get(`/doctors/${id}`).then((response) => {
      setDoctorprofile(response.data.data);
      console.log(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }


  let handleSubmit = async (e) => {
    e.preventDefault();
      http.post('users/patient-profile/${id}', {
       name:name,dob:dob
      }).then((response) => {
      if (response.data) {
        swal("Data Updated Successfully");
          navigate("/admin/patients");
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
		    	<div className="card-header"> Doctor Details </div>
			    <div className="card-body">
				    <Row>
						<Col md={{ span: 3}}>
						    <img src={doctorprofile.avatar} height="200px" width="200px"/>
						</Col>
						<Col md={{ span: 9}}>
							<form  onSubmit={handleSubmit}>
				                <div className="form-group mt-3">
				                  <label>Name</label>
				                  <input type="text" className="form-control" required=""  onChange={(e) => setName(e.target.value)} value={doctorprofile.name}/>
				                </div>
				                <div className="form-group mt-3">
				                  <label>Date of Birth</label>
				                  <input type="date" className="form-control" required=""  onChange={(e) => setDob(e.target.value)} value={doctorprofile.dob}/>
				                </div>

				                <div className="form-group mt-3">
				                  <label>Gender</label>
				                  <input type="text" className="form-control" required=""  onChange={(e) => setGender(e.target.value)} value={doctorprofile.gender}/>
				                </div>
				                <div className="form-group mt-3">
				                  <label>About</label>
				                  <input type="text" className="form-control" required=""  onChange={(e) => setAbout(e.target.value)} value={doctorprofile.about}/>
				                </div>
				                <div className="form-group mt-3">
				                  <label>BMDC No</label>
				                  <input type="text" className="form-control" required=""  onChange={(e) => setBmdcno(e.target.value)} value={doctorprofile.bmdcNumber}/>
				                </div>
				                <div className="form-group mt-3">
				                  <label>BMDC Year</label>
				                  <input type="text" className="form-control" required=""  onChange={(e) => setBmdcyear(e.target.value)} value={doctorprofile.bmdcYear}/>
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