import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from 'sweetalert';
import http from '../include/http';
import { useNavigate, useParams } from 'react-router-dom'
export default function Appointmentpayment() {
	const [paymentdetails, setPaymentdetails] = useState([])
	const { id } = useParams()
	const navigate = useNavigate();
	
	useEffect(()=>{
    fetchAppointmentfile()
  },[])
 
	const fetchAppointmentfile = () => {
    http.get(`/appointments/${id}`).then((response) => {
      setPaymentdetails(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }

	return(
		<div className="container">
		    <div className="card">
		    	<div className="card-header"> Payment </div>
			    <div className="card-body"  id="printablediv">
					<Row>
						<h6>Payment Amount: {paymentdetails.paymentAmount}</h6>
						<h6>Payment Status: {paymentdetails.paymentStatus}</h6>
					</Row>    
		    	</div>
			</div>
		</div>
	)
}