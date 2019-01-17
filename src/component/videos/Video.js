import React from 'react';
import VideoModal from './VideoModal';
import { Player, BigPlayButton } from 'video-react';

const Video = (props) => {
    return (
        <div className=" col-4-width photo-album-item-wrap">
            <div className="photo-album-item1" data-target={"#myModal"+props.idVideo}>
                
                
                <Player className="test-hover1" poster={props.path} autoPlay={false}  muted={true} src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                    <BigPlayButton  position="center"/>
                </Player>


                <span className="image-content-more">More</span>
                <VideoModal modalId={"myModal"+props.idVideo}/>
                <div className= 'imgFooter_vidoe'> 
                    <h5>{props.title}</h5>
                    <span>Last Added: {props.published}</span>
                    <br/>
                    
                    <br/>
                    
                </div>
            </div>
             
        </div>
        
       
    );
};

/*<div className="image-content-video">
                        
                    </div>*/

export default Video;