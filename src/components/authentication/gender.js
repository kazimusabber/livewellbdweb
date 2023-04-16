import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import Backnext from "../common/backnext";
import Back from "../common/back";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from "../common/title";
// creating functional component ans getting props from app.js and destucturing them
export default function Name ({prevStep, nextStep, handleFormData, values}){
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    if (
      validator.isEmpty(values.gender)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
        <Back prevStep={prevStep}></Back>
        <Title title={"What is your gender?"}></Title>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
            		<Row>
            			<Col md={{ span: 12}} className={'radiostyle'}>
            			<label> Female</label>
              			<input type="radio" name="gender" value="female" onClick={handleFormData("gender")}/>
              		</Col>
              	</Row>
              	<Row>
              		<Col md={{ span: 12 }} className={'radiostyle'}>
              			<label> Male</label>
	              		<input type="radio" name="gender" value="male" onClick={handleFormData("gender")}/>
	              	</Col>
              	</Row>

              	<Row>
              		<Col md={{ span: 12 }} className={'radiostyle'}>
              			<label> Other</label>
	              		<input type="radio" name="gender" value="other" onClick={handleFormData("gender")}/>
	              	</Col>
              	</Row>
              	
              	{error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Backnext prevStep={prevStep}></Backnext>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

