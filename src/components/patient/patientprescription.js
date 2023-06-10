
import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import http from '../admin/include/http';
import { useParams,Link } from 'react-router-dom'
export default function Notificationandchat() {

    const [items, setItems] = useState([]);
    const [message, setMessage] = useState("");
    const { id } = useParams()
    useEffect(() => {
        fetchData();
    },[])


    const fetchData = () => {
        http.get(`prescriptions?patientProfile=${id}`).then((response) => {   

            console.log(response.data.data);
            setItems(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }


    return(
        <>
        <Container>
            <Row>
                  
                 {items?.map((item) => { 
                  
                  return (
                    <Col md={{ span: 4}} > 
                    <Link to={`/patient/prescriptionbyid/${item.appointmentId.id}`}>
                 
                          <div className="card"   style={{marginBottom:"10px;"}}>
                            
                              <div className="card-body">
                                <h6> Date : {item.appointmentId.date}</h6>
                                <h6> Doctor : {item.doctor.name}</h6>
                                <h6> {item.doctor.specialization}</h6>
                                <p>{item.doctor.designation} </p>
                              </div>
                          
                        </div>
                   </Link> 
                  </Col>

                  )
                  
                    })}
                
            </Row>
           
        </Container>
        </>
    )
}
