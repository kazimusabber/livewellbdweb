import React,{ useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OwlCarousel from 'react-owl-carousel';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
export default function urgentdoctorslider() {

return(

        <>
     <Row style={{textAlign:"center"}} className="mt-5 mb-5">
            <Col md={{ span: 12}}>
                <h2>Our Services </h2>
                <h6>Doctors on demand</h6>
            </Col>
       </Row>
        <OwlCarousel className='owl-theme' loop margin={10}>
            <div class='item'>
                <div className="card-header" style={{padding: '0px 10px 0px 10px',border: "1px solid #F1F0F2",borderRadius: "4px"}}>
                    <a href="">
                      <div className="row">
                        <div className="col-6 col-md-6 col-lg-6" style={{marginTop: '2%'}}>
                          <h6 className="mt-3"><b>Gynocology Doctors</b></h6>
                          <h6> </h6>
                          <p> < i className="fas fa-star"> 4.2(251) </i></p>
                        </div>
                        <div className="col-6 col-md-6 col-lg-6" style={{paddingRight: '0px'}}>
                          <img src="../specialty/gynocology.png"  className="img-fluid" height="240px" width="240px;" />
                        </div>
                        
                      </div>
                      <div className="row" style={{minHeight: '125px',backgroundColor: '#f8f9fb'}}>
                        <div className="col-6 col-md-6 col-lg-6">
                          <p className="mt-3"><i className="fas fa-circle" style={{color:"#3DD2B4"}}></i> &nbsp;&nbsp;&nbsp; AVAILABLE NOW</p>
                          <h6>
                            Video Consultation
                          </h6>
                          <h6>
                            &#x09F3; 200
                          </h6>
                        </div>
                        <div className="col-6 col-md-6 col-lg-6">
                          <button class="btn btn-primary primarybutton mt-5"><i class="fas fa-video"></i>Call Now</button>
                        </div>
                      </div>
                    </a>
                  </div>
            </div>
            <div class='item'>
                <div className="card-header" style={{padding: '0px 10px 0px 10px',border: "1px solid #F1F0F2",borderRadius: "4px"}}>
                    <a href="">
                      <div className="row">
                        <div className="col-6 col-md-6 col-lg-6" style={{marginTop: '2%'}}>
                          <h6 className="mt-3"><b>Pediatrics Doctors</b></h6>
                          <h6> </h6>
                          <p> < i className="fas fa-star"> 4.2(251) </i></p>
                        </div>
                        <div className="col-6 col-md-6 col-lg-6" style={{paddingRight: '0px'}}>
                          <img src="../specialty/pediatricsbackground.png"  className="img-fluid" height="240px" width="240px;" />
                        </div>
                        
                      </div>
                      <div className="row" style={{minHeight: '125px',backgroundColor: '#f8f9fb'}}>
                        <div className="col-6 col-md-6 col-lg-6">
                          <p className="mt-3"><i className="fas fa-circle" style={{color:"#3DD2B4"}}></i> &nbsp;&nbsp;&nbsp; AVAILABLE NOW</p>
                          <h6>
                            Video Consultation
                          </h6>
                          <h6>
                            &#x09F3; 200
                          </h6>
                        </div>
                        <div className="col-6 col-md-6 col-lg-6">
                          <button class="btn btn-primary primarybutton mt-5"><i class="fas fa-video"></i>Call Now</button>
                        </div>
                      </div>
                    </a>
                  </div>
            </div>
            <div class='item'>
                <div className="card-header" style={{padding: '0px 10px 0px 10px',border: "1px solid #F1F0F2",borderRadius: "4px"}}>
                    <a href="">
                      <div className="row">
                        <div className="col-7 col-md-7 col-lg-7" style={{marginTop: '2%'}}>
                          <h6 className="mt-3"><b>Skin & VD</b></h6>
                          <h6> </h6>
                          <p> < i className="fas fa-star"> 4.2(251) </i></p>
                        </div>
                        <div className="col-5 col-md-5 col-lg-5" style={{paddingRight: '0px'}}>
                          <img src="../specialty/skinandvd.png"  className="img-fluid" height="240px" width="240px;" />
                        </div>
                        
                      </div>
                      <div className="row" style={{minHeight: '125px',backgroundColor: '#f8f9fb'}}>
                        <div className="col-6 col-md-6 col-lg-6">
                          <p className="mt-3"><i className="fas fa-circle" style={{color:"#3DD2B4"}}></i> &nbsp;&nbsp;&nbsp; AVAILABLE NOW</p>
                          <h6>
                            Video Consultation
                          </h6>
                          <h6>
                            &#x09F3; 200
                          </h6>
                        </div>
                        <div className="col-6 col-md-6 col-lg-6">
                          <button class="btn btn-primary primarybutton mt-5"><i class="fas fa-video"></i>Call Now</button>
                        </div>
                      </div>
                    </a>
                  </div>
            </div>
        </OwlCarousel>
        </>
  )
}