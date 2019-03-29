import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CarForm from '../elements/CarForm';
import Accordion from '../elements/Accordion';
import UserImage from '../elements/UserImage';
import Logo from './images/CARMATE-Logo-horizontal-web2.png';
import MaintIcon from './images/maint-sm.png';
import { Col, Row } from 'reactstrap';


// This is an example of the panels information displayed
const panels = [
  {
    label: 'Maintenance',
    content: 'Icons are everywhere. These "little miracle workers" (as John Hicks described them) help us reinforce meaning in the interfaces we design and build. Their popularity in web design has never been greater; the conciseness and versatility of pictograms in particular make them a lovely fit for displays large and small. But icons on the web have had their fair share of challenges.',
  },
  {
    label: 'Recalls',
    content: 'Most assistive devices will read aloud text inserted via CSS, and many of the Unicode characters icon fonts depend on are no exception. Best-case scenario, your "favorite" icon gets read aloud as "black favorite star." Worse-case scenario, it\'s read as "unpronounceable" or skipped entirely.',
  },	
  {
    label: 'Future Maintenance',
    content: 'When your icon font fails, the browser treats it like any other font and replaces it with a fallback. Best-case scenario, you\'ve chosen your fallback characters carefully and something weird-looking but communicative still loads. Worse-case scenario (and far more often), the user sees something completely incongruous, usually the dreaded "missing character" glyph.',
  },
  {
    label: 'Technical Service Bulletin',
    content: 'Many dyslexic people find it helpful to swap out a website\'s typeface for something like OpenDyslexic. But icon fonts get replaced as well, which makes for a frustratingly broken experience.',
  },
  {
    label: 'Vehicle Warranty',
    content: 'SVG is awesome for icons! It\'s a vector image format with optional support for CSS, JavaScript, reusability, accessibility and a bunch more. It was made for this sort of thing.'
  },
];
class Dashboard extends Component {
  // state = {calls: []};

 
  


  render() {
    
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
<Col md={{ size: 12, offset: 0 }}>
<Row>
  <Col md={1}></Col>
  <Col md={1}>
<UserImage/>
</Col>
<Col md={10}>
<CarForm/>
</Col>
</Row>
</Col>
<Accordion panels={panels}/>

    </div>
  );
};
};

export default Dashboard;