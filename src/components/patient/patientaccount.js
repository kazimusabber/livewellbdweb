import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Linkbutton from "../common/linkbutton";
import Takepicture from "../common/takepicture";
import http from '../admin/include/http'
import { format } from 'date-fns'
export default function Notificationandchat() {
    const [items, setItems] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetchData();
    },[])


    const fetchData = () => {
        http.get(`users/patient-profile/632f6dd01f36e7d112b41214`).then((response) => {   
            setItems(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }

   
    

    return(
        <>
        <Container>
            <Row style={{ marginTop: 20}}>
                <Col md={{ span: 4}}>
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link" id="pills-home-tab" data-toggle="pill" href="#account-information" role="tab" aria-controls="pills-home" style={{borderBottom:"1px solid gray",color:"#000000",borderRadius:"0px 0px 0px 0px"}}>  
                                <span>Account Information </span><span><FontAwesomeIcon icon="fas fa-chevron-right"  style={{float:"right",marginTop:"5px",marginLeft:"5px"}}/></span>
                            </a>  
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" id="pills-home-tab" data-toggle="pill" href="#personal-information" role="tab" aria-controls="pills-home" style={{borderBottom:"1px solid gray",color:"#000000",borderRadius:"0px 0px 0px 0px"}}>  
                                <span>Personal Information</span><span><FontAwesomeIcon icon="fas fa-chevron-right"  style={{float:"right",marginTop:"5px",marginLeft:"5px"}}/></span>
                            </a>  
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" id="pills-home-tab" data-toggle="pill" href="#change-pin" role="tab" aria-controls="pills-home" style={{borderBottom:"1px solid gray",color:"#000000",borderRadius:"0px 0px 0px 0px"}}>  
                                <span>Change PIN</span><span><FontAwesomeIcon icon="fas fa-chevron-right"  style={{float:"right",marginTop:"5px",marginLeft:"5px"}}/></span>
                            </a>  
                        </li>
                    </ul>
                </Col>
                
                <Col md={{ span: 7}}>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="account-information" role="tabpanel">
                            <Takepicture></Takepicture>  
                            <div className="form-group">
                                <label for="currentpincode">First Name</label>
                                <input type="text" className="form-control form-control-sm" placeholder="Enter First Name" value={items.user.firstName ? items.user.firstName : " " }/>
                            </div>
                            <div className="form-group">
                                <label for="newpincode">Last Name</label>
                                <input type="text" className="form-control form-control-sm" placeholder="Enter Last Name"  value={items.user.lastName ? items.user.lastName : " " }/>
                            </div>
                            <div className="form-group">
                                <label for="newpincode">Phone Number</label>
                                <input type="text" className="form-control form-control-sm" placeholder="Enter Phone Number" value={items.user.phone ?  items.user.phone : " " }/>
                            </div>
                            <div className="form-group">
                                <label for="newpincode">Email </label>
                                <input type="email" className="form-control form-control-sm" placeholder="Enter Email" value={items.user.email ?  items.user.email : " " }/>
                            </div>
                            <div className="form-group">
                                <label for="confirmpincode">City</label>
                                <input type="text" className="form-control form-control-sm" placeholder="Enter City" value=" "/>
                            </div>
                        </div>
                        <div className="tab-pane fade show" id="personal-information" role="tabpanel">
                            <div className="form-group">
                                <label for="currentpincode">Date of Birth</label>
                                <input type="date" className="form-control form-control-sm" placeholder="Date of birth" value={items.user.dob ?  items.user.dob : " " }/>
                            </div>
                            <div className="form-group">
                                <label for="gender">Gender</label>
                                <select className="form-control" value={items.user.gender ?  items.user.gender : " " }>
                                    <option value="">Male</option>
                                    <option value="">Female</option>
                                    <option value="">Other</option>
                                    
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="height">Height</label>
                                <input type="text" className="form-control form-control-sm" placeholder="Height" />
                            </div>
                            <div className="form-group">
                                <label for="wieght">Weight</label>
                                <input type="text" className="form-control form-control-sm" placeholder="Weight" />
                            </div>
                            <div className="form-group">
                                <label for="confirmpincode">Blood Group</label>
                                <input type="text" className="form-control form-control-sm" placeholder="Blood Group" />
                            </div>
                        </div>
                        <div className="tab-pane fade show" id="change-pin" role="tabpanel">
                            <div className="form-group">
                                <label for="currentpincode">Current PIN Code</label>
                                <input type="password" className="form-control form-control-sm" placeholder="Enter current PIN code" autocomplete="on"/>
                            </div>
                            <div className="form-group">
                                <label for="newpincode">New PIN Code</label>
                                <input type="password" className="form-control form-control-sm" placeholder="Enter new PIN code" autocomplete="on" />
                            </div>
                            <div className="form-group">
                                <label for="confirmpincode">Confirm PIN Code</label>
                                <input type="password" className="form-control form-control-sm" placeholder="Re-enter new PIN code" autocomplete="on"/>
                            </div>
                        </div>
                    </div> 
                </Col>      
               
            </Row>
           
        </Container>
        </>
    )
}
