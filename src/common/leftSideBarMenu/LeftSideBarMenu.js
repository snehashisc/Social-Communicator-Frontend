import React from 'react';

import './_leftSideBarMenu.scss';

import { Navbar} from 'react-bootstrap';

import FriendsGallery from '../../component/friends/FriendsGallery';
import PhotosGallery from '../../component/photosComp/PhotosGallery';
import VideosGallery from '../../component/videos/VideosGallery';


import { Link } from 'react-router-dom';

const leftSidebarRoutes = [
  { path: '/', exact: true, name: 'Collapse Menu', component: "Header" , imagePath : require("../../images/crossIcon.png") },
  { path: '/friendsList', exact: true, name: 'NewsFeed', component: {FriendsGallery} , imagePath : require("../../images/newsfeed.png") },
  { path: '/videosList', exact: true, name: 'Fav Pages Feed', component: {VideosGallery} , imagePath : require("../../images/star.png") },
  { path: '/photosList', exact: true, name: 'FriendGroups', component: {PhotosGallery} , imagePath : require("../../images/conference.png") },
  { path: '/', exact: true, name: 'Music & Playlits', component: "Header" , imagePath : require("../../images/headphones.png") },
  { path: '/', exact: true, name: 'Weather App', component: "Header" , imagePath : require("../../images/storm.png") },
  { path: '/', exact: true, name: 'Calendar and Events', component: "Header" , imagePath : require("../../images/calendar.png") },
  { path: '/', exact: true, name: 'Community Badges', component: "Header" , imagePath : require("../../images/calendar.png") },
  { path: '/', exact: true, name: 'Friends Birthdays', component: "Header" , imagePath : require("../../images/birthday.png") },
  { path: '/', exact: true, name: 'Account Stats', component: "Header" , imagePath : require("../../images/statistics.png") },
  
];

class LeftSideBarMenu extends React.Component {
    constructor(){
        super();
        this.state = {
            defaultSidebarOpenStatus : false,
            routeData : leftSidebarRoutes
        }
    }

    render() {
        return (
            <Navbar fluid className="alignSidebar"  >
                <SideBarRendering listData={this.state.routeData} />
            </Navbar>
        )
    }
};


class SideBarRendering extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {addClass: false}
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(i) {
        
        if(i === 0){
            this.setState({addClass: !this.state.addClass});
        }else{
            console.log(i,'menu index item')
        }
    }

    render () {
        let boxClass = ["sidebar"];
        if(this.state.addClass) {
          boxClass.push('green');
        }
        var listItems = this.props.listData.map(function(data, index){
            return (
                <li className="nav-item leftmenu" key={data.name} >
                    <Link to={data.path}> 
                        <img src={data.imagePath} alt='' />
                    </Link>
                    
                    { this.state.addClass &&
                        <span className="nav-link active sideBarTitle" href="/">{data.name}</span>
                    }
                </li>
            );
        },this);

        return (
            <div className={boxClass.join(' ')}>
                <ul className="nav flex-column leftMenuDetails">
                    {listItems}
                </ul>
            </div>
        );
    }
};

//onClick={this.handleClick.bind(null,index)} 
export default LeftSideBarMenu;
