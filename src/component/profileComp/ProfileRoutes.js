import React ,{Fragment}from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from '../../common/authentication/Authenticator';
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
				  	<Route exact path="/timeline" component={Timeline} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/friends" component={FriendsGallery} />
					<Route exact path="/photos" component={PhotosGallery} />
					<Route exact path="/videos" component={VideosGallery} />
                </div>
		    </Fragment>
		)
	}
}

export default DefaultLayout
    
