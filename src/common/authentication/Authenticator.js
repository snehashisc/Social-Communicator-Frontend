import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     this.props.login.isAuthenticated === true
//       ? <Component {...props} />
//       : <Redirect to='/' />
//   )} />
// )

class PrivateRoute extends React.Component {
    constructor(props) {
        super(props);
        console.log(props,'>><><><><');
    }
    render(){
        return(
            <Route render={(props) => (
            this.props.login.isAuthenticated === true
              ? <this.props.component {...props} />
              : <Redirect to='/' />
          )} />
        )
    }
}

function mapStateToProps(state) {
    return {
        login: state.loginReducer
    }
};

export default connect(mapStateToProps) (PrivateRoute);
