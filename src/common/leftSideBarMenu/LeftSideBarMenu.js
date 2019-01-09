import React , { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Image } from 'react-bootstrap';
import Media from 'react-media';


import ProfileHoverPanel from '../popups/profileSettings/ProfileHoverPanel.js';


import './_leftSideBarMenu.scss';

const leftSidebarRoutes = [
  { path: '/', exact: true, name: 'Collapse Menu', imagePath : require("../../images/crossIcon.png") },
  { path: '/friendsList', exact: true, name: 'NewsFeed' , imagePath : require("../../images/newsfeed.png") },
  { path: '/videosList', exact: true, name: 'Fav Pages Feed', imagePath : require("../../images/star.png") },
  { path: '/photosList', exact: true, name: 'FriendGroups' , imagePath : require("../../images/conference.png") },
  { path: '/', exact: true, name: 'Music & Playlits', imagePath : require("../../images/headphones.png") },
  { path: '/', exact: true, name: 'Weather App', imagePath : require("../../images/storm.png") },
  { path: '/', exact: true, name: 'Calendar and Events', imagePath : require("../../images/calendar.png") },
  { path: '/', exact: true, name: 'Community Badges', imagePath : require("../../images/calendar.png") },
  { path: '/', exact: true, name: 'Friends Birthdays', imagePath : require("../../images/birthday.png") },
  { path: '/', exact: true, name: 'Account Stats', imagePath : require("../../images/statistics.png") },
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
                <li className="nav-item leftmenu" key={data.name}  >
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
            <Fragment>
                
                <div className={boxClass.join(' ')}>
                    
                    <div className="main-logo-container">
                        <Image  src = "../images/logo.png" 
                            bsStyle = "default" 
                            className = "mainLogo clear" 
                            onClick={this.handleClick.bind(null,0)}
                        />
                        { this.state.addClass &&
                            <span className="nav-link active sideBarTitle main-title">Olympus</span>
                        }
                    </div>
                    { 
                        this.state.addClass &&
                        <Media
                            query="(max-width: 768px)"
                            render={() => 
                                <ul className="nav flex-column leftMenuDetails">
                                    <li>
                                        <span className="profile-details">
                                            <img src={require('../../images/author-page.jpg')} alt='' 
                                                className="profileIcon-mobile" />
                                            <span>
                                                <span className="author-name-mobile">James Spiegel  </span><br />
                                                <span className="autherSubTitle-mobile">Space Cowboy </span>
                                            </span>
                                        </span>
                                        <div className="main-section-mobile">Main Sections</div>
                                    </li>

                                    {listItems}

                                    <ProfileHoverPanel />
                                    
                                </ul>
                            }
                        />
                    }

                    
                    <Media
                        query="(min-width: 768px)"
                        render={() => 
                            <ul className="nav flex-column leftMenuDetails">
                                {listItems}
                            </ul>
                        }
                    />
                </div>
            </Fragment>

        );
    }
};



/*

    <li className="nav-item leftmenu" onClick={this.handleClick.bind(null,0)}>
                        <a href="#/">
                            <Image  src = "../images/logo.png" 
                                bsStyle = "default" 
                                className = "mainLogo clear" 
                            />
                            { this.state.addClass &&
                                <span className="nav-link active sideBarTitle main-title">Olympus</span>
                            }
                        </a>
                    </li>
*/
export default LeftSideBarMenu;
