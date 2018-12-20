import React from 'react';
import LikesAndShares from '../../common/socialPostSection/LikesAndShares';
import FriendsComments from '../../common/socialPostSection/FriendsComments';
import EnterComment from '../../common/socialPostSection/EnterComment';
import '../../common/socialPostSection/_socialPostSection.scss';
import AuthorPost from '../../common/socialPostSection/AuthorPost';
import { Player } from 'video-react';

class LatestVideo extends React.Component {
    
    render() {
    return (
            <div className="container">
            	<div className=" col-sm-6 ">
            		<Player className = "test-hover"  autoPlay={true} playsInline={true} muted={true} src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
            	</div>
            	<div className=" col-sm-6 ">
	                <AuthorPost/>
	                <LikesAndShares/>                
	                <FriendsComments/>  
	                <EnterComment/> 
                </div>
        	</div>                  
        );
    }
};

export default LatestVideo;
