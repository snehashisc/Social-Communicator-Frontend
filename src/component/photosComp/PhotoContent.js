import React from 'react';
import LikesAndShares from '../../common/socialPostSection/LikesAndShares';
import FriendsComments from '../../common/socialPostSection/FriendsComments';
import EnterComment from '../../common/socialPostSection/EnterComment';
import '../../common/socialPostSection/_socialPostSection.scss';
import AuthorPost from '../../common/socialPostSection/AuthorPost';

class PhotoContent extends React.Component {
    
    render() {
    return (
            <div className="open-photo-content">
                <AuthorPost/>
                <LikesAndShares/>                
                <FriendsComments/>  
                <EnterComment/> 
        </div>                  
        );
    }
};

export default PhotoContent;
