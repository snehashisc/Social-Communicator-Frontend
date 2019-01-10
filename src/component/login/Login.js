import React from 'react';
import { Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import Registrationform from './Registration';
import { Field, reduxForm } from 'redux-form';
import {RenderInput} from '../../common/forms/CreateFormField';
import {
  BrowserRouter as Router,
  Route,
  withRouter
} from 'react-router-dom';


const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = "Usename is required"
    }

    if (!values.password) {
        errors.password = "Password is required"
    }
    return errors;
}

class Login extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        const { from } = this.props.location.state || { from: { pathname: '/timeline' } }
        

        if (this.props.login.isAuthenticated === true) {
          return <Redirect to={from} />
        }
        let alertName = (value, dispatch) => dispatch ({type: "LOGIN", cred: value});

        

    

        const { handleSubmit, submitting } = this.props 

        return (
            <div>
                <form onSubmit = {handleSubmit (alertName)}>
                    <div className="login-form">
                        <h1 className="logowrapper">Login</h1>
                        <div className = "form-group user-name">
                            <Field  name= "username" label="Username" placeHolder= "Username" classNameForlabel= "login-input" component = {RenderInput}/>
                        </div>
                        <div className = "form-group pwd">
                            <Field  name= "password" label="Password" placeHolder= "Password" classNameForlabel= "login-input" classNameForElement="pwd-element" component = {RenderInput}/>
                        </div>

                        <div class=" form-group keep-sign-in">
                            <Field  type="checkbox" inputText = "Keep me signed in" component = {RenderInput}/>
                        </div>
                        <div class=" form-group forgot-pwd">Forgot your password?</div>
    

                        <button className="btn btn-primary login-button" type="submit" disabled = {submitting}>Login</button>
                    </div>
                </form>
                <div className="registartion-form">
                    <Registrationform/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        login : state.loginReducer
    }
}


Login = connect(
    mapStateToProps
)(Login);


export default reduxForm({
    form: 'login', // a unique name for this form
    validate
})(Login);

