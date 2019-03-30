import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CarForm from '../elements/CarForm';
import Accordion from '../elements/Accordion';
import UserImage from '../elements/UserImage';
import Logo from './images/CARMATE-Logo-horizontal-web2.png';
import MaintIcon from './images/maint-sm.png';
import { Col, Row } from 'reactstrap';
import API from '../../utils/API';

// This is an example of the panels information displayed

class Dashboard extends Component {
  state = {
    panels: [
      {
        label: 'Maintenance',
        content: this.maintenance,
      },
      {
        label: 'Recalls',
        content: '',
      },
      {
        label: 'Upcoming Repairs',
        content:
          'When your icon font fails, the browser treats it like any other font and replaces it with a fallback. Best-case scenario, you\'ve chosen your fallback characters carefully and something weird-looking but communicative still loads. Worse-case scenario (and far more often), the user sees something completely incongruous, usually the dreaded "missing character" glyph.',
      },
      // {
      //   label: 'Technical Service Bulletin',
      //   content:
      //     "Many dyslexic people find it helpful to swap out a website's typeface for something like OpenDyslexic. But icon fonts get replaced as well, which makes for a frustratingly broken experience.",
      // },
      {
        label: 'Vehicle Warranty',
        content:
          "SVG is awesome for icons! It's a vector image format with optional support for CSS, JavaScript, reusability, accessibility and a bunch more. It was made for this sort of thing.",
      },
    ],
    maintenance: ['This is test', 'this is second test'],
    mileage: '',
    make: '',
    model: '',
    year: '',
    vin: '',
  };

  getMaintenance = (year, make, model, mileage, vin) => {
    API.getMaintenance(year, make, model, mileage, vin)
      .then(res => console.log(`get maintenance: ${res.data}`))

      .catch(err => console.log(err));
  };

  getRecalls = (year, make, model, vin) => {
    API.getRecalls(year, make, model, vin)
      .then(res => console.log(`get recalls: ${res.data}`))

      .catch(err => console.log(err));
  };

  getUpcoming = (year, make, model, mileage, vin) => {
    API.getUpcoming(year, make, model, mileage, vin)
      .then(res => console.log(`upcoming: ${res.data}`))

      .catch(err => console.log(err));
  };

  getWarranty = (year, make, model, vin) => {
    API.getWarranty(year, make, model, vin)
      .then(res => console.log(`warranty: ${res.data}`))

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
    this.getMaintenance(this.state.year, this.state.make, this.state.model, this.state.mileage, this.state.vin);
    this.getRecalls(this.state.year, this.state.make, this.state.model, this.state.vin);
    this.getUpcoming(this.state.year, this.state.make, this.state.model, this.state.mileage, this.state.vin);
    this.getWarranty(this.state.year, this.state.make, this.state.model, this.state.vin);
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
              <Nav.Link href="/repair">
                Find Vehicle Help &nbsp; <img src={MaintIcon} alt="Fix Car" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Col md={{ size: 12, offset: 0 }}>
          <Row>
            <Col md={1} />
            <Col md={1}>
              <UserImage />
            </Col>
            <Col md={10}>
              <CarForm
                handleFormSubmit={this.handleFormSubmit}
                onChange={this.handleInputChange}
                year={this.state.year}
                vin={this.state.vin}
                model={this.state.model}
                make={this.state.make}
                mileage={this.state.mileage}
              />
            </Col>
          </Row>
        </Col>
        <Accordion panels={this.state.panels} />
      </div>
    );
  }
}

export default Dashboard;
