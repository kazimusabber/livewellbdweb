import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Takepicture from "../common/takepicture";
import Agree from "../common/agree";
import swal from 'sweetalert';
import http from '../admin/include/http';
import Modal from 'react-bootstrap/Modal'
import { useNavigate, useParams } from 'react-router-dom'
export default function Paymentgateway() {

    const [doctorprofile, setDoctorprofile] = useState([]);
    const navigate = useNavigate();
    
    const { doctorid,id } = useParams()
     
  
  useEffect(() => {
    fetchdoctorData();
  },[])

  function bKashpayment(){
    http.post('appointments', {
            doctor: doctorid,
            isSelf: true,
            patientProfile:id            
        }).then((response) => {
            if (response.data) {
                http.post('payments/create', {
                  appointmentId: response.data.data.id,
                  totalAmount: 200,
                  method: "nagad",
                  user:response.data.data.user.id,
                  doctor:doctorid            
                      }).then((response) => {
                          if (response.data) {
                            console.log(response.data.data);
                             /* http.post('payments/execute', {
                                  paymentId: response.data.data.id,
                                  
                                      }).then((response) => {
                                          if (response.data) {

                                              
                                                console.log(response.data);




                                                 
                                              } 
                                              else {
                                                  swal(response.message);
                                              }
                                          })
                                          .catch((error) => {
                                              console.log(error);
                                      })



                                */
                                 
                              } 
                              else {
                                  swal(response.message);
                              }
                          })
                          .catch((error) => {
                              console.log(error);
                      })





                   
                } 
                else {
                    swal(response.message);
                }
            })
            .catch((error) => {
                console.log(error);
        })
  }

   
  const fetchdoctorData = () => {
    http.get(`doctors/${doctorid}`).then((response) => {
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
                  
                    
                    <p onClick={bKashpayment} style={{border: "2px solid #80808073",textAlign: "center",padding: "10px",borderRadius: "10px",marginTop:"20px",cursor:"pointer"}}>
                      bKash
                    </p>
                    <p style={{border: "2px solid #80808073",textAlign: "center",padding: "10px",borderRadius: "10px",marginTop:"20px",cursor:"pointer"}}>
                      Nagad
                    </p>
                    <p style={{border: "2px solid #80808073",textAlign: "center",padding: "10px",borderRadius: "10px",marginTop:"20px",cursor:"pointer"}}>
                      SSL COMMERZ
                    </p>
                  
                </Col>
            </Row>
        </Container>
          
        </>
    )
}
