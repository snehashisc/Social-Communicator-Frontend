import React from 'react';
import {ThemeContext} from './theme-context';
import { Carousel } from 'react-bootstrap';

class FriendSwiper extends React.Component  {

    static contextType = ThemeContext;
    render(){
        return (
            <div id={"friendCarousel" + this.context.swiper.id} className="carousel-friend slide" data-ride="false">
                <Carousel interval={null} controls={false} className="carousel-inner-friend">
                  <Carousel.Item>
                    <div className="item  active">
                            <div className= "row">
                                <div className= "col-sm-4">
                                    <span>{this.context.swiper.noofFriends}</span><br/>
                                    <span>Friends</span>
                                </div>  
                                <div className= "col-sm-4">
                                    <span>{this.context.swiper.noOfPhotos}</span><br/>
                                    <span>Photos</span>
                                </div> 
                                <div className= "col-sm-4">
                                    <span>{this.context.swiper.noOfVideos}</span><br/>
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
                    
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="item">
                            <p className="friend-about">
                                {this.context.swiper.aboutFriend}
                            </p>
                            <div className="friend-since">
                                <span>Friends Since:</span>
                                <div className="h6">{this.context.swiper.friendSince}</div>
                            </div>
                        </div>
                    
                  </Carousel.Item>
                  
                </Carousel>
                    

                   
           </div>
        );
    }       
};

export default FriendSwiper;