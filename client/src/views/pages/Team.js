import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Logo from './images/CARMATE-Logo-horizontal-web2.png';

// Removed Col from reactstrap imports
import { Row, Col } from 'reactstrap';

import Login from '../../vibe/components/Login/Login';
import Card from '@bit/semantic-org.semantic-ui-react.card'
import Icon from '@bit/semantic-org.semantic-ui-react.icon'
import Image from '@bit/semantic-org.semantic-ui-react.image'

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
              <Login
                saveUser={this.saveUser}          
              />

              
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        
<div className='container'>


          <Row>
          <Col> <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
)
</Col>
          <Col> <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
)
</Col>
          </Row>
          <Row>
          <Col> <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
)
</Col>
          <Col> <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
)
</Col>
          </Row>
        
</div>
</div>
     


    );
  }
}

export default Team;
