import React from  'react';
import Friend from './Friend';
import './friends.scss';
import {connect} from 'react-redux';



class FriendsGallery extends React.Component {
    // constructor(){
    //     super();
    // }
    
    // componentDidMount() {
    //    //this.props.dispatch(aboutActions.getAbout());
    //    this.props.getFriends();
    //  }



    render() {
        const {friends} = this.props;
        console.log("Friends",friends)
        return (
            <div className="container">
                <div className = "row">
                    <div className= "col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 friend-background">
                        {
                            friends.map((friend, index) => {
                                return <Friend  key={index} path= {friend.path} friend={friend}/>
                            })
                        }   
                    </div>                
                </div>  
             </div> 
        );
    }
}

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer
  }
}




export default connect(mapStateToProps)(FriendsGallery);