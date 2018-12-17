import React from 'react';
import '../photosComp/_photo.scss';
import { Player } from 'video-react';


const Video = (props) => {
    return (
        <div className=" col-4-width photo-album-item-wrap">
            <div className="photo-album-item">
                <div className="image-content">
                        <span className="image-content-more">More</span>
                </div>
                <img className = "test-hover1" src={props.path} alt="Italian Trulli" />
                <Player playsInline poster="/assets/poster.png" src="https://www.youtube.com/watch?v=excVFQ2TWig"/>
                    
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