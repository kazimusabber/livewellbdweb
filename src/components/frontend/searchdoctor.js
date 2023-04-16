import React,{ useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import http from '../admin/include/http'
import { useLocation } from "react-router-dom"

export default function Specializeddoctorlist() {



  const [items, setItems] = useState([]);
  
  const location = useLocation();
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchData();
  })


const fetchData = () => {
    if(location.state.searchval){
      http.get(`doctors/suggestions?q=${location.state.searchval}`).then((response) => {
          if(response.data.data.length > 0){
            setItems(response.data.data);
          }else{
            setMessage("No Doctor Found in this name");
          }
      })
      .catch((error) => {
        console.log(error);
      })
    }

    if(location.state.specialtyval){
      http.get(`/doctors?specialization=${location.state.specialtyval}`).then((response) => {
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

    if(location.state.advancesearch){

      let searchurl = "";
      if(location.state.gender && location.state.isOnline){
        searchurl = "/doctors?"+"gender="+location.state.gender+"&isOnline="+location.state.isOnline+"&feeRange="+location.state.feeRange;
      }
     
      http.get(searchurl).then((response) => {
          console.log(response.data.data);
          if(response.data.data.length > 0){
            setItems(response.data.data);
          }else{
            setMessage("No Doctor Found !");
          }
      })
      .catch((error) => {
        console.log(error);
      })
    }
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
              <div className='item'>
                <div className="card-header" style={{padding: '10px 10px 0px 10px',border: "1px solid #F1F0F2",borderRadius: "4px"}}>
                    <a href="https://livewellbd.com/doctor-profile/51">
                      <div className="row">
                        <div className="col-6 col-md-6 col-lg-6" style={{marginTop: '10%'}}>
                          <h5 className="mt-3"><b>{item.name} </b></h5>
                          <h6> {item.specialization}</h6>
                          <p> < i className="fas fa-star">  </i></p>
                        </div>
                        <div className="col-6 col-md-6 col-lg-6" style={{paddingRight: '0px'}}>
                          <img src="../doctorimage/demodoctor.png"  className="img-fluid" height="240px" width="240px;" alt=""/>
                        </div>
                        
                      </div>
                      <div className="row" style={{minHeight: '125px',backgroundColor: '#f8f9fb'}}>
                        <div className="col-12 col-md-12 col-lg-12">
                        { item.isOnline === true ? (
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