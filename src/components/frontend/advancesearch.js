import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import MultiRangeSlider from "multi-range-slider-react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from 'sweetalert';
import http from '../admin/include/http';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
export default function Create() {
	const navigate = useNavigate();
	const [specialty, setSpecialty] = useState([])
	const [gender, setGender] = useState("")
	

	const [minValue, setMinValue] = useState(2);
	const [maxValue, setMaxValue] = useState(150);
		
	const defaultActivevalue  = false;
	const [activestatus, setActivestatus] = useState(defaultActivevalue)
	var feerange = JSON.stringify({ "lt" : minValue,"gt" : maxValue});

	const handleSwitchOnChange = () => {
		const newActivealue = !defaultActivevalue;
	  	setActivestatus(newActivealue);
	};
		
	let handleSubmit = async (e) => {
	  e.preventDefault();
	  navigate('/searchdoctor', { state: { advancesearch:true, isOnline: activestatus,gender:gender,feeRange:feerange} });
	}

	return(
		<div className="container">
		    <div className="card">
		    <div className="card-body">
		    	<Row>
					<Col md={{ span: 10, offset: 1 }}>
					  <form  onSubmit={handleSubmit}>
					  		<div className="form-group mt-3">
						    	<label>Fee Range</label>
						    	<MultiRangeSlider min={0} style={{boxShadow:"none",border:"none"}} max={1000} step={0}ruler="false"
									minValue={minValue}
									maxValue={maxValue}
									onInput={(e: ChangeResult) => {
									setMinValue(e.minValue);
									setMaxValue(e.maxValue);
										}}>
								</MultiRangeSlider>
						  	</div>
						  	<Row>
							  	<Col md={{ span: 4}}>
								  	<div className="form-group mt-3">
									  		<div className="card">
						    					<div className="card-body">
												    	<label class="checkbox-inline">
												    			<input type="radio" name="gender"  value="Female" onChange={(e) => setGender(e.target.value)}/>
												    		     &nbsp;&nbsp;&nbsp; Female
												    	</label>
										    	</div>
									    	</div>
							    	</div>
							    </Col>
					    <Col md={{ span: 4}}>
						  		<div className="form-group mt-3">
							  		<div className="card">
				    					<div className="card-body">
							    			<label class="checkbox-inline">
							    				<input type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} />
							  						&nbsp;&nbsp;&nbsp;Male
							  				</label>
					  					</div>
					  				</div>
					  			</div>
					  		</Col>
						  </Row>
					  	<div className="form-group mt-3">
					  		<label >Online/ Offline &nbsp;&nbsp;&nbsp;</label>
					  		<BootstrapSwitchButton size="sm" checked={defaultActivevalue} onChange={handleSwitchOnChange} />
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