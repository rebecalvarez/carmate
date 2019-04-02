import React, { Component } from 'react';
// import ReactDOM from "react-dom";
import GoogleLogin from 'react-google-login';

export default class Login extends Component {

    responseGoogle = (response) => {
        console.log(response);
    }


    render() {
        return (
            <div>
                <GoogleLogin
                    clientId= {process.env.REACT_APP_GOOGLE_USER_CLIENTID}
                    buttonText="Login"
                    render={renderProps => (
                        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Login</button>
                    )}
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        )
    }
}