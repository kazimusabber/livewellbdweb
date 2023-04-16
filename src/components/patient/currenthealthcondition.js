import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import http from '../admin/include/http';
import { useNavigate, useParams } from 'react-router-dom'
export default function Currenthealthcondition() {

  const [doctorprofile, setDoctorprofile] = useState([]);
  const [specialtydata, setSpecialtydata] = useState([]) 
  const { id } = useParams()
  useEffect(() => {
    fetchdoctorData();
    fetchspecialtyData()
  },[])

  const fetchspecialtyData = () => {
    http.get('/specialties').then((response) => {
      setSpecialtydata(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }  

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
                  <h4>Current Health Condition </h4>
                  <div className="form-group">
                    <label for="specialty">Symtoms at this moment</label>
                    <select className="form-select" aria-label="Default select example" data-live-search="true">
                      <option selected>Select Specialty</option>
                      { specialtydata.map((specialty_data) => ( 
                      <option value={specialty_data.id}>{specialty_data.name}</option>
                      )) }
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="helathissue"> Health Issue </label>
                    <textarea className="form-control form-control-sm" placeholder="Describe patient's health issue"></textarea>
                  </div>
                  <Link to ={`/patient/patientdocument/${id}`}>
                    <p style={{border: "2px solid #80808073",textAlign: "center",padding: "10px",borderRadius: "10px"}}><span>{"NEXT"}</span></p>
                  </Link>
              </Col>
            </Row>
        </Container>
      </>
    )
  }
