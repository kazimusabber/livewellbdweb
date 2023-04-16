import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import Backnext from "../common/backnext";
import Next from "../common/next";
import Back from "../common/back";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from "../common/title";
// creating functional component ans getting props from app.js and destucturing them
export default function Name ({prevStep,nextStep, handleFormData, values}){
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    if (
      validator.isEmpty(values.language)
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
        <Back></Back>
        <Title title={"Select an option"}></Title>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
            		<Row>
            			<Col md={{ span: 12}} className={'radiostyle'}>
            			<label> I am a doctor</label>
              			<input type="radio" name="language" value="doctor" onClick={handleFormData("language")}/>
              		</Col>
              	</Row>
              	<Row>
              		<Col md={{ span: 12 }} className={'radiostyle'}>
              			<label> I am a patient</label>
	              		<input type="radio" name="language" value="patient" onClick={handleFormData("language")}/>
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
            <Next></Next>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

