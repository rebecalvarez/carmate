import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import RepairForm from '../elements/RepairForm';
import Logo from './images/CARMATE-Logo.png';

class Repair extends Component {
  // state = {calls: []};

  render() {
    return (

    <div>
    <Navbar bg="dark" variant="dark">
  <Navbar.Brand href="/dashboard"><img src={Logo} alt="CarMate Logo"></img></Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Nav className="ml-auto float-right">
      <Nav.Link href="/">Home</Nav.Link>
   
     
    </Nav>
  </Navbar.Collapse>
</Navbar>

        <RepairForm />




    </div>
  );
};
};

export default Repair;

// // import React, { Component } from 'react';
// import Map from '../elements/Map';

// class Repair extends Component {

//   render() {
//     return (
//       <div style={{ margin: '100px' }}>
//         <h1>Map Here</h1>
//         {/* <Map
//           google={this.props.google}
//           center={{ lat: 18.5204, lng: 73.8567 }}
//           height='300px'
//           zoom={15}
//         /> */}
//       </div>
//     );
//   }
// }

// export default Repair;