import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CarFormLanding from '../elements/CarFormLanding';
import Logo from './images/CARMATE-Logo-horizontal-web2.png';
import API from '../../utils/API';
// Removed Col from reactstrap imports
import { Row } from 'reactstrap';
import LandingRender from '../elements/LandingRender';
import Login from '../../vibe/components/Login/Login';
import './style/landingstyle.css';
import './images/landingback.png';
import LoadingGif from './images/loading.gif';

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
    userData: {},
    loading: false,
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
          loading: false,
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
      loading: true,
    });
    this.getFields(this.state.year, this.state.make, this.state.model, this.state.mileage, this.state.vin);
  };

  saveUser = response => {
    console.log('11', response);
    API.saveUser({
      userData: this.state.userData,
    }).catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/dashboard">
            <img src={Logo} alt="CarMate Logo" />
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="ml-auto">
              <Login saveUser={this.saveUser} />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="picbackground">
          <div className="titles ">
            <h2 className="orangecolor">Are you taking good care of your Car?</h2>
            <h4 className="tealcolor">
              Sometimes it's hard to know if you are getting the right information from the shop.
            </h4>
            <p className="tealcolor">FIND OUT FOR YOURSELF! Just enter the info below.</p>
          </div>
          <div className="container">
            <Row className="landingform">
              <CarFormLanding
                handleFormSubmit={this.handleFormSubmit}
                onChange={this.handleInputChange}
                getFields={this.getFields}
                year={this.state.year}
                vin={this.state.vin}
                model={this.state.model}
                make={this.state.make}
                mileage={this.state.mileage}
              />
            </Row>
          </div>
          <div className="spacinglanding " />
        </div>
        <div className="formcontainer container">
          {this.state.loading ? (
            <img src={LoadingGif} className="container loading" />
          ) : (
            <LandingRender
              saveUser={this.saveUser}
              upcoming={this.state.upcoming}
              tsb={this.state.tsb}
              maint={this.state.maint}
              recall={this.state.recall}
              warranty={this.state.warranty}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Landing;
