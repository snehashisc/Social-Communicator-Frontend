import React, { Fragment } from 'react';
import { HashRouter, Route, Switch , Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.scss';
import PrivateRoute from './common/authentication/Authenticator';
import Login from './component/login/Login';
import LoginForm from './component/login/LoginForm';
import Profile from './component/profileComp/ProfileComp';
import Header  from './common/header/Header.js';
import LeftSideBarMenu  from './common/leftSideBarMenu/LeftSideBarMenu.js';
import ChatMenuBar  from './common/chatMenu/chatMenuBar.js';

import FriendsGallery from './component/friends/FriendsGallery';
import PhotosGallery from './component/photosComp/PhotosGallery';
import VideosGallery from './component/videos/VideosGallery';
import Newsfeed from './component/newsfeed/Newsfeed';
class AppRouter extends React.Component  {

  render () {
      return(
        <Fragment>
          { this.props.login.isAuthenticated ? <div><Header /> <LeftSideBarMenu /> <ChatMenuBar /> <Profile/> </div> : null }        
          <HashRouter>
              <Switch>
                <Route path="/login" exact name="Login" component={LoginForm} />
                <Route path="/" exact name="Login" component={LoginForm} />
                <PrivateRoute path="/friendsList"  component={FriendsGallery} />
                <PrivateRoute path="/photosList"  component={PhotosGallery} />
                <PrivateRoute path="/videosList" component={VideosGallery} />
                <PrivateRoute path="/newsfeed" component={Newsfeed} />
              </Switch>
            </HashRouter> 
        </Fragment>

      
        )
    
  }
};

function mapStateToProps(state) {
  return {
      login: state.loginReducer
    }
}


export default connect(mapStateToProps) (AppRouter);
