
import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import http from '../admin/include/http';
export default function Wallet() {

    const [items, setItems] = useState([]);
     const [cashout, setCashout] = useState([]);
    useEffect(() => {
        fetchData();
        fetchCashout();
    },[])


    const fetchData = () => {
        http.get(`payments`).then((response) => {   

            console.log(response.data.data);
            setItems(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const fetchCashout = () => {
        http.get(`payments/cash-out/all?page=1&limit=10`).then((response) => {
            setCashout(response.data.data);

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
                    <Card className="mb-2">
                      <Card.Body style={{padding:"10px 0px 0px 40px",background:"rgb(179 179 179)",height:"200px"}}>
                        <h3 style={{marginTop:"30px"}}>Current Balance</h3>
                        <h3><b style={{fontSize:"40px"}}>&#2547;</b> {items.balance}</h3>
                      </Card.Body>
                    </Card>

                </Col>
                <Col md={{ span: 4}}>
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link" id="pills-home-tab" data-toggle="pill" href="#paydetails" role="tab" aria-controls="pills-home" style={{borderBottom:"1px solid gray",color:"#000000",borderRadius:"0px 0px 0px 0px"}}>  
                                <span>&#2547; View Pay Details</span><span><FontAwesomeIcon icon="fas fa-chevron-right"  style={{float:"right",marginTop:"5px",marginLeft:"5px"}}/></span>
                            </a>  
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-home-tab" data-toggle="pill" href="#cashout" role="tab" aria-controls="pills-home" style={{borderBottom:"1px solid gray",color:"#000000",borderRadius:"0px 0px 0px 0px"}}>  
                                <span>&#2547; Cash-Out</span><span><FontAwesomeIcon icon="fas fa-chevron-right"  style={{float:"right",marginTop:"5px",marginLeft:"5px"}}/></span>
                            </a>  
                        </li>
                    </ul>
                </Col>
                <Col md={{ span: 12}}>
                   
                      
                    {cashout.map((item) => {
                        return (
                            <>
                            <p key={item}><b>{item.accountHead} - &#2547;{item.totalAmount} {item.debitFrom.phone}</b></p>
                                <p> {item.createdAt} </p> </>
                            )
                        } 
                   )}
                    

                </Col>
            </Row>
           
        </Container>
        </>
    )
}
