import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import "./style.css";


export default class CarForm extends Component {
  constructor() {
    super();
    this.state = { }
  }

  render() {
    return (

// Year
// Make
// Model
// Milage
// OR
// VIN

<Form className="form-container">
  <Col md={{ size: 6, offset: 3 }}>
  <Row> <Col className="spacing">Please fill out the following information to update your vehicle</Col></Row>
  <Row form="true">
    <Col md={3}>
  
      <FormGroup>
        <Label for="Year">Year</Label>
        <Input type="year" name="year" id="year" placeholder="" />
      </FormGroup>
    </Col>
    <Col md={3}>
      <FormGroup>
        <Label for="Make">Make</Label>
        <Input type="make" name="make" id="make" placeholder="" />
      </FormGroup>
    </Col>
    <Col md={3}>
      <FormGroup>
        <Label for="Model">Model</Label>
        <Input type="model" name="model" id="model" placeholder="" />
      </FormGroup>
    </Col>
    <Col md={3}>
      <FormGroup>
        <Label for="Mileage">Mileage</Label>
        <Input type="mileage" name="mileage" id="mileage" placeholder="" />
      </FormGroup>
    </Col>
  </Row>
  <Row>
  
    <Col className="spacing">OR</Col>
    
  </Row>

  <Row form="true">
    <Col md={3}>

    </Col>
    <Col md={3}>
      <FormGroup>
        <Label for="vin">VIN #</Label>
        <Input type="vin" name="vin" id="vin" placeholder="" />
      </FormGroup>
    </Col>
    <Col md={3}>
      <FormGroup>
      <Label for="Mileage">Mileage</Label>
        <Input type="mileage" name="mileage" id="mileage" placeholder="" />
      </FormGroup>
    </Col>
    <Col md={3}>
    
    </Col>
  </Row>
  <Row>
    <Col className="spacing">
  <Button>Update Vehicle</Button>
  </Col>
  </Row>
  </Col>
</Form>

      
    )
  }
}
