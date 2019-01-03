import React, { Fragment } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Profile from './component/profileComp/ProfileComp';
import Header  from './common/header/Header.js';
import LeftSideBarMenu  from './common/leftSideBarMenu/LeftSideBarMenu.js';
import ChatMenuBar  from './common/chatMenu/chatMenuBar.js';

import FriendsGallery from './component/friends/FriendsGallery';
import PhotosGallery from './component/photosComp/PhotosGallery';
import VideosGallery from './component/videos/VideosGallery';

import CalenderAndEvents from './component/calenderAndEvents/CalenderAndEvents';



const AppRouter = () => (
  <Fragment>
    <Header />
    <LeftSideBarMenu />
    <ChatMenuBar />
    <HashRouter>
        <Switch>
          <Route path="/" exact name="Home" component={Profile} />
          <Route path="/friendsList" exact name="FriendsGallery" component={FriendsGallery} />
          <Route path="/photosList" exact name="PhotosGallery" component={PhotosGallery} />
          <Route path="/videosList" exact name="VideosGallery" component={VideosGallery} />
          <Route path="/calenderAndEvents" exact name="CalenderAndEvents" component={CalenderAndEvents} />
        </Switch>
		  </HashRouter> 
  </Fragment>
);


export default AppRouter;
