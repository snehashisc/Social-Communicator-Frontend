import React ,{Fragment}from 'react';
import { Route } from 'react-router-dom';

import Timeline from '../timelineComp/Timeline';
import AboutPage from '../about/AboutPage';
import FriendsGallery from '../friends/FriendsGallery';
import PhotosGallery from '../photosComp/PhotosGallery';
import VideosGallery from '../videos/VideosGallery';

class DefaultLayout extends React.Component{ 
	render(){
		return(
			 <Fragment>
		      	<div className="container">
				  	<Route path="/" exact component={Timeline} />
                    <Route path="/about" exact component={AboutPage} />
                    <Route path="/friends" exact component={FriendsGallery} />
					<Route path="/photos" exact component={PhotosGallery} />
					<Route path="/videos" exact component={VideosGallery} />
                </div>
		    </Fragment>
		)
	}
}

export default DefaultLayout
    
