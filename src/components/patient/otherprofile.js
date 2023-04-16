import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Takepicture from "../common/takepicture";
import swal from 'sweetalert';
import http from '../admin/include/http';
import { useNavigate, useParams } from 'react-router-dom'
export default function Otherprofile() {

    const [doctorprofile, setDoctorprofile] = useState([]);
    const navigate = useNavigate();
    const [patientname, setPatientname] = useState('')
    const [dob, setDob] = useState('')
    const [relation, setRelation] = useState('')
    const [gender, setGender] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [bloodgroup, setBloodgroup] = useState('')

    const { id } = useParams()
     let handleSubmit = async (e) => {
        e.preventDefault();

        http.post('/users/patient-profile', {
            name: patientname,
            dob: dob,
            relation:relation,
            gender:gender,
            weight:weight,
            height:height,
            bloodGroup:bloodgroup
        }).then((response) => {
            if (response.data) {
                   swal("Data Added Successfully");
                    navigate(`/patient/selectpatient/${id}`);
                } 
                else {
                    swal(response.message);
                }
            })
            .catch((error) => {
                console.log(error);
        })
    }


  
  useEffect(() => {
    fetchdoctorData();
  },[])

   

  const fetchdoctorData = () => {
    http.get(`doctors/${id}`).then((response) => {
         console.log(response.data.data); 
          setDoctorprofile(response.data.data);
        
    })
    .catch((error) => {
      console.log(error);
    })
  }
    return(
        <>
        <Container>
            <Row>
                <div className='item'>
                    <div style={{padding: '10px 10px 0px 10px',border: "1px solid #F1F0F2",borderRadius: "4px"}}>
                        <div className="row">
                          <div className="col-8 col-md-8 col-lg-8" style={{marginTop: '5%'}}>
                            <h5 className="mt-3"><b>{doctorprofile.name} </b></h5>
                            <h5 className="mt-3"><b>{doctorprofile.designation} </b></h5>
                            <h6  style={{marginBottom: '5%'}}> {doctorprofile.specialization}</h6> 
                        </div>
                        <div className="col-4 col-md-4 col-lg-4" style={{paddingRight: '0px'}}>
                            <img src={doctorprofile.avatar}  className="img-fluid" height="200px" width="200px;" />
                          </div>
                        </div>
                    </div>
                </div>
             
                <Col md={{ span: 12}} style={{marginTop:"5%"}}>
                 <form  onSubmit={handleSubmit}>
                    <Takepicture></Takepicture>  
                    <div className="form-group">
                        <label for="name">Patient Name</label>
                        <input type="text" className="form-control form-control-sm" placeholder="Enter Name" onChange={(e) => setPatientname(e.target.value)}/>
                    </div>
                    
                    <div className="form-group">
                        <label for="dob">Date of Birth</label>
                        <input type="date" className="form-control form-control-sm" placeholder="Date of birth" onChange={(e) => setDob(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label for="gender">Relation</label>
                        <select className="form-control" onChange={(e) => setRelation(e.target.value)}>
                            <option value="Father">Father</option>
                            <option value="Mother">Mother</option>
                            <option value="Son">Son</option>
                            <option value="Daughter">Daughter</option>
                            <option value="Other">Other</option>
                            
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="gender">Gender</label>
                        <select className="form-control" onChange={(e) => setGender(e.target.value)}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                            
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="height">Height</label>
                        <input type="text" className="form-control form-control-sm" placeholder="Height" onChange={(e) => setHeight(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label for="wieght">Weight</label>
                        <input type="text" className="form-control form-control-sm" placeholder="Weight"  onChange={(e) => setWeight(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label for="gender" >Blood Group</label>
                        <select className="form-control" onChange={(e) => setBloodgroup(e.target.value)}>
                            <option value="A+">A</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="AB+">AB+</option>
                            <option value="B+">B</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary"> Submit </button>
                    </div>
                </form>
                </Col>
            </Row>
        </Container>
        </>
    )
}
