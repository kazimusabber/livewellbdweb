import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from 'sweetalert';
import Yearcomponent from '../../../common/yearcomponent';
import http from '../../include/http';
import { useNavigate } from "react-router-dom";
export default function Registration() {


  const navigate = useNavigate();
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [dob, setDob] = useState("")
  const [gender, setGender] = useState("")
  const [bmdcnumber, setBmdcnumber] = useState("")
  const [bmdcyear, setYear] = useState("")

  
  let handleSubmit = async (e) => {
    e.preventDefault();
      http.post('/auth/register/doctor', {
        phone:phone,password:password,firstName:firstname,lastName:lastname,dob:dob,gender:gender,
        bmdcNumber:bmdcnumber,bmdcYear:bmdcyear,termsAccepted:true
      }).then((response) => {
      if (response.data) {
        swal("Data Added Successfully");
          navigate("/admin/doctors");
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
                  <label>Name</label>
                  <input type="text" className="form-control" required=""  onChange={(e) => setPhone(e.target.value)} placeholder="+8801677....."/>
                </div>

                <div className="form-group mt-3">
                  <label>First Name</label>
                  <input type="text" className="form-control" required=""  onChange={(e) => setFirstname(e.target.value)} placeholder="First Name"/>
                </div>

                <div className="form-group mt-3">
                  <label>Last Name</label>
                  <input type="text" className="form-control" required=""  onChange={(e) => setLastname(e.target.value)} placeholder="Last Name"/>
                </div>
                <div className="form-group mt-3">
                  <label>Date of Birth</label>
                  <input type="date" className="form-control" required=""  onChange={(e) => setDob(e.target.value)} placeholder="Date of Birth"/>
                </div>

                <div className="form-group mt-3">
                  <label>Gender</label>
                  <input type="text" className="form-control" required=""  onChange={(e) => setGender(e.target.value)} placeholder="Gender"/>
                </div>
                 <div className="form-group mt-3">
                  <label>Password</label>
                  <input type="password" className="form-control" required=""  onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                </div>
                 <div className="form-group mt-3">
                  <label>BMDC Number</label>
                  <input type="number" className="form-control" required=""  onChange={(e) => setBmdcnumber(e.target.value)} placeholder="BMDC Number"/>
                </div>
                <div className="form-group mt-3">
                  <label>BMDC Year</label>
                    <Yearcomponent setYear={setYear}></Yearcomponent>
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

