import React,{Fragment} from 'react';

import ProfileRoutes from './ProfileRoutes.js';
import { Link } from 'react-router-dom';
import Header  from '../../common/header/Header.js';
import LeftSideBarMenu  from '../../common/leftSideBarMenu/LeftSideBarMenu.js';
import ChatMenuBar  from '../../common/chatMenu/chatMenuBar.js';
import './ProfileComp.scss';



import Timeline from '../timelineComp/Timeline';
import AboutPage from '../about/AboutPage';
import FriendsGallery from '../friends/FriendsGallery';
import PhotosGallery from '../photosComp/PhotosGallery';
import VideosGallery from '../videos/VideosGallery';


var tabList = [
    { 'id': 1, 'name': 'Timeline', 'url': '/timeline' },
    { 'id': 2, 'name': 'About', 'url': '/about' },
    { 'id': 3, 'name': 'Friends', 'url': '/friends' },
];

var tabList2 = [
    { 'id': 4, 'name': 'Photos', 'url': '/photos' },
    { 'id': 5, 'name': 'Videos', 'url': '/videos' },
];



class Profile extends React.Component {
	constructor(){
		super();
        this.state = {
            tabList: tabList,
            tabList2: tabList2,
            currentTab: 1
        };
        this.changeTab = this.changeTab.bind(this);
	};

    changeTab(tab) {
        console.log(tab,'tab')
        this.setState({ currentTab: tab.id });
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
                                                <Tabs
                                                    currentTab={this.state.currentTab}
                                                    tabList={this.state.tabList}
                                                    changeTab={this.changeTab}
                                                />
							                </div>
                                            <div className="col col-lg-5 ml-auto col-md-5 col-sm-12 col-12">
                                                <Tabs
                                                    currentTab={this.state.currentTab}
                                                    tabList={this.state.tabList2}
                                                    changeTab={this.changeTab}
                                                />
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
                <Content currentTab={this.state.currentTab} />
            </Fragment>
		);
	}
}

class Tab extends React.Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        e.preventDefault();
        this.props.handleClick();
    };
    
    render(){
        return (
            <li className={this.props.isCurrent ? 'current' : null}>
                <a onClick={this.handleClick} href={this.props.url}>
                    {this.props.name}
                </a>
            </li>
        );
    }
};

class Tabs extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(tab){
        this.props.changeTab(tab);
    };
    
    render(){
        return (
            <nav>
                <ul className="profile-menu">
                {this.props.tabList.map(function(tab) {
                    return (
                        <Tab
                            handleClick={this.handleClick.bind(this, tab)}
                            key={tab.id}
                            url={tab.url}
                            name={tab.name}
                            isCurrent={(this.props.currentTab === tab.id)}
                         />
                    );
                }.bind(this))}
                </ul>
            </nav>
        );
    }
};


class Content extends React.Component {

    render(){
        return(
            <div className="container content">
                {this.props.currentTab === 1 ?
                <Timeline/>
                :null}

                {this.props.currentTab === 2 ?
                <AboutPage/>
                :null}

                {this.props.currentTab === 3 ?
                <FriendsGallery/>
                :null}

                {this.props.currentTab === 4 ?
                <PhotosGallery/>
                :null}

                {this.props.currentTab === 5 ?
                <VideosGallery/>
                :null}
            </div>
        );
    }
};

	export default Profile;
