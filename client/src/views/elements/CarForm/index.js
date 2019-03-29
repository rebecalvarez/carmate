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
// Mileage
// OR
// VIN

<Form className="form-container">
  <Col md={{ size: 6, offset: 3 }}>
  <Row> <Col className="spacing">Please fill out the following information to update your vehicle</Col></Row>
  <Row form="true">
  <Col md={6} >
      <FormGroup className="vinStyle">
        <Label for="vin">VIN #</Label>
        <Input type="vin" name="vin" id="vin" placeholder="" />
      </FormGroup>
    </Col>
    <Col md={2} >OR</Col>
    <Col md={4}>
  
      <FormGroup>
        <Label for="Year">Year</Label>
        <Input type="year" name="year" id="year" placeholder="" />
      </FormGroup>
      <FormGroup>
        <Label for="Make">Make</Label>
        <Input type="make" name="make" id="make" placeholder="" />
      </FormGroup>
      <FormGroup>
        <Label for="Model">Model</Label>
        <Input type="model" name="model" id="model" placeholder="" />
      </FormGroup>
    </Col>
    
    <Row >
      <FormGroup>
        <Label for="Mileage">Mileage</Label>
        <Input type="mileage" name="mileage" id="mileage" placeholder="" />
      </FormGroup>
    </Row>
  </Row>
  


  <Row>
    <Col className="spacing">
  <Button className="button-style">Update Vehicle</Button>
  </Col>
  </Row>
  </Col>
</Form>

      
    )
  }
}
