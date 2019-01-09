import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {RenderInput} from '../../common/forms/CreateFormField';

let alertName = (value, dispatch) => dispatch ({type: "LOGIN", cred: value});



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

const LoginForm = ({handleSubmit, submitting}) =>
        
            <form onSubmit = {handleSubmit (alertName)}>
                <div className="col-md-6 col-md-offset-3 login-form">
                    <h2>Login</h2>
                    <div className = "form-group">
                        <Field  name= "username" label="Username" component = {RenderInput}/>
                    </div>
                    <div className = "form-group">
                        <Field  name= "password" label="Password" component = {RenderInput}/>
                    </div>

                    <button className="btn btn-primary" type="submit" disabled = {submitting}>Login</button>
                </div>
            </form>
    



export default reduxForm({
    form: 'loginForm', // a unique name for this form
    validate
}) (LoginForm);