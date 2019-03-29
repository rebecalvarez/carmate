import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import './style.css';
import API from '../../../utils/API';

export default class CarForm extends Component {
  state = {
    upcoming: '',
    tsb: '',
    maint: '',
    recall: '',
    warranty: '',
    mileage: '',
    make: '',
    model: '',
    year: '',
    vin: '',
  };

  getFields = (year, make, model, mileage, vin) => {
    //upcoming repairs, tsb, maintenance, recall, warranty
    API.getAvailableFields(year, make, model, mileage, vin)
      .then(res =>
        this.setState({
          upcoming: res.data.upcoming ? 'Yes' : 'No',
          tsb: res.data.tsb ? 'Yes' : 'No',
          maint: res.data.maint ? 'Yes' : 'No',
          recall: res.data.recall ? 'Yes' : 'No',
          warranty: res.data.warranty ? 'Yes' : 'No',
        })
      )

      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({
      upcoming: '',
      tsb: '',
      maint: '',
      recall: '',
      warranty: '',
    });
    this.getFields(this.state.year, this.state.make, this.state.model, this.state.mileage, this.state.vin);
  };

  render() {
    return (
      // Year
      // Make
      // Model
      // Mileage
      // OR
      // VIN
      <div>
        <Form className="form-container">
          <Col md={{ size: 6, offset: 3 }}>
            <Row>
              {' '}
              <Col className="spacing">Please fill out the following information to update your vehicle</Col>
            </Row>
            <Row form="true">
              <Col md={3}>
                <FormGroup>
                  <Label for="Year">Year</Label>
                  <Input
                    type="year"
                    name="year"
                    id="year"
                    onChange={this.handleInputChange}
                    value={this.state.year}
                    placeholder=""
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="Make">Make</Label>
                  <Input
                    type="make"
                    name="make"
                    id="make"
                    onChange={this.handleInputChange}
                    value={this.state.make}
                    placeholder=""
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="Model">Model</Label>
                  <Input
                    type="model"
                    name="model"
                    id="model"
                    onChange={this.handleInputChange}
                    value={this.state.model}
                    placeholder=""
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="Mileage">Mileage</Label>
                  <Input
                    type="mileage"
                    name="mileage"
                    id="mileage"
                    onChange={this.handleInputChange}
                    value={this.state.mileage}
                    placeholder=""
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col className="spacing">OR</Col>
            </Row>

            <Row form="true">
              <Col md={3} />
              <Col md={3}>
                <FormGroup>
                  <Label for="vin">VIN #</Label>
                  <Input
                    type="vin"
                    name="vin"
                    id="vin"
                    onChange={this.handleInputChange}
                    value={this.state.vin}
                    placeholder=""
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="Mileage">Mileage</Label>
                  <Input
                    type="mileage"
                    name="mileage"
                    onChange={this.handleInputChange}
                    value={this.state.mileage}
                    id="mileage"
                    placeholder=""
                  />
                </FormGroup>
              </Col>
              <Col md={3} />
            </Row>
            <Row>
              <Col className="spacing">
                <Button className="button-style" onClick={this.handleFormSubmit}>
                  Update Vehicle
                </Button>
              </Col>
            </Row>
          </Col>
        </Form>
        <ul
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            listStyleType: 'none',
            marginLeft: '30vw',
          }}
        >
          <li>Future Maintenance: {this.state.upcoming}</li>
          <li>Technical Service Bulletin: {this.state.tsb}</li>
          <li>Maintenance: {this.state.maint}</li>
          <li>Recalls: {this.state.recall}</li>
          <li>Vehicle Warranty: {this.state.warranty}</li>
        </ul>
      </div>
    );
  }
}
