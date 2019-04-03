import React, { Component } from 'react';
// import ReactDOM from "react-dom";
import GoogleLogin from 'react-google-login';
// import Axios from 'axios';
import API from '../../../utils/API';

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            userData: {}
        }
        this.responseGoogle = this.responseGoogle.bind(this)
    }
    // componentDidMount() {
    //     var data = responseGoogle()
    //     Axios.
    // }
    responseGoogle = (response) => {
        this.setState({userData: response.profileObj})
        console.log("responseGoogle", this.state.userData)
        API.saveUser(this.state.userData)
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