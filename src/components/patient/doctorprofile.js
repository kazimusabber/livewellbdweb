import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import http from '../admin/include/http';
import { useNavigate, useParams } from 'react-router-dom'
export default function Doctorprofile() {


  const [items, setItems] = useState([]);
 

  const { id } = useParams()
  useEffect(() => {
    fetchData();
  },[])

  const fetchData = () => {
    http.get(`doctors/${id}`).then((response) => {
         console.log(response.data.data); 
          setItems(response.data.data);
        
    })
    .catch((error) => {
      console.log(error);
    })
  }
 
    return(
       
        <Container>
            <Row>
    
      
        <Col md={{ span: 12}}>
           <Card className="mb-2">
              <div class='item'>
                <div className="card-header" style={{padding: '10px 10px 0px 10px',border: "1px solid #F1F0F2",borderRadius: "4px"}}>
                    <Link to={`/patient/selectpatient/${items.id}`}>
                      <div className="row">
                        <div className="col-8 col-md-8 col-lg-8" style={{marginTop: '5%'}}>
                          <h5 className="mt-3"><b>{items.name} </b></h5>
                          <h5 className="mt-3"><b>{items.designation} </b></h5>
                          <h6  style={{marginBottom: '5%'}}> {items.specialization}</h6>
                          <Link to={`patient/selectpatient/${items.id}`}> <button className="btn btn-primary"><i className="fas fa-video"></i> Talk to Doctor</button></Link>
                        </div>
                        <div className="col-4 col-md-4 col-lg-4" style={{paddingRight: '0px'}}>
                          <img src={items.avatar}  className="img-fluid" height="200px" width="200px;" />
                        </div>
                        
                      </div>
                      <div className="row" style={{minHeight: '125px',backgroundColor: '#ffffff'}}>
                        
                      </div>
                    </Link>
                </div>
            </div>
          </Card>
        </Col>
      
    </Row>
           
        </Container>
        
    )
}
