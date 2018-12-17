import React from 'react';
import {ThemeContext} from './theme-context';


class FriendSwiper extends React.Component  {

    static contextType = ThemeContext;
    render(){
        return (
            <div id={"friendCarousel" + this.context.swiper.id} className="carousel slide" data-ride="false">
                <div className="carousel-inner">
                    <div className="item  active">
                        <div className= "row">
                            <div className= "col-sm-4">
                                <span>{this.context.swiper.noofFriends}</span>
                            </div>  
                            <div className= "col-sm-4">
                                <span>{this.context.swiper.noOfPhotos}</span>
                            </div> 
                            <div className= "col-sm-4">
                                <span>{this.context.swiper.noOfVideos}</span>
                            </div>   
                        </div>
                        <div className= "row title">
                            <div className= "col-sm-4">
                                <span>Friends</span>
                            </div>  
                            <div className= "col-sm-4">
                                <span>Photos</span>
                            </div> 
                            <div className= "col-sm-4">
                                <span>Videos</span>
                            </div>   
                        </div>
                        <div className= "row">
                            <div className="control-block-button">
                                 <a href="#" className="btn btn-control bg-blue">
                                    
                                 </a>
                                 <a href="#" className="btn btn-control bg-purple">
                                 </a>
                            </div>     
                         </div>
                    </div>
                    <div className="item">
                        <p className="friend-about">
                            {this.context.swiper.aboutFriend}
                        </p>
                        <div className="friend-since">
                            <span>Friends Since:</span>
                            <div className="h6">{this.context.swiper.friendSince}</div>
                        </div>
                    </div>
                </div>

                <ol className="carousel-indicators">
                    <li data-target={"#friendCarousel" + this.context.swiper.id} data-slide-to="0" className="active"></li>
                    <li data-target={"#friendCarousel" + this.context.swiper.id} data-slide-to="1"></li>
                </ol>
           </div>
        );
    }       
};

export default FriendSwiper;