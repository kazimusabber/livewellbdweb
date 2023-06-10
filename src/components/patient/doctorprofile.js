import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import http from '../admin/include/http';
import { Tab, Tabs } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
export default function Doctorprofile() {

  const [items, setItems] = useState([]);
  const [tabKey, initTabKey] = useState('one')
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
                    <div className='item'>
                      <div className="card-header" style={{padding: '10px 10px 0px 10px',border: "1px solid #F1F0F2",borderRadius: "4px"}}>
                          <Link to={`/patient/selectpatient/${items.id}`}>
                            <div className="row">
                              <div className="col-8 col-md-8 col-lg-8" style={{marginTop: '5%'}}>
                                <h5 className="mt-3"><b>{items.name} </b></h5>
                                <h5 className="mt-3"><b>{items.designation} </b></h5>
                                <h6  style={{marginBottom: '5%'}}> {items.specialization}</h6>
                                <h6> {items.specialization}</h6>
                                 <p>
                                  { items.qualifications?.map((e) =>( 
                                        <span>{e.degree}-{e.institute}</span>
                                    )) }
                                    </p>
                                <Link to={`/patient/selectpatient/${items.id}`}> <button className="btn btn-primary"><i className="fas fa-video"></i> Talk to Doctor</button></Link>
                              </div>
                              <div className="col-4 col-md-4 col-lg-4" style={{paddingRight: '0px'}}>
                                <img className ="img-thumbnail" src={items.avatar} height="200px" width="200px;" />
                              </div>
                              
                            </div>
                            
                          </Link>
                      </div>
                  </div>
                </Card>
                <div className="row" style={{minHeight: '125px',backgroundColor: '#ffffff'}}>
                     <div className = "col-md-12">
                        <Tabs activeKey={tabKey} onSelect={(e) => initTabKey(e)}>
                          <Tab eventKey="one" title="About">
                             <p>
                                About : {items.about}
                            </p>

                            <p>
                                Qualification : {items.qualifications?.map((e) => ( 
                                            <span>{e.degree} - {e.institute} , </span>
                                        )) }              
                            </p>

                           

                            <p>
                                Service : {items.services?.map((e) => ( 
                                            <span>{e} , </span>
                                        )) }              
                            </p>
                          </Tab>
                          <Tab eventKey="two" title="Training & Experiance">
                            <p>
                                Experiance : {items.experiences?.map((e) => ( 
                                            <span>{e} , </span>
                                        )) }              
                            </p>
                            <p>
                                Training : {items.trainings?.map((e) => ( 
                                            <span>{e.title} - {e.field} - {e.institute} , </span>
                                        )) }              
                            </p>
                          </Tab>

                          <Tab eventKey="three" title="Schedule">
                             
                               <h6>Saturday 
                               
                                  <ul>
                                    {items.schedule?.sunday.map((time) => ( 

                                       

                                        <li><span>{time.from} - {time.to}</span></li>
                                    )) } 
                                  </ul>
                              </h6>
                              <h6>Sunday 
                               
                                  <ul>
                                    {items.schedule?.sunday.map((time) => ( 

                                       

                                        <li><span>{time.from} - {time.to}</span></li>
                                    )) } 
                                  </ul>
                              </h6>
                              <h6>Monday 
                                
                                  <ul>
                                    {items.schedule?.monday.map((time) => ( 

                                       

                                        <li><span>{time.from} - {time.to}</span></li>
                                    )) } 
                                  </ul>
                              </h6>
                              <h6>Tuesday 
                                
                                  <ul>
                                    {items.schedule?.tuesday.map((time) => ( 
                                        <li><span>{time.from} - {time.to}</span></li>
                                    )) } 
                                  </ul>
                              </h6>
                              <h6>Wednesday 
                               
                                  <ul>
                                    {items.schedule?.wednesday.map((time) => ( 

                                       

                                        <li><span>{time.from} - {time.to}</span></li>
                                    )) } 
                                  </ul>
                              </h6>
                              <h6>Thursday 
                               
                                  <ul>
                                    {items.schedule?.thursday.map((time) => ( 

                                       

                                        <li><span>{time.from} - {time.to}</span></li>
                                    )) } 
                                  </ul>
                              </h6>
                              <h6>Friday 
                               
                                  <ul>
                                    {items.schedule?.friday.map((time) => ( 

                                       

                                        <li><span>{time.from} - {time.to}</span></li>
                                    )) } 
                                  </ul>
                              </h6>
                             
                          </Tab>
                          <Tab eventKey="four" title="Fees">
                            <h6>
                                    {items.fees?.map((e) => ( 
                                        <>
                                          <p> First Consultation - {e.firstConsultation.amount}</p>
                                          <p> Old Patient - {e.oldPatient.amount}</p>
                                          <p> FollowUp - {e.followUp.amount}</p>
                                          </>
                                        )) }              
                            </h6>
                            
                          </Tab>
                          
                        </Tabs>

                     </div>   
                </div>
              </Col>
          </Row>   
        </Container>
        
    )
}
