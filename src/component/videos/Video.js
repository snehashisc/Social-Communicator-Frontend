import React from 'react';
import '../photosComp/_photo.scss';
import { Player, BigPlayButton } from 'video-react';


const Video = (props) => {
    return (
        <div className=" col-4-width photo-album-item-wrap">
            <div className="photo-album-item">
                <div className="image-content">
                        <span className="image-content-more">More</span>
                </div>
                
                <Player
                  className = "test-hover"
                  poster={props.path}
                  src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                >
                    <BigPlayButton position="center" />
                </Player>
            </div>
            <div className= 'imgFooter'> 
                <h5>{props.title}</h5>
                <span>Last Added: {props.published}</span>
                <br/>
                
                <br/>
                
            </div> 
        </div>
        
       
    );
};
// <video  width="255" height="240" controls>
//                     <source src="https://www.youtube.com/watch?v=excVFQ2TWig" type="video/mp4" />
//                   </video>  


export default Video;