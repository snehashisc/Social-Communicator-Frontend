import React from 'react';
import {ThemeContext} from './theme-context';

class FriendAvatar extends React.Component  {

    static contextType = ThemeContext;
    render(){
        return (
        	<div className="friend-avatar">
        		<div className="author-thumb">
                    <img src={this.context.avatar.path} alt="Italian Trulli" ></img>
            	</div>
            	<div className="author-content">
            		<a href="#" className="h5 author-name">{this.context.avatar.name}</a>
    				<div className="country">{this.context.avatar.country}</div>
            	</div>
            </div>	
        );
    } 
};

export default FriendAvatar;