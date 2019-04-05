import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from './images/CARMATE-Logo-horizontal-web2.png';
import Nic from './images/nic.png';
import Rebeca from './images/rebeca.png';
import Ian from './images/ian.png';
import Harpal from './images/harpal.png';
import { Row, Col } from 'reactstrap';
import Card from '@bit/semantic-org.semantic-ui-react.card';
import Image from '@bit/semantic-org.semantic-ui-react.image';
import './style/teamstyle.css';



class Team extends Component {

  render() {
    
    
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/dashboard">
            <img src={Logo} alt="CarMate Logo" />
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse  id="basic-navbar-nav" className="justify-content-end">
            <Nav className="ml-auto">
              {/* <Login
                saveUser={this.saveUser}          
              /> */}

              
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        
<div className='container content'>


          <Row>
          <Col className="col"> 
          <Card >
    <Image src={Ian} />
    <Card.Content>
      <Card.Header>Ian Bunn</Card.Header>
      
      <Card.Description>Full Stack Developer</Card.Description>
    </Card.Content>
   
  </Card>

</Col>
          <Col className="col"> 
          
          <Card >
    <Image src={Rebeca} />
    <Card.Content>
      <Card.Header>Rebeca Dodero</Card.Header>
      
      <Card.Description>Full Stack Developer</Card.Description>
    </Card.Content>
   
  </Card>

</Col>
          </Row>

          <Row>
          <Col className="col">
           <Card>
    <Image src={Harpal} />
    <Card.Content>
      <Card.Header>Harpal Assis</Card.Header>
     
      <Card.Description>Full Stack Developer</Card.Description>
    </Card.Content>
    
  </Card>

</Col>
          <Col className="col"> 
          <Card >
    <Image src={Nic} />
    <Card.Content>
      <Card.Header>Nic May</Card.Header>
     
      <Card.Description>Full Stack Developer</Card.Description>
    </Card.Content>
  
  </Card>

</Col>
          </Row>
        
</div>

</div>
     


    );
  }
}

export default Team;
