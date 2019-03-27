// import React, { Component } from 'react';
// import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
// import Map from '../Map';
// import './style.css';

// export default class RepairForm extends Component {
//     constructor() {
//         super();
//         this.state = {}
//     }



//     render() {
//         return (

//             // Location
//             // Reviewing whether to use Zip Code or Address
//             // to show Google Places response items

//             <Form className="form-container">
//                 <Col md={{ size: 6, offset: 3 }}>

//                     <Row>
//                         <Col md={4}>
//                             <Map />
//                         </Col>
//                     </Row>

//                     <Row>
//                         <Col className="spacing">Please enter a zip code to find nearby repair shops</Col>
//                     </Row>

//                     <Row form="true">
//                         <Col md={4} />
//                         <Col md={4}>
//                             <FormGroup>
//                                 <Label for="Zip">Zip Code</Label>
//                                 <Input type="zip" name="zip" id="zip" placeholder="" />
//                             </FormGroup>
//                         </Col>
//                         <Col md={4} />
//                     </Row>

//                     <Row>
//                         <Col className="spacing">
//                             <Button>Find Repair Shops</Button>
//                         </Col>
//                     </Row>
//                 </Col>
//             </Form>


//         )
//     }
// }
import React, { Component } from 'react';
// import Map from '../Map';

class RepairForm extends Component {

    render() {
        return (
            <div style={{ margin: '100px' }}>
                <h1>Map here</h1>
                {/* <Map
                    google={this.props.google}
                    center={{ lat: 18.5204, lng: 73.8567 }}
                    height='300px'
                    zoom={15}
                /> */}
            </div>
        );
    }
}

export default RepairForm;