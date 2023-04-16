import React,{ useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate, useParams } from 'react-router-dom'
import http from '../admin/include/http';
export default function Specializeddoctorlist() {

  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [message, setMessage] = useState("");

  const { id } = useParams()
  useEffect(() => {
    fetchData();
  },[])


const fetchData = () => {
    http.get(`/doctors?specialization=${id}`).then((response) => {
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


  if(message){
      return <div className="text-center"><h3>{message} </h3></div>;
  }else{
  return(
  <Container>
   <Row>
    {items.map((item) => {
      return (
        <Col md={{ span: 4}}>
      	   <Card className="mb-2">
              <div class='item'>
                <div className="card-header" style={{padding: '10px 10px 0px 10px',border: "1px solid #F1F0F2",borderRadius: "4px"}}>
                    <a href="https://livewellbd.com/doctor-profile/51">
                      <div className="row">
                        <div className="col-6 col-md-6 col-lg-6" style={{marginTop: '10%'}}>
                          <h5 className="mt-3"><b>{item.name} </b></h5>
                          <h6> {item.specialization}</h6>
                          <p> < i className="fas fa-star"> {parseFloat(item.score.toFixed(2))} </i></p>
                        </div>
                        <div className="col-6 col-md-6 col-lg-6" style={{paddingRight: '0px'}}>
                          <img src="../doctorimage/demodoctor.png"  className="img-fluid" height="240px" width="240px;" />
                        </div>
                        
                      </div>
                      <div className="row" style={{minHeight: '125px',backgroundColor: '#f8f9fb'}}>
                        <div className="col-12 col-md-12 col-lg-12">
                        { item.isOnline == true ? (
                            <h6 className="mt-3"><i className="fas fa-circle" style={{color:"#3DD2B4"}}></i> &nbsp;&nbsp;&nbsp; AVAILABLE NOW</h6>
                        ) : ( 
                          <h6 className="mt-3"><i className="fas fa-circle" style={{color:"rgb(210 61 61)"}}></i> &nbsp;&nbsp;&nbsp; NOW AVAILABLE</h6>

                         )}  
                        </div>
                      </div>
                    </a>
                </div>
            </div>
          </Card>
        </Col>
      ) })}
    </Row>
    </Container>
  	)
  }
}