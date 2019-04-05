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
import axios from 'axios';
import { ToggleRadioButtonChecked } from 'material-ui/svg-icons';
class Dashboard extends Component {
  state = {
    // This is an example of the panels information displayed
    panels: [
      {
        label: 'Maintenance',
        content: ['Maintenance Information Not Available'],
        isCompleted: false,
      },
      {
        label: 'Recalls',
        content: ['Recalls Information Not Available'],
        isCompleted: false,
      },
      {
        label: 'Upcoming Repairs',
        content: ['Upcoming Repairs Information Not Available'],
        isCompleted: false,
      },
      // NICE TO HAVE FOR NEXT DEV PHASE
      // {
      //   label: 'Technical Service Bulletin',
      //   content:
      //     "Many dyslexic people find it helpful to swap out a website's typeface for something like OpenDyslexic. But icon fonts get replaced as well, which makes for a frustratingly broken experience.",
      // },
      {
        label: 'Vehicle Warranty',
        content: ['Vehicle Warranty Information Not Available'],
      },
    ],
    maintenance: [],
    upcoming: [],
    mileage: '',
    make: '',
    model: '',
    year: '',
    vin: '',
    userEmail: '',
  };

  componentDidMount = data => {
    // Get cookie value to associate services with user
    var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)tokenId\s*\=\s*([^;]*).*$)|^.*$/, '$1');
    console.log('Cookie Value (ln 54):', cookieValue);
    this.setState({ userEmail: cookieValue });
    // axios
    //     .get(currentUrl, {
    //         headers: {
    //             Authorization: cookieValue,
    //         }
    //     })
    //     .then(function (response) {
    //         // console.log(response.data);
    //         console.log("helloo" ,response.data.data);
    //     })
    //     .catch(err =>
    //         console.log(err.message, 'no available fields for this model!')
    //     );
  };

  getMaintenance = (year, make, model, mileage, vin, userEmail) => {
    API.getMaintenance(year, make, model, mileage, vin, userEmail)
      .then(res => {
        console.log('THIS IS RES.DATA:  ', res.data.maintenanceServices);
        // const obj = this.state.panels;
        // obj[0].content = res.data;
        this.setState({ maintenance: res.data.maintenanceServices });
      })
      .catch(err => console.log(err));
  };

  getRecalls = (year, make, model, vin, userEmail) => {
    API.getRecalls(year, make, model, vin, userEmail)
      .then(res => {
        const obj = this.state.panels;
        obj[1].content = res.data;
        this.setState({ panels: obj });
      })
      .catch(err => console.log(err));
  };

  getUpcoming = (year, make, model, mileage, vin, userEmail) => {
    API.getUpcoming(year, make, model, mileage, vin, userEmail)
      .then(res => {
        const obj = this.state.panels;
        obj[2].content = res.data;
        this.setState({ panels: obj });
      })

      .catch(err => console.log(err));
  };

  getWarranty = (year, make, model, vin, userEmail) => {
    API.getWarranty(year, make, model, vin, userEmail)
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
    this.getMaintenance(
      this.state.year,
      this.state.make,
      this.state.model,
      this.state.mileage,
      this.state.vin,
      this.state.userEmail
    );
    // this.getRecalls(this.state.year, this.state.make, this.state.model, this.state.vin, this.state.userEmail);
    // this.getUpcoming(
    //   this.state.year,
    //   this.state.make,
    //   this.state.model,
    //   this.state.mileage,
    //   this.state.vin,
    //   this.state.userEmail
    // );
    // this.getWarranty(this.state.year, this.state.make, this.state.model, this.state.vin, this.state.userEmail);
  };

  markComplete = description => {
    console.log(description);
    this.setState({
      maintenance: this.state.maintenance.map(maint => {
        if (maint.description === description) {
          maint.completed = !maint.completed;
          console.log(maint.completed);
        }
        return maint;
      }),
    });
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
        {this.state.maintenance.map(maint => (
          <li>
            <input type="checkbox" onChange={() => this.markComplete(maint.description)} />
            {maint.description}, due mileage {maint.dueMileage}{' '}
          </li>
        ))}

        {/* <Accordion panels={this.state.panels} /> */}
      </div>
    );
  }
}

export default Dashboard;
