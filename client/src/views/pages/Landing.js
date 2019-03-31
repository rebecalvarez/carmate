import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CarForm from '../elements/CarForm';
import Logo from './images/CARMATE-Logo-horizontal-web2.png';
import API from '../../utils/API';
import { Col, Row } from 'reactstrap';
import LandingRender from '../elements/LandingRender';
import  './style/landingstyle.css';

class Landing extends Component {
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
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/dashboard">
            <img src={Logo} alt="CarMate Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/auth/login">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
<div className='container'>

<Col md={{ size: 12, offset: 0 }} className="landingform" >
          <Row>
            <Col md={1} />
            <Col md={2} >
             
            </Col>
            <Col md={12} >
        <CarForm
          handleFormSubmit={this.handleFormSubmit}
          onChange={this.handleInputChange}
          getFields={this.getFields}
          year={this.state.year}
          vin={this.state.vin}
          model={this.state.model}
          make={this.state.make}
          mileage={this.state.mileage}
        />

</Col>
          </Row>
        </Col>
</div>
        <LandingRender
          upcoming={this.state.upcoming}
          tsb={this.state.tsb}
          maint={this.state.maint}
          recall={this.state.recall}
          warranty={this.state.warranty}
        />

      </div>
    );
  }
}

export default Landing;
