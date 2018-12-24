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

import NewsFeed from './component/newsfeed/Newsfeed.js';

const AppRouter = () => (
  <Fragment>
    <Header />
    <LeftSideBarMenu />
    <ChatMenuBar />
    <HashRouter>
        <Switch>
          <Route path="/" exact name="Home" component={Profile} />
          <Route path="/newsfeed" exact name="FriendsGallery" component={NewsFeed} />
          <Route path="/photosList" exact name="PhotosGallery" component={PhotosGallery} />
          <Route path="/videosList" exact name="VideosGallery" component={VideosGallery} />
        </Switch>
		  </HashRouter> 
  </Fragment>
);


export default AppRouter;
