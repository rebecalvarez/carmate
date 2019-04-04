import React from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import './style.css';

const CarFormLanding = props => {
  return (
    // Year
    // Make
    // Model
    // Mileage
    // OR
    // VIN
    <div>
      <Form className="form-container">
        <Col md={{ size: 8, offset: 2 }}>
       
          <Row form="true">
            <Col md={3}>
              <FormGroup>
                <Label className="labelcolor" for="Year">Year</Label>
                <Input
                  type="number"
                  name="year"
                  id="year"
                  onChange={props.onChange}
                  value={props.year}
                  placeholder=""
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label className="labelcolor" for="Make">Make</Label>
                <Input type="make" name="make" id="make" onChange={props.onChange} value={props.make} placeholder="" />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label className="labelcolor" for="Model">Model</Label>
                <Input
                  type="model"
                  name="model"
                  id="model"
                  onChange={props.onChange}
                  value={props.model}
                  placeholder=""
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label className="labelcolor" for="Mileage">Mileage</Label>
                <Input
                  type="number"
                  name="mileage"
                  id="mileage"
                  onChange={props.onChange}
                  value={props.mileage}
                  placeholder=""
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col className="labelcolor" className="spacing">OR</Col>
          </Row>

          <Row form="true">
            <Col md={3} />
            <Col md={3}>
              <FormGroup>
                <Label className="labelcolor" for="vin">VIN #</Label>
                <Input type="vin" name="vin" id="vin" onChange={props.onChange} value={props.vin} placeholder="" />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label className="labelcolor" for="Mileage">Mileage</Label>
                <Input
                  type="number"
                  name="mileage"
                  onChange={props.onChange}
                  value={props.mileage}
                  id="mileage"
                  placeholder=""
                />
              </FormGroup>
            </Col>
            <Col md={3} />
          </Row>
          <Row>
            <Col className="spacing">
              <Button className="button-style" onClick={props.handleFormSubmit}>
                Find Vehicle
              </Button>
            </Col>
          </Row>
        </Col>
      </Form>
    </div>
  );
};

export default CarFormLanding;