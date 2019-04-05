import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
// import ReactDOM from "react-dom";
import GoogleLogin from 'react-google-login';
import API from '../../../utils/API';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {},
            isAuthenticated: false,
            user: null,
            token: '',
            redirectUrl: 'http://localhost:3000'
        };
        this.responseGoogle = this.responseGoogle.bind(this);
    }

    responseGoogle = response => {
        //setting userData to the profile object res from Google and then creating another object for the tokenId
        let userData = {};
        userData = response.profileObj;
        const tokenId = {};
        tokenId.tokenId = response.tokenId;
        //combining the tokenId object with the user profile object into new Object newUserData
        const newUserData = Object.assign(userData, tokenId);
        console.log(newUserData);
        this.setState({ userData: newUserData });
        //saving newObj with access token to userData
        API.saveUser(this.state.userData);
        document.cookie = `tokenId=${this.state.userData.email}`;
        document.location.href = '/dashboard';
    };

    

    logout = () => {
        this.setState({
            userData: {},
            isAuthenticated: false,
            user: null,
            token: ''
        });
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

                />
            </div>
        );
    }
}
