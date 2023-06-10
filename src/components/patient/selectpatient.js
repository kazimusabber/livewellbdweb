import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import http from '../admin/include/http';
import { useNavigate, useParams } from 'react-router-dom'
export default function Selectpatient() {


  const [items, setItems] = useState([]);
  const [doctorprofile, setDoctorprofile] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [message, setMessage] = useState("");


  const { id } = useParams()
  useEffect(() => {
    fetchData();
    fetchdoctorData();
  },[])

  const fetchData = () => {
    http.get(`users/patient-profile`).then((response) => {
          setIsLoaded(true);
          console.log(response.data.data);
        if(response.data.data.length > 0){
          setItems(response.data.data);
        }else{
          setMessage("No Doctor Found in this specialty");
        }
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
                
                <div class='item'>
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
              
              {items.map((item) => {
                return (
                  <Col md={{ span: 4}}>
                      <Link to ={`/patient/currenthealthcondition/${id}/${item.id}`}>
                        <p style={{border: "2px solid #80808073",textAlign: "center",padding: "10px",borderRadius: "10px"}}>{item.name} <br></br><span>{item.relation}</span></p>
                      </Link>
                   
                  </Col>
                ) })}
              </Row>

              <Col md={{ span: 12}}>
                  <Link to ={`/patient/otherprofile/${id}`}>
                    <p style={{border: "2px solid #80808073",textAlign: "center",padding: "10px",borderRadius: "10px"}}><span>{"Other"}</span></p>
                  </Link>
              </Col>
        </Container>
        </>
    )
}
