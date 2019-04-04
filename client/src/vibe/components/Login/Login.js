import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
// import ReactDOM from "react-dom";
import GoogleLogin from 'react-google-login';
import API from '../../../utils/API';
import { Route, Redirect } from 'react-router'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {},
        };
        this.responseGoogle = this.responseGoogle.bind(this);
    }

    responseGoogle = response => {
        //setting userData to the profile object res from Google and then creating another object for the accessToken
        let userData = {};
        userData = response.profileObj;
        const accessToken = {};
        accessToken.accessToken = response.accessToken;
        //combining the accessToken object with the user profile object into new Object newUserData
        const newUserData = Object.assign(userData, accessToken);
        console.log(newUserData);
        this.setState({ userData: newUserData });
        //saving newObj with access token to userData
        API.saveUser(this.state.userData);

    };

    onFailure = (error) => {
        alert(error);
    };

    render() {
        return (
            <div>
                <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_USER_CLIENTID}
                    buttonText="Login"
                    render={renderProps => (
                        <Nav.Link onClick={renderProps.onClick} disabled={renderProps.disabled}>
                            Login / Register
                         </Nav.Link>
                    )}
                    onSuccess={this.responseGoogle}
                    onFailure={this.onFailure}
                    cookiePolicy={'single_host_origin'}
                    uxMode="redirect"
                    redirectUri="http://localhost:3000/dashboard"
                />
            </div>
        );
    }
}
