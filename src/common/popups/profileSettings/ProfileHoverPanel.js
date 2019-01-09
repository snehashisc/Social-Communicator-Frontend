import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Panel ,ListGroup, ListGroupItem} from 'react-bootstrap';
import './ProfileHoverPanel.scss';

var yourAccount = [
    {
        path: '/',
        "name":"Profile Settings",
        imagePath : require("../../../images/crossIcon.png")
    },
    {
        path: '/',
        "name":"Create Fav Page",
        imagePath : require("../../../images/crossIcon.png")
    },
    {
        path: '/',
        "name":"Log Out",
        imagePath : require("../../../images/crossIcon.png")
    }
]
var aboutOlympus = [
    {
        path: '/',
        "name":"Terms and Conditions",
        imagePath :""
    },
    {
        path: '/',
        "name":"FAQs",
        imagePath :""
    },
    {
        path: '/',
        "name":"Carrers",
        imagePath :""
    },
    {
        path: '/',
        "name":"Contacts",
        imagePath :""
    }

]

/*

<Panel>
				  	<Panel.Heading>Panel heading</Panel.Heading>
				  	<Panel.Body>Some default panel content here.</Panel.Body>
				  		<ListGroup>
					    	<ListGroupItem>Item 1</ListGroupItem>
					    	<ListGroupItem>Item 2</ListGroupItem>
					    	<ListGroupItem>&hellip;</ListGroupItem>
					  	</ListGroup>
				  	<Panel.Body>Some more panel content here.</Panel.Body>
				</Panel>
*/

class profileHoverPanel extends React.Component {
    render() {
        return (
        	<Fragment>
				<YourAccount heading="Your Account" data={yourAccount}/>
               	<YourAccount heading="About olympus" data={aboutOlympus}/>
			</Fragment>
        )
    }
};


class YourAccount extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        var listItems = this.props.data.map(function(data, index){
            return (
                <li className="nav-item leftmenu-details" key={data.name}  >
                    <Link to={data.path}> 
                        {
                            data.imagePath && <img src={data.imagePath} alt='' /> 
                        }
                    </Link>
                    <span className="nav-link active sideBarTitle1" href="/">{data.name}</span>
                </li>
            );
        },this);
        console.log(this.props.data)
        return(
            <Fragment>
                <div className="main-section-mobile">{this.props.heading}</div>
                {listItems}
            </Fragment>
        )
    }
}

export default profileHoverPanel;
