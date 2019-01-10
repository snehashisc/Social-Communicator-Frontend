import React from 'react';
import { Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {RenderInput} from '../../common/forms/CreateFormField';
import {
  BrowserRouter as Router,
  Route,
  withRouter
} from 'react-router-dom';


// const validate = values => {
//     const errors = {};
//     if (!values.username) {
//         errors.username = "Usename is required"
//     }

//     if (!values.password) {
//         errors.password = "Password is required"
//     }
//     return errors;
// }
let alertDetails = values => alert (JSON.stringify(values));
const Registartion = (props) => {
    const {handleSubmit, submitting} = props;
 return (
                 <form onSubmit = {handleSubmit(alertDetails)}>
                    <div className="registration-form-fill">
                        <h1> Create a new account </h1>
                        <div className = "">
                            <Field  name= "firstName" placeHolder="First Name"  component = {RenderInput}/>
                        </div>
                        <div className = "">
                            <Field  name= "lastName" placeHolder="Last Name"  component = {RenderInput}/>
                        </div>

                        <div className = "">
                            <Field  name= "emailOrMobile" placeHolder="Email or Mobile Number"  component = {RenderInput}/>
                        </div>

                        <div className = "">
                            <Field  name= "reEmailOrMobile" placeHolder="Reenter Email or Mobile Number"  component = {RenderInput}/>
                        </div>

                        <div className = "">
                            <Field  name= "newPassword" placeHolder="New Password"  component = {RenderInput}/>
                        </div>
    

                        <button className="btn btn-success registration-button" type="submit" disabled = {submitting}>Sign up</button>
                    </div>
                </form>

 )
}

export default reduxForm({
    form: 'registartion' // a unique name for this form
    
})(Registartion);

