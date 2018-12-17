import React from 'react';

import chatMenuBarScss from './chatMenuBar.scss';

import {Nav, NavItem, Navbar, NavDropdown, MenuItem, Glyphicon} from 'react-bootstrap';

const leftSidebarRoutes = [
  { path: '/', exact: true, name: 'Caroll Summers', component: "Header" , imagePath : require("../../images/avatar67-sm.jpg") },
  { path: '/', exact: true, name: 'Mathilda Blinker', component: "Header" , imagePath : require("../../images/avatar62-sm.jpg") },
  { path: '/', exact: true, name: 'Micheal Maximoff', component: "Header" , imagePath : require("../../images/avatar68-sm.jpg") },
  { path: '/', exact: true, name: 'Jr Caroll Summers', component: "Header" , imagePath : require("../../images/avatar69-sm.jpg") },
  { path: '/', exact: true, name: 'Rachell Howlet', component: "Header" , imagePath : require("../../images/avatar70-sm.jpg") }
];

class chatMenuBar extends React.Component {
    constructor(){
        super();
        this.state = {
            defaultSidebarOpenStatus : false,
            routeData : leftSidebarRoutes
        }
    }

    render() {
        return (
            <Navbar fluid className="alignChatMenu"  >
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
        let boxClass = ["sidebar1"];
        if(this.state.addClass) {
          boxClass.push('green1');
        }
        var listItems = this.props.listData.map(function(data, index){
            return (
                <li className="nav-item leftmenu1" key={data.name} onClick={this.handleClick.bind(null,index)} >
                    <img src={data.imagePath} alt='' />
                    {this.state.addClass &&
                        <span className="nav-link active sideBarTitle1" href="/">{data.name}</span>
                    }
                </li>
            );
        },this);

        return (
            <div className={boxClass.join(' ')}>
                <ul className="nav flex-column leftMenuDetails1">
                    {listItems}
                </ul>
            </div>
        );
    }
};

export default chatMenuBar;
