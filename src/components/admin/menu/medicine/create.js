import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from 'sweetalert';
import http from '../../include/http';
import { useNavigate } from "react-router-dom";
export default function Create() {
	const navigate = useNavigate();
	const [medicinename, setMedicinename] = useState("")
	const [brand, setBrand] = useState("")
	const [strength, setStrength] = useState("")
	const [category, setCategory] = useState("")
	const [manufacturer, setManufacturer] = useState("")
	const [imageurl, setImageurl] = useState("")
	const [type, setType] = useState("")
	
	let handleSubmit = async (e) => {
	  e.preventDefault();
	    http.post('/search/medicine', {
	    	name:medicinename,brand:brand,strength:strength,category:category,imageUrl:imageurl,type:type,manufacturer:manufacturer
	    }).then((response) => {
	    if (response.data) {
    		swal("Data Added Successfully");
	      	navigate("/admin/medicine");
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
		    <div className="card-header"> Add Role</div>
		    <div className="card-body">
		    	<Row>
					<Col md={{ span: 10, offset: 1 }}>
					  <form  onSubmit={handleSubmit}>
						  	<div className="form-group mt-3">
						    	<label>Name</label>
						    	<input type="text" className="form-control" required=""  onChange={(e) => setMedicinename(e.target.value)} placeholder="Name"/>
						  	</div>
						  	<div className="form-group mt-3">
						    	<label>Manufacturer</label>
						    	<input type="text" className="form-control" required=""  onChange={(e) => setManufacturer(e.target.value)} placeholder="Image Url"/>
						  	</div>	
						  	<div className="form-group mt-3">
						    	<label>Brand</label>
						    	<input type="text" className="form-control" required=""  onChange={(e) => setBrand(e.target.value)} placeholder="Brand"/>
						  	</div>


						  	<div className="form-group mt-3">
						    	<label>Strength</label>
						    	<input type="text" className="form-control" required=""  onChange={(e) => setStrength(e.target.value)} placeholder="Strength"/>
						  	</div>

						  	<div className="form-group mt-3">
						    	<label>Category</label>
						    	<input type="text" className="form-control" required=""  onChange={(e) => setCategory(e.target.value)} placeholder="Category"/>
						  	</div>

						  	<div className="form-group mt-3">
						    	<label>Image URL</label>
						    	<input type="text" className="form-control" required=""  onChange={(e) => setImageurl(e.target.value)} placeholder="Image Url"/>
						  	</div>

						  	<div className="form-group mt-3">
						    	<label>Type</label>
						    	<input type="text" className="form-control" required=""  onChange={(e) => setType(e.target.value)} placeholder="Type"/>
						  	</div>
							<div>
						    	<button type="submit" className="btn btn-primary"> Submit </button>
						  	</div>
						</form>
					</Col>
			    </Row>
			    </div>
			</div>
		</div>
 	)
}