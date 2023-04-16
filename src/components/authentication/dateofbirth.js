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
      validator.isEmpty(values.dateofbirth)
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
        <Title title={"What is your date of birth?"}></Title>
        <Subtitle subtitle={"Your age will help doctors determine the best care for you."}></Subtitle>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label className={'datelabel'}>Enter Date </Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="dateofbirth"
                defaultValue={values.dateofbirth}
                type="date"
                placeholder="DD/MM/YYYY"
                onChange={handleFormData("dateofbirth")}
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

