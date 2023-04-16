import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import Backnext from "../common/backnext";
import Back from "../common/back";
import Title from "../common/title";
import Subtitle from "../common/subtitle";


// creating functional component ans getting props from app.js and destucturing them
export default function Name ({prevStep,nextStep, handleFormData, values}){
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    if (
      validator.isEmpty(values.phonenumber)
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
        <Title title={"What is your phone number?"}></Title>

        <Subtitle subtitle={"You will need your phone number for logging in and if you forget your password."}></Subtitle>
        
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="phonenumber"
                defaultValue={values.phonenumber}
                type="text"
                placeholder="Phone Number"
                onChange={handleFormData("phonenumber")}
              />
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

