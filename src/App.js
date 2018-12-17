import React, { Fragment } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Profile from './component/profileComp/ProfileComp';
import Header  from './common/header/Header.js';
import LeftSideBarMenu  from './common/leftSideBarMenu/LeftSideBarMenu.js';
import ChatMenuBar  from './common/chatMenu/chatMenuBar.js';

const AppRouter = () => (
  <Fragment>
    <Header />
    <LeftSideBarMenu />
    <ChatMenuBar />
    <HashRouter>
        <Switch>
          <Route path="/" name="Home" component={Profile} />
        </Switch>
		  </HashRouter> 
  </Fragment>
);


export default AppRouter;
