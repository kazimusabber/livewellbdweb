import React,{ useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OwlCarousel from 'react-owl-carousel';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
export default function Onlinedoctorslider() {

return(

        <>
	   <Row style={{textAlign:"center"}} className="mt-5 mb-5">
            <Col md={{ span: 12}}>
                <h2>Doctors Online Now </h2>
                <h6>Doctors you can immediately consult</h6>
            </Col>
       </Row>
        <OwlCarousel className='owl-theme' loop margin={10}>
            <div class='item'>
                <div className="card-header" style={{padding: '10px 10px 0px 10px',border: "1px solid #F1F0F2",borderRadius: "4px"}}>
                    <a href="https://livewellbd.com/doctor-profile/51">
                      <div className="row">
                        <div className="col-6 col-md-6 col-lg-6" style={{marginTop: '10%'}}>
                          <h5 className="mt-3"><b>Dr. Danial Haque Tanvir </b></h5>
                          <h6> General physician </h6>
                          <p> < i className="fas fa-star"> 4.2(251) </i></p>
                        </div>
                        <div className="col-6 col-md-6 col-lg-6" style={{paddingRight: '0px'}}>
                          <img src="../doctorimage/demodoctor.png"  className="img-fluid" height="240px" width="240px;" />
                        </div>
                        
                      </div>
                      <div className="row" style={{minHeight: '125px',backgroundColor: '#f8f9fb'}}>
                        <div className="col-12 col-md-12 col-lg-12">
                        <h6 className="mt-3"><i className="fas fa-circle" style={{color:"#3DD2B4"}}></i> &nbsp;&nbsp;&nbsp; AVAILABLE NOW</h6>
                          <h6>
                            <span>
                              MBBS
                            </span>
                          </h6>
                          <h6>
                            <b>Training : </b>
                            <span>PGT Medicine</span>
                            ,   <span>FCGP Family Medicine</span>
                            ,   <span>CCD Diabetology</span>
                            ,   <span>C-Card Cardiology</span>
                          </h6>
                        </div>
                      </div>
                    </a>
                  </div>
            </div>
            <div class='item'>
                <div className="card-header" style={{padding: '10px 10px 0px 10px',border: "1px solid #F1F0F2",borderRadius: "4px"}}>
                    <a href="https://livewellbd.com/doctor-profile/51">
                      <div className="row">
                        <div className="col-6 col-md-6 col-lg-6" style={{marginTop: '10%'}}>
                          <h5 className="mt-3"><b>Dr. Danial Haque Tanvir </b></h5>
                          <h6> General physician </h6>
                          <p> < i className="fas fa-star"> 4.2(251) </i></p>
                        </div>
                        <div className="col-6 col-md-6 col-lg-6" style={{paddingRight: '0px'}}>
                          <img src="../doctorimage/demodoctor.png"  className="img-fluid" height="240px" width="240px;" />
                        </div>
                        
                      </div>
                      <div className="row" style={{minHeight: '125px',backgroundColor: '#f8f9fb'}}>
                        <div className="col-12 col-md-12 col-lg-12">
                        <h6 className="mt-3"><i className="fas fa-circle" style={{color:"#3DD2B4"}}></i> &nbsp;&nbsp;&nbsp; AVAILABLE NOW</h6>
                          <h6>
                            <span>
                              MBBS
                            </span>
                          </h6>
                          <h6>
                            <b>Training : </b>
                            <span>PGT Medicine</span>
                            ,   <span>FCGP Family Medicine</span>
                            ,   <span>CCD Diabetology</span>
                            ,   <span>C-Card Cardiology</span>
                          </h6>
                        </div>
                      </div>
                    </a>
                  </div>
            </div>
            <div class='item'>
                <div className="card-header" style={{padding: '10px 10px 0px 10px',border: "1px solid #F1F0F2",borderRadius: "4px"}}>
                    <a href="https://livewellbd.com/doctor-profile/51">
                      <div className="row">
                        <div className="col-6 col-md-6 col-lg-6" style={{marginTop: '10%'}}>
                          <h5 className="mt-3"><b>Dr. Danial Haque Tanvir </b></h5>
                          <h6> General physician </h6>
                          <p> < i className="fas fa-star"> 4.2(251) </i></p>
                        </div>
                        <div className="col-6 col-md-6 col-lg-6" style={{paddingRight: '0px'}}>
                          <img src="../doctorimage/demodoctor.png"  className="img-fluid" height="240px" width="240px;" />
                        </div>
                        
                      </div>
                      <div className="row" style={{minHeight: '125px',backgroundColor: '#f8f9fb'}}>
                        <div className="col-12 col-md-12 col-lg-12">
                        <h6 className="mt-3"><i className="fas fa-circle" style={{color:"#3DD2B4"}}></i> &nbsp;&nbsp;&nbsp; AVAILABLE NOW</h6>
                          <h6>
                            <span>
                              MBBS
                            </span>
                          </h6>
                          <h6>
                            <b>Training : </b>
                            <span>PGT Medicine</span>
                            ,   <span>FCGP Family Medicine</span>
                            ,   <span>CCD Diabetology</span>
                            ,   <span>C-Card Cardiology</span>
                          </h6>
                        </div>
                      </div>
                    </a>
                  </div>
            </div>
            <div class='item'>
                <div className="card-header" style={{padding: '10px 10px 0px 10px',border: "1px solid #F1F0F2",borderRadius: "4px"}}>
                    <a href="https://livewellbd.com/doctor-profile/51">
                      <div className="row">
                        <div className="col-6 col-md-6 col-lg-6" style={{marginTop: '10%'}}>
                          <h5 className="mt-3"><b>Dr. Danial Haque Tanvir </b></h5>
                          <h6> General physician </h6>
                          <p> < i className="fas fa-star"> 4.2(251) </i></p>
                        </div>
                        <div className="col-6 col-md-6 col-lg-6" style={{paddingRight: '0px'}}>
                          <img src="../doctorimage/demodoctor.png"  className="img-fluid" height="240px" width="240px;" />
                        </div>
                        
                      </div>
                      <div className="row" style={{minHeight: '125px',backgroundColor: '#f8f9fb'}}>
                        <div className="col-12 col-md-12 col-lg-12">
                        <h6 className="mt-3"><i className="fas fa-circle" style={{color:"#3DD2B4"}}></i> &nbsp;&nbsp;&nbsp; AVAILABLE NOW</h6>
                          <h6>
                            <span>
                              MBBS
                            </span>
                          </h6>
                          <h6>
                            <b>Training : </b>
                            <span>PGT Medicine</span>
                            ,   <span>FCGP Family Medicine</span>
                            ,   <span>CCD Diabetology</span>
                            ,   <span>C-Card Cardiology</span>
                          </h6>
                        </div>
                      </div>
                    </a>
                  </div>
            </div>
        </OwlCarousel>
        </>
	)
}