import React,{ useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate, useParams } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import http from '../admin/include/http';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
export default function Urgentspecializeddoctor() {

  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [message, setMessage] = useState("");

  const { id } = useParams()
  useEffect(() => {
    fetchData();
  },[])


const fetchData = () => {
    http.get(`/doctors/urgent/specialties`).then((response) => {
        setIsLoaded(true);
        if(response.data.data.length > 0){
          setItems(response.data.data);
        }else{
          setMessage("No Doctor Available Now");
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
  <Row style={{textAlign:"center"}} className="mt-5 mb-5">
        <Col md={{ span: 12}}>
            <h2>Our Services</h2>
            <h6>Doctors on demand</h6>
        </Col>
   </Row>
   <Row>
   <OwlCarousel className='owl-theme' loop margin={5}>
    {items.map((item) => {
      return (
      	   <Card className="mb-2">
              <div class='item'>
                <div className="card-header" style={{padding: '10px 10px 0px 10px',border: "1px solid #F1F0F2",borderRadius: "4px"}}>
                    <a href="https://livewellbd.5om/doctor-profile/">
                      <div className="row">
                        <div className="col-8 col-md-8 col-lg-8" style={{marginTop: '10%'}}>
                          <h6><b>{item.specialization.name}</b></h6>
                          <h6> BDT 75 </h6>
                          <h6> <i className="fas fa-circle" style={{color:"#3DD2B4"}}></i> Doctors Online</h6>
                        </div>
                        <div className="col-4 col-md-4 col-lg-4" style={{paddingRight: '0px'}}>
                          <img src={item.specialization.imageUrl}  className="img-fluid" height="120px" width="120px;" />
                        </div>
                      </div>
                      </a>
                  </div>
                </div>
          </Card>
      ) })}
      </OwlCarousel>
    </Row>
    </Container>
  	)
  }
}