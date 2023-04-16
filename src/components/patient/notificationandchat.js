
import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import http from '../admin/include/http';
export default function Notificationandchat() {

    const [items, setItems] = useState([]);
    const [message, setMessage] = useState("");
    useEffect(() => {
        fetchData();
    },[])


    const fetchData = () => {
        http.get(`notifications`).then((response) => {   

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
                <Col md={{ span: 12}}>
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                      <li class="nav-item">
                        <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home"><i className="far fa-comment-alt"></i></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile"><i class="fas fa-bell"></i></a>
                      </li>
                      
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                      <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">No Record Found</div>
                      <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                      <Row>
                           <Col md={{ span: 3}}> 
                              <img src="/logo512.png" alt="nothing" height="100px" width="100px"/>
                           </Col>
                           <Col md={{ span: 8}}> 
                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h6>
                                <b> Date Time : 12 June 2022 10:05 AM </b>
                           </Col>
                      </Row>
                      <Row>
                           <Col md={{ span: 3}}> 
                              <img src="/logo512.png" alt="nothing" height="100px" width="100px"/>
                           </Col>
                           <Col md={{ span: 8}}> 
                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h6>
                                <b> Date Time : 18 September 2022 10:05 AM </b>
                           </Col>
                      </Row>
                      <Row>
                           <Col md={{ span: 3}}> 
                                <img src="/logo512.png" alt="nothing" height="100px" width="100px"/>
                                
                           </Col>
                           <Col md={{ span: 8}}> 
                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h6>
                                <b> Date Time : 07 September 2022 10:05 PM </b>
                           </Col>
                      </Row>
                        

                      </div>
                      
                    </div>
                </Col>
            </Row>
           
        </Container>
        </>
    )
}
