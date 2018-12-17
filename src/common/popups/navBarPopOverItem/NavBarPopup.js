/*
    Author: Ananth Kumar D
    Purpose: Creating a component which will be used for FriendRequestPopup Component
*/

import React, { Fragment } from 'react';

import { ButtonToolbar , Button ,Popover} from 'react-bootstrap'

//lg , md , sm ,xs

import './NavBarPopup.scss';

const data = [
  { name: 'Tamra Romanoff', content:"Mutual Friend:Sarah HetField" , imagePath : require("../../../images/avatar55-sm.jpg") },
  { name: 'Tony Stevens', content:"4 Friends in Common" , imagePath : require("../../../images/avatar56-sm.jpg")},
  { name: 'Mary Jain Stark', content:"4 Friends in Common" , imagePath : require("../../../images/avatar57-sm.jpg")},
  { name: 'Stagg Clothing', content:"9 Friends in Common" , imagePath : require("../../../images/avatar58-sm.jpg")},
  { name: 'Mary Jain Stark', content:"4 Friends in Common" , imagePath : require("../../../images/avatar57-sm.jpg")},
  { name: 'Stagg Clothing', content:"9 Friends in Common" , imagePath : require("../../../images/avatar58-sm.jpg")}
];

class FriendRequestPopup extends React.Component {
    constructor(){
        super();
        this.state = {
            defaultSidebarOpenStatus : false,
            routeData : data
        }
    }
    render() {
        
        return (
            <Fragment>
                
			    <Popover
                    placement="right"
                    
                    positionTop={50}
                    id="popover-positioned-bottom"
                    className="mainPopOverContainer"
                >
                    <div className="navBarHeadingContainer">
                        <span>{this.props.heading}</span>
                        <span>{this.props.title}</span>
                        <span>{this.props.settings}</span>
                    </div>
                    <SideBarRendering 
                        listData = {this.state.routeData}
                        buttonColorDetails = {this.props.buttonColor}
                        buttonTextDetails = {this.props.buttonText}
                    />
                </Popover>
            </Fragment>
        );
    }
}



class SideBarRendering extends React.Component {
    
    constructor(props){
        super(props)
    }
    render () {
        
        var listItems = this.props.listData.map(function(data, index){
            return (
                <li className="nav-item friendContainer" key={index} >   
                    <img src={data.imagePath} alt='' />
                    <div className="detailsView">
                        <span className="nav-link active userName" href="/">{data.name}</span><br/>
                        <span className="nav-link active description" href="/">{data.content}</span>
                    </div>
                    <div className="requestContainer">
                        

                        <a className="acceptRequest">
                            <span className="glyphicon glyphicon-plus">
                            </span>
                        </a>
                        <a className="rejectRequest">
                            <span className="glyphicon glyphicon-minus">
                            </span>
                        </a>
                        <span className="glyphicon glyphicon-remove">
                        </span>
                    </div>
                </li>
            );
        },this);

        return (
            <Fragment>
                <ul className="nav flex-column popUpContainer">
                    {listItems}
                </ul>
                <ButtonToolbar className="eventsButton" >
                    <Button bsStyle="primary" style={{background:this.props.buttonColorDetails}}>{this.props.buttonTextDetails}</Button>
                </ButtonToolbar>
            </Fragment>
        );
    }
};
export default FriendRequestPopup;