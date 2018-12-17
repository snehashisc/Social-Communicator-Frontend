import React from 'react';

export const ThemeContext = React.createContext({
    "friend":{
	    "avatar": {
	        "name":"Nicholas Grissom",
	        "country":"San Francisco, CA",
	        "path": require("../../images/avatar5.jpg")
	     },
	     "swiper": {
	        "noofFriends":"3",
	        "noOfPhotos":"6",
	        "noOfVideos": 10,
	        "friendSince": "December 2014",
            "aboutFriend": "Hi!, I’m Marina and I’m a Community Manager for “Gametube”. Gamer and full-time mother."
	    }
	    
	}    
});