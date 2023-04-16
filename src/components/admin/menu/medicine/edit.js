import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from 'sweetalert';
import http from '../../include/http';
import { useNavigate, useParams } from 'react-router-dom'
export default function Edit() {
	
	const [medicinename, setMedicinename] = useState("")
	const [brand, setBrand] = useState("")
	const [strength, setStrength] = useState("")
	const [category, setCategory] = useState("")
	const [manufacturer, setManufacturer] = useState("")
	const [imageurl, setImageurl] = useState("")
	const [type, setType] = useState("")
	const [medicineid, setMedicineid] = useState()
	const { id } = useParams()
	const navigate = useNavigate();
	
	useEffect(()=>{
    fetchMedicine()
  },[])
 
	const fetchMedicine = () => {


    http.get(`search/medicine?q=${id}`).then((response) => {
      setMedicinename(response.data.data[0].name);
      setMedicineid(response.data.data[0]._id);
      setBrand(response.data.data[0].brand);
      setStrength(response.data.data[0].strength);
      setCategory(response.data.data[0].category);
      setManufacturer(response.data.data[0].manufacturer);
      setImageurl(response.data.data[0].imageurl);
      setType(response.data.data[0].type);
    })
    .catch((error) => {
      console.log(error);
    })
  }

	
	let handleSubmit = async (e) => {
	  e.preventDefault();  
	  http.patch(`/search/medicine/${medicineid}`, {
	    	name:medicinename,brand:brand,strength:strength,category:category,imageUrl:imageurl,type:type,manufacturer:manufacturer
	    }).then((response) => {
	    if (response.data) {
    		swal("Data Updated Successfully");
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
		    	<div className="card-header"> Edit Medicine</div>
			    <div className="card-body">
			    	<Row>
							<Col md={{ span: 10, offset: 1 }}>
							  <form  onSubmit={handleSubmit}>
							  	<div className="form-group mt-3">
						    	<label>Name</label>
						    	<input type="text" className="form-control" required=""  value={medicinename} onChange={(e) => setMedicinename(e.target.value)} placeholder="Name"/>
						  	</div>
						  	<div className="form-group mt-3">
						    	<label>Manufacturer</label>
						    	<input type="text" className="form-control" required=""  value={brand} onChange={(e) => setManufacturer(e.target.value)} placeholder="Image Url"/>
						  	</div>	
						  	<div className="form-group mt-3">
						    	<label>Brand</label>
						    	<input type="text" className="form-control" required=""  value={strength} onChange={(e) => setBrand(e.target.value)} placeholder="Brand"/>
						  	</div>


						  	<div className="form-group mt-3">
						    	<label>Strength</label>
						    	<input type="text" className="form-control" required=""  value={category} onChange={(e) => setStrength(e.target.value)} placeholder="Strength"/>
						  	</div>

						  	<div className="form-group mt-3">
						    	<label>Category</label>
						    	<input type="text" className="form-control" required=""  value={manufacturer} onChange={(e) => setCategory(e.target.value)} placeholder="Category"/>
						  	</div>

						  	<div className="form-group mt-3">
						    	<label>Image URL</label>
						    	<input type="text" className="form-control" required=""  value={imageurl} onChange={(e) => setImageurl(e.target.value)} placeholder="Image Url"/>
						  	</div>

						  	<div className="form-group mt-3">
						    	<label>Type</label>
						    	<input type="text" className="form-control" required=""  value={type} onChange={(e) => setType(e.target.value)} placeholder="Type"/>
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