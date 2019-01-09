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

