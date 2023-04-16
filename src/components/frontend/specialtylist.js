import React,{ useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import http from '../admin/include/http';
export default function Specialitylist() {

  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetchData();
  },[])


const fetchData = () => {
    http.get("/specialties/").then((response) => {
        setIsLoaded(true);
        console.log(response.data.data);
        setItems(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }


  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
  return(
  <div>
  <Row>
    <Col md={{ span: 12}}>
      <Card style={{padding:"10px",marginBottom:"5px"}}>
        <Row>
          <Col md={{ span: 10}}>
            <Link to={`/generalsearch`} style={{width:"100%"}}><span className="fas fa-search"></span> Search Name</Link>
          </Col>
          <Col md={{ span: 2}}>
            <Link to={`/advancesearch`} style={{width:"100%"}}><i class="fas fa-sliders-h" style={{float:"right"}}></i></Link>
          </Col>
        </Row>
      </Card>
    </Col>
  </Row>
   <Row>
    {items.map((item) => {
      return (
        <Col md={{ span: 2}}>
      	   <Card className="mb-2">
           <Link to={`/specializeddoctorlist/${item.name}`} style={{fontSize:"24px",}}>
              <Card.Body style={{ textAlign: "center"}}>
                  <img src={item.imageUrl} alt="" height="50px;" width="50px;"/>
                    <h6>
                      {item.name}
                    </h6>
                  </Card.Body>
              </Link> 
          </Card>
        </Col>
      ) })}
    </Row>
    </div>
  	)
  }
}