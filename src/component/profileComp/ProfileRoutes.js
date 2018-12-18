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
				  	<Route path="/" component={Timeline} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/friends" component={FriendsGallery} />
					<Route path="/photos" component={PhotosGallery} />
					<Route path="/videos" component={VideosGallery} />
                </div>
		    </Fragment>
		)
	}
}

export default DefaultLayout
    
