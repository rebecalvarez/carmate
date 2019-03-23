import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CarForm from '../elements/CarForm';
import Logo from './images/CARMATE-Logo.png';
import MaintIcon from './images/maint-sm.png';


const Dashboard = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
  <Navbar.Brand href="/dashboard"><img src={Logo} alt="CarMate Logo"></img></Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Nav className="ml-auto float-right">
      <Nav.Link href="/repair">Find Vehicle Help &nbsp; <img src={MaintIcon} alt="Fix Car"></img></Nav.Link>
   
     
    </Nav>
  </Navbar.Collapse>
</Navbar>


<CarForm/>

    </div>
  );
};

export default Dashboard;