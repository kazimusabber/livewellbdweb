import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from 'sweetalert';
import http from '../../include/http';
import { useNavigate, useParams } from 'react-router-dom'
export default function Edit() {
	
	const [complaintitle, setComplaintitle] = useState("")
	
	const { id } = useParams()
	const navigate = useNavigate();
	
	useEffect(()=>{
    	fetchComplain()
  	},[])
 
	const fetchComplain = () => {


    http.get(`search/complains?q=${id}`).then((response) => {
      setComplaintitle(response.data.data[0].title);
    })
    .catch((error) => {
      console.log(error);
    })
  }

	
	let handleSubmit = async (e) => {
	  e.preventDefault();  
	  http.patch(`/search/complains/`, {
	    	title:complaintitle
	    }).then((response) => {
	    if (response.data) {
    		swal("Data Updated Successfully");
	      	navigate("/admin/complain");
      } 
      else
       	{
         	swal(response.message);
      	}
	  	})
	  	.catch((error) => {
	    	console.log(error);
		})  
	}

	return(
		<div className="container">
		    <div className="card">
		    	<div className="card-header"> Edit Medicine</div>
			    <div className="card-body">
			    	<Row>
						<Col md={{ span: 10, offset: 1 }}>
						  <form  onSubmit={handleSubmit}>
						  	<div className="form-group mt-3">
						    	<label>Title</label>
						    	<input type="text" className="form-control" required=""  value={complaintitle} onChange={(e) => setComplaintitle(e.target.value)} placeholder="Name"/>
						  	</div>
						</form>
					</Col>
			    </Row>
		    </div>
			</div>
		</div>
	)
}