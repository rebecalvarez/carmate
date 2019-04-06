import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CarForm from '../elements/CarForm';
// import Accordion from '../elements/Accordion';
import UserImage from '../elements/UserImage';
import Logo from './images/CARMATE-Logo-horizontal-web2.png';
import MaintIcon from './images/maint-sm.png';
import { Col, Row } from 'reactstrap';
import API from '../../utils/API';
import axios from 'axios';
import './style/dashboardstyle.css';
// import { ToggleRadioButtonChecked } from 'material-ui/svg-icons';
// import fullscreenExit from 'material-ui/svg-icons/navigation/fullscreen-exit';
// import update from 'react-addons-update';
class Dashboard extends Component {
  state = {
    // This is an example of the panels information displayed
    // panels: [
    //   {
    //     label: 'Maintenance',
    //     content: ['Maintenance Information Not Available'],
    //     isCompleted: false,
    //   },
    //   {
    //     label: 'Recalls',
    //     content: ['Recalls Information Not Available'],
    //     isCompleted: false,
    //   },
    //   {
    //     label: 'Upcoming Repairs',
    //     content: ['Upcoming Repairs Information Not Available'],
    //     isCompleted: false,
    //   },
    //   // NICE TO HAVE FOR NEXT DEV PHASE
    //   // {
    //   //   label: 'Technical Service Bulletin',
    //   //   content:
    //   //     "Many dyslexic people find it helpful to swap out a website's typeface for something like OpenDyslexic. But icon fonts get replaced as well, which makes for a frustratingly broken experience.",
    //   // },
    //   {
    //     label: 'Vehicle Warranty',
    //     content: ['Vehicle Warranty Information Not Available'],
    //   },
    // ],
    maintenance: [],
    upcoming: [],
    warranty: [],
    recalls: [],
    mileage: '',
    make: '',
    model: '',
    year: '',
    vin: '',
    userEmail: '',
    userExists: false,
  };

  componentDidMount = data => {
    // Get cookie value to associate services with user
    var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)tokenId\s*\=\s*([^;]*).*$)|^.*$/, '$1');
    console.log('Cookie Value (ln 54):', cookieValue);
    this.setState({ userEmail: cookieValue });
    axios
      .get('api/userservices', cookieValue)
      .then(response => {
        // console.log(response.data[0].warrantyServices);
        // this.setState({
        //   // maintenance: response.data[0].maintenanceServices,
        //   // recalls: response.data[0].recallServices,
        //   // upcoming: response.data[0].upcomingServices,
        //   warranty: response.data[0].warrantyServices,
        // });

        // need to get response.data[0-4].nameOfServiceCategory
        if (response.data.length > 0) {
          this.setState({
            userExists: true,
          });
        }
        for (var i = 0; i < response.data.length; i++) {
          if (response.data[i].category === 'warranty') {
            // let warrantyObject = this.state.panels[3]
            // console.log(response.data[i].warrantyServices)
            // warrantyObject.content = response.data[i].warrantyServices;
            this.setState({
              warranty: response.data[i].warrantyServices
            })
          }
          if(response.data[i].category === 'maintenance'){
            // let maintenanceObject = this.state.panels[0]
            // maintenanceObject.content = response.data[i].maintenanceServices;
            // this.setState({ panels[0]: response.data[i].maintenanceServices })
            this.setState({
              maintenance: response.data[i].maintenanceServices
            })
          }
          if(response.data[i].category === 'recall'){
            // let maintenanceObject = this.state.panels[0]
            // maintenanceObject.content = response.data[i].maintenanceServices;
            // this.setState({ panels[0]: response.data[i].maintenanceServices })
            this.setState({
              recalls: response.data[i].recallServices
            })
          }
          if(response.data[i].category === 'upcoming'){
            // let maintenanceObject = this.state.panels[0]
            // maintenanceObject.content = response.data[i].maintenanceServices;
            // this.setState({ panels[0]: response.data[i].maintenanceServices })
            this.setState({
              upcoming: response.data[i].upcomingServices
            })
          }
        }
      })
      .catch(error => console.log(error.message, 'front end API userservices not working'));
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
        console.log('THIS IS RES.DATA:  ', res.data.recallServices);
        // const obj = this.state.panels;
        // obj[1].content = res.data;
        // this.setState({ panels: obj });
        this.setState({ recalls: res.data.recallServices });
      })
      .catch(err => console.log(err));
  };

  getUpcoming = (year, make, model, mileage, vin, userEmail) => {
    API.getUpcoming(year, make, model, mileage, vin, userEmail)
      .then(res => {
        console.log('THIS IS RES.DATA:  ', res.data.upcomingServices);

        // const obj = this.state.panels;
        // obj[2].content = res.data;
        this.setState({ upcoming: res.data.upcomingServices });
      })

      .catch(err => console.log(err));
  };

  getWarranty = (year, make, model, vin, userEmail) => {
    API.getWarranty(year, make, model, vin, userEmail)
      .then(res => {
        console.log('THIS IS RES.DATA:  ', res.data.warrantyServices);

        // const obj = this.state.panels;
        // obj[3].content = res.data;
        this.setState({ warranty: res.data.warrantyServices });
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
    this.getRecalls(this.state.year, this.state.make, this.state.model, this.state.vin, this.state.userEmail);
    this.getUpcoming(
      this.state.year,
      this.state.make,
      this.state.model,
      this.state.mileage,
      this.state.vin,
      this.state.userEmail
    );
    this.getWarranty(this.state.year, this.state.make, this.state.model, this.state.vin, this.state.userEmail);
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

  markCompleteUpcoming = description => {
    console.log(description);
    this.setState({
      upcoming: this.state.upcoming.map(upcoming => {
        if (upcoming.description === description) {
          upcoming.completed = !upcoming.completed;
          console.log(upcoming.completed);
        }
        return upcoming;
      }),
    });
  };

  markCompleteWarranty = type => {
    console.log(type);
    this.setState({
      warranty: this.state.warranty.map(warranty => {
        if (warranty.type === type) {
          warranty.completed = !warranty.completed;
          console.log(warranty.completed);
        }
        return warranty;
      }),
    });
  };

  markCompleteRecall = date => {
    console.log(date);
    this.setState({
      recalls: this.state.recalls.map(recall => {
        if (recall.recallDate === date) {
          recall.completed = !recall.completed;
          console.log(recall.completed);
        }
        return recall;
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

<div className='container content'>
<div>
  <div className='panel'> <h3 className='title' >Maintenance</h3></div>


{this.state.maintenance.length > 0
              ? this.state.maintenance.map(maint => (
                  <li className='list'>
                    <input className='check-box'type="checkbox" onChange={() => this.markComplete(maint.description)} />
                    {maint.description}, due mileage {maint.dueMileage}{' '}
                  </li>
                ))
              : null}

</div>

<div>
<div className='panel'> <h3 className='title' >Upcoming Services</h3></div>

{this.state.upcoming.length > 0
              ? this.state.upcoming.map(upcoming => (
                  <li className='list'>
                    <input type="checkbox" onChange={() => this.markCompleteUpcoming(upcoming.description)} />
                    {upcoming.description}, total cost {upcoming.totalCost}{' '}
                  </li>
                ))
              : null}

</div>

<div>
<div className='panel'> <h3 className='title' >Warranty Services</h3></div>

{this.state.warranty.length > 0
              ? this.state.warranty.map(warranty => (
                  <li className='list'>
                    <input type="checkbox" onChange={() => this.markCompleteWarranty(warranty.type)} />
                    warranty: {warranty.type}, criteria: {warranty.criteria}{' '}
                  </li>
                ))
              : null}

</div>

<div>
<div className='panel'> <h3 className='title' >Safety Recalls</h3></div>
{this.state.recalls.length > 0
            ? this.state.recalls.map(recall => (
                <li className='list'>
                  <input type="checkbox" onChange={() => this.markCompleteRecall(recall.recallDate)} />
                  recall: {recall.description}, date: {recall.recallDate}{' '}
                </li>
              ))
            : null}

</div>



</div>


        {/* <div
          className="results"
          style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '5%' }}
        >
          <div className="maintenance" style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Maintenance</h3>
            {this.state.maintenance.length > 0
              ? this.state.maintenance.map(maint => (
                  <li style={{ listStyleType: 'none' }}>
                    <input type="checkbox" onChange={() => this.markComplete(maint.description)} />
                    {maint.description}, due mileage {maint.dueMileage}{' '}
                  </li>
                ))
              : null}
          </div>

          <div className="upcoming" style={{ display: 'flex', flexDirection: 'column', marginLeft: '5%' }}>
            <h3 style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Upcoming Services</h3>
            {this.state.upcoming.length > 0
              ? this.state.upcoming.map(upcoming => (
                  <li style={{ listStyleType: 'none' }}>
                    <input type="checkbox" onChange={() => this.markCompleteUpcoming(upcoming.description)} />
                    {upcoming.description}, total cost {upcoming.totalCost}{' '}
                  </li>
                ))
              : null}
          </div>

          <div className="warranty" style={{ display: 'flex', flexDirection: 'column', marginLeft: '5%' }}>
            <h3 style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Warranty Services</h3>
            {this.state.warranty.length > 0
              ? this.state.warranty.map(warranty => (
                  <li style={{ listStyleType: 'none' }}>
                    <input type="checkbox" onChange={() => this.markCompleteWarranty(warranty.type)} />
                    warranty: {warranty.type}, criteria: {warranty.criteria}{' '}
                  </li>
                ))
              : null}
          </div> */}

          {/* <Accordion panels={this.state.panels} /> */}
        {/* </div>
        <div
          className="recalls"
          style={{ display: 'flex', flexDirection: 'column', marginTop: '15%', marginLeft: '10%' }}
        >
          <h3 style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Safety Recalls</h3>
          {this.state.recalls.length > 0
            ? this.state.recalls.map(recall => (
                <li style={{ listStyleType: 'none' }}>
                  <input type="checkbox" onChange={() => this.markCompleteRecall(recall.recallDate)} />
                  recall: {recall.description}, date: {recall.recallDate}{' '}
                </li>
              ))
            : null}
        </div> */}
      </div>
    );
  }
}

export default Dashboard;
