import React from 'react';
import LikesAndShares from '../../common/socialPostSection/LikesAndShares';
import FriendsComments from '../../common/socialPostSection/FriendsComments';
import EnterComment from '../../common/socialPostSection/EnterComment';
import '../../common/socialPostSection/_socialPostSection.scss';
import AuthorPost from '../../common/socialPostSection/AuthorPost';
import { Player, BigPlayButton } from 'video-react';
import './video.scss';

class LatestVideo extends React.Component {
    
    render() {
    return (
            <div className="container">
            	<div className=" col-sm-6 ">
            		<Player className="test-hover" poster="https://www.w3schools.com/images/w3schools_green.jpg" autoPlay={false}  muted={true} src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                        <BigPlayButton  position="center"/>
                    </Player>
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
