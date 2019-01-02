import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends React.Component {
    render ({ component: Component, ...rest }) {
        console.log ("inside authenticator.....")
        return (
            <Route {...rest} render={props => (
                this.props.login.isAuthenticated === true   
                    ? <Component {...props} />
                    : <Redirect to= '/login' />
            )} />
        );
    }
}
    


function mapStateToProps(state) {
    return {
        login: state.loginReducer
      }
  };

  export default connect(mapStateToProps) (PrivateRoute);