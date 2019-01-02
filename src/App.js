import React, { Fragment } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import './App.scss';
import PrivateRoute from './common/authentication/Authenticator';
import Login from './component/login/Login';
import Profile from './component/profileComp/ProfileComp';
import Header  from './common/header/Header.js';
import LeftSideBarMenu  from './common/leftSideBarMenu/LeftSideBarMenu.js';
import ChatMenuBar  from './common/chatMenu/chatMenuBar.js';

import FriendsGallery from './component/friends/FriendsGallery';
import PhotosGallery from './component/photosComp/PhotosGallery';
import VideosGallery from './component/videos/VideosGallery';


const AppRouter = () => (
  <Fragment>
    
    <HashRouter>
        <Switch>
          
          <Route path="/" exact name="Login" component={Login} />
          <PrivateRoute path="/home"  component={Profile} />
          <PrivateRoute path="/friendsList"  component={FriendsGallery} />
          <PrivateRoute path="/photosList"  component={PhotosGallery} />
          <PrivateRoute path="/videosList" component={VideosGallery} />
        </Switch>
		  </HashRouter> 
  </Fragment>
);

/*
  <Header />
  <LeftSideBarMenu />
  <ChatMenuBar />
    <Route path="/login" exact name="Login" component={Login} />
    <Route path="/" exact name="Login" component={Login} />
*/


export default AppRouter;
