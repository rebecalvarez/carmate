import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

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




    </div>
  );
};
};

export default Repair;