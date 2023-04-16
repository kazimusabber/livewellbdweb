import React,{ useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Name from "./name";
import Phonenumber from "./phonenumber";
import Selectlanguage from "./languageselect";
import Gender from "./gender";
import Dateofbirth from "./dateofbirth";
import Pincode from "./pincode";
import Acceptagreement from "./acceptagreement";
import Enterpincode from "./enterpincode";
export default function Registration() {


//state for steps
  const [step, setstep] = useState(1);

  //state for form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phonenumber: "",
    language:"",
    gender:"",
    dateofbirth:"",
    pincode:"",
    confirmcode:"",
    accept:1,
  })


  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = input => e => {
    // input value from the form
    const {value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData(prevState => ({
      ...prevState,
      [input]: value
  }));
  }


// javascript switch case to show different form in each step
  switch (step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    
      case 1:
      return (
        <div>
          <Container>
            <Row>
            <Col md={{ span: 8}} className="custom-margin">
              </Col>
              <Col md={{ span: 4}} className="custom-margin">
                <Selectlanguage nextStep={nextStep} handleFormData={handleInputData} values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );
      case 2:
      return (
        <div>
          <Container>
            <Row>
             <Col md={{ span: 8}} className="custom-margin">
              </Col>
              <Col md={{ span: 4}} className="custom-margin">
                <Phonenumber prevStep = {prevStep} nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );
      // Only formData is passed as prop to show the final value at form submit
    case 3:
      return (
        <div>
          <Container>
            <Row>
            <Col md={{ span: 8}} className="custom-margin">
              </Col>
              <Col md={{ span: 4}} className="custom-margin">
                <Name prevStep = {prevStep} nextStep={nextStep} handleFormData={handleInputData} values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    case 4:
      return (
        <div>
          <Container>
            <Row>
            <Col md={{ span: 8}} className="custom-margin">
              </Col>
              <Col md={{ span: 4}} className="custom-margin">
                <Gender prevStep = {prevStep} nextStep={nextStep} handleFormData={handleInputData} values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );
      case 5:
      return (
        <div>
          <Container>
            <Row>
            <Col md={{ span: 8}} className="custom-margin">
              </Col>
              <Col md={{ span: 4}} className="custom-margin">
                <Dateofbirth prevStep = {prevStep} nextStep={nextStep} handleFormData={handleInputData} values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    case 6:
      return (
        <div>
          <Container>
            <Row>
            <Col md={{ span: 8}} className="custom-margin">
              </Col>
              <Col md={{ span: 4}} className="custom-margin">
                <Pincode prevStep = {prevStep} nextStep={nextStep} handleFormData={handleInputData} values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );
      case 7:
      return (
        <div>
          <Container>
            <Row>
            <Col md={{ span: 8}} className="custom-margin">
              </Col>
              <Col md={{ span: 4}} className="custom-margin">
                <Acceptagreement nextStep={nextStep} handleFormData={handleInputData} values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    case 8:
      return (
        <div>
          <Container>
            <Row>
            <Col md={{ span: 8}} className="custom-margin">
              </Col>
              <Col md={{ span: 4}} className="custom-margin">
                <Enterpincode prevStep = {prevStep} nextStep={nextStep} handleFormData={handleInputData} values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    
    case 8:
      return (
       	 <Container>
            <Row>
            <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
            </Col>
            </Row>
          </Container>
      );
    // default case to show nothing
    default:
      return (
        <div className="App">
        </div>
      );
  }
}

