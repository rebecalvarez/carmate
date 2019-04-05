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
import axios from "axios";
// This is an example of the panels information displayed

class Dashboard extends Component {
  state = {
    panels: [
      {
        label: 'Maintenance',
        content: ['Maintenance Information Not Available'],
      },
      {
        label: 'Recalls',
        content: ['Recalls Information Not Available'],
      },
      {
        label: 'Upcoming Repairs',
        content:
          ['Upcoming Repairs Information Not Available'],
      },
      // {
      //   label: 'Technical Service Bulletin',
      //   content:
      //     "Many dyslexic people find it helpful to swap out a website's typeface for something like OpenDyslexic. But icon fonts get replaced as well, which makes for a frustratingly broken experience.",
      // },
      {
        label: 'Vehicle Warranty',
        content:
          ["Vehicle Warranty Information Not Available"],
      },
    ],
    maintenance: [],
    upcoming: [],
    mileage: '',
    make: '',
    model: '',
    year: '',
    vin: '',
    userData: {}
  };

  componentDidMount = (data) => {
      // var allCookies = document.cookie;
      // console.log("all cookies", allCookies);

      var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)tokenId\s*\=\s*([^;]*).*$)|^.*$/, "$1");
      // var token = document.cookie.tokenId;
      var currentUrl = "https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=" + cookieValue;
      console.log("component did mount", cookieValue)
      axios
          .get(currentUrl, {
              headers: {
                  Authorization: cookieValue,
              }
          })
          .then(function (response) {
              // console.log(response.data);
              console.log(response.data.data);
          })
          .catch(err =>
              console.log(err.message, 'no available fields for this model!')
          );
  
  }

  getMaintenance = (year, make, model, mileage, vin) => {
    
    API.getMaintenance(year, make, model, mileage, vin)
      .then(res => {
        console.log ('THIS IS RES.DATA:  ',res.data)
        const obj = this.state.panels;
        obj[0].content = res.data;
        this.setState({ panels: obj });
      })
      .catch(err => console.log(err));
  };

  getRecalls = (year, make, model, vin) => {
    API.getRecalls(year, make, model, vin)
      .then(res => {
        const obj = this.state.panels;
        obj[1].content = res.data;
        this.setState({ panels: obj });
      })

      .catch(err => console.log(err));
  };

  getUpcoming = (year, make, model, mileage, vin) => {
    API.getUpcoming(year, make, model, mileage, vin)
      .then(res => {
        const obj = this.state.panels;
        obj[2].content = res.data;
        this.setState({ panels: obj });
      })

      .catch(err => console.log(err));
  };

  getWarranty = (year, make, model, vin) => {
    API.getWarranty(year, make, model, vin)
      .then(res => {
        const obj = this.state.panels;
        obj[3].content = res.data;
        this.setState({ panels: obj });
      })

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
        <Navbar bg="dark" variant="dark" expand="lg">
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
