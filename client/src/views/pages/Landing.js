import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CarForm from '../elements/CarForm';
import Logo from './images/CARMATE-Logo-horizontal-web2.png';
import API from '../../utils/API';
import LandingRender from '../elements/LandingRender';

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
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/dashboard">
            <img src={Logo} alt="CarMate Logo" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ml-auto float-right">
              <Nav.Link href="/auth/google">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

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
