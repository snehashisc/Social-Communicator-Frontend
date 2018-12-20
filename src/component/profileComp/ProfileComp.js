import React,{Fragment} from 'react';

import ProfileRoutes from './ProfileRoutes.js';
import { Link } from 'react-router-dom';


import './ProfileComp.scss';

class Profile extends React.Component {
	constructor(props){
		super(props);
        console.log(`${props.match.url}`,'>>>',props)
		this.state = null;
	};
	render() {
		return (
            <Fragment>
				<div className="container">
                    <div className = "row">
                        <div className = "col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className = "ui-block profile">
                                <div className ="top-header">
                                    <div className ="top-header-thumb">
                                        <img src={require("../../images/top-header1.jpg")} alt="coverpic"/>
                                    </div>
                                    <div className="profile-section">
                                        <div className="row">
                                            <div className="col col-lg-5 col-md-5 col-sm-12 col-12">
                                                <ul className="profile-menu">
                                                    <li className="active">
                                                        <Link to={ `${this.props.match.url}/timeline` }>Timeline </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={ `${this.props.match.url}/about`}>About </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={ `${this.props.match.url}/friends` }>Friends </Link>
                                                    </li>
                                                </ul>
							                </div>
                                            <div className="col col-lg-5 ml-auto col-md-5 col-sm-12 col-12">
                                                <ul className="profile-menu">
                                                    <li>
                                                        <Link to={ `${this.props.match.url}/photos`}> Photos</Link>
                                                    </li>
                                                    <li>
                                                        <Link to={ `${this.props.match.url}/videos`}> Videos</Link>
                                                    </li>
                                                    <li>
                                                        {/*<div class="more">
                                                            <ul class="">
                                                                <li>
                                                                    <a href="#">Report Profile</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Block Profile</a>
                                                                </li>
                                                            </ul>
                                                        </div>*/}
                                                    </li>
                                                </ul>
    							            </div>
                                        </div>
                                    </div>
                                    <div className="top-header-author">
                						<a href="#a"className="author-thumb">
                							<img src={require('../../images/author-main1.jpg')} alt="author" />
                						</a>
                						<div className="author-content">
                							<a href="#a" className="h4 author-name">James Spiegel</a>
                							<div className="country">San Francisco, CA</div>
                						</div>
        					       </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ProfileRoutes {...this.props} />
            </Fragment>
		);
	}
}
export default Profile;
