import React, { Fragment } from 'react';
import './App.scss';

import Header  from './common/header/Header.js';
import LeftSideBarMenu  from './common/leftSideBarMenu/LeftSideBarMenu.js';
import ChatMenuBar  from './common/chatMenu/chatMenuBar.js';

const AppRouter = () => (
  <Fragment>
    <Header />
    <LeftSideBarMenu />
    <ChatMenuBar />
  </Fragment>
);


export default AppRouter;
