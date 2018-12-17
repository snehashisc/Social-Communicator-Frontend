import React from 'react';
import FriendAvatar from './FriendAvatar';
import FriendSwiper from './FriendSwiper';
import MoreFeatures from './MoreFeatures';
import './friends.scss';

const FriendContent = (props) => {
    return (
        <div className="friend-item-content"> 
        	<MoreFeatures />
            <FriendAvatar />
            <FriendSwiper />
        </div>
    );
};


export default FriendContent;