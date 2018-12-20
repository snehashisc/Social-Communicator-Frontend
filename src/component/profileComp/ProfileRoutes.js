import React ,{Fragment}from 'react';
import { Route, Switch } from 'react-router-dom';

import Timeline from '../timelineComp/Timeline';
import AboutPage from '../about/AboutPage';
import FriendsGallery from '../friends/FriendsGallery';
import PhotosGallery from '../photosComp/PhotosGallery';
import VideosGallery from '../videos/VideosGallery';

class DefaultLayout extends React.Component{ 
	constructor(props){
		super(props);
		console.log('This.props',props)
	}
	render(){
		return(
			 <Fragment>
                <Switch> 
                    <Route exact path={ this.props.match.path } component= { Timeline  } />
                    <Route path={ `${this.props.match.path}/timeline`} component= { Timeline  } />
                    <Route path={ `${this.props.match.path}/about`} component={AboutPage } />
                    <Route path={ `${this.props.match.path}/friends` } component={FriendsGallery} />
                    <Route path={ `${this.props.match.path}/photos`} component={PhotosGallery}  />
                    <Route path={ `${this.props.match.path}/videos`} component={VideosGallery}  />
                </Switch>
		    </Fragment>
		)
	}
}

export default DefaultLayout

// <Route path={ `${this.props.match.path}/timeline`} component= { Timeline  } />
//                     <Route path={ `${this.props.match.path}/about`} component={AboutPage } />
//                     <Route path={ `${this.props.match.path}/friends` } component={FriendsGallery} />
//                     <Route path={ `${this.props.match.path}/photos`} component={PhotosGallery}  />
//                     <Route path={ `${this.props.match.path}/videos`} component={VideosGallery}  />