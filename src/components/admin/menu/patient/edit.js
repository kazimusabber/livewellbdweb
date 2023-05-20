import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from 'sweetalert';
import http from '../../include/http';
import { useNavigate, useParams } from "react-router-dom";
export default function Edit() {


  const [name, setName] = useState("")
  const [dob, setDob] = useState("")
  const [gender, setGender] = useState("")

  const { id } = useParams()
  const navigate = useNavigate();
  
  useEffect(()=>{
      fetchPatient()
    },[])
 
  const fetchPatient = () => {


    http.get(`users/patient-profile/${id}`).then((response) => {
      console.log(response);
      setName(response.data.data.name);
      setDob(response.data.data.dob);
      setGender(response.data.data.gender);
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
        <div className="card-body">
          <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <form  onSubmit={handleSubmit}>
                <div className="form-group mt-3">
                  <label>Last Name</label>
                  <input type="text" className="form-control" required=""  onChange={(e) => setName(e.target.value)} value={name}/>
                </div>
                <div className="form-group mt-3">
                  <label>Date of Birth</label>
                  <input type="date" className="form-control" required=""  onChange={(e) => setDob(e.target.value)} value={dob}/>
                </div>

                <div className="form-group mt-3">
                  <label>Gender</label>
                  <input type="text" className="form-control" required=""  onChange={(e) => setGender(e.target.value)} value={gender}/>
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

