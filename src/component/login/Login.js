import React from 'react';
import { Link , Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  withRouter
} from 'react-router-dom';

import { Field, reduxForm } from 'redux-form';


class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/home' } }
        
        console.log(this.props.login.isAuthenticated,'>>>>>>>>>')

        if (this.props.login.isAuthenticated === true) {
          return <Redirect to={from} />
        }

        const { username, password} = this.state;

        const { handleSubmit, pristine, reset, submitting } = this.props



        return (
            <div className="col-md-6 col-md-offset-3 login-form">
                <h2>Login</h2>
                
                
                      <div className={'form-group' + (this.props.login.submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                        {this.props.login.submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (this.props.login.submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        {this.props.login.submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                      <div className="form-group">
                            <button className="btn btn-primary" onClick={this.props.handleSubmit.bind (this, this.state)}>Login</button>
                            <Link to="/register" className="btn btn-link">Register</Link>
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

//<form onSubmit={this.props.handleSubmit.bind (this, this.state)}>
const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (cred) => dispatch ({type: "LOGIN", cred: cred})
    }
}


Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);


export default reduxForm({
    form: 'login' // a unique name for this form
})(Login);

//export default connect(mapStateToProps, mapDispatchToProps)(Login);
