import React from 'react';
import '../photosComp/_photo.scss';

const Video = (props) => {
    return (
        <div className=" col-4-width photo-album-item-wrap">
            <div className="photo-album-item">
                <video  width="255" height="240" controls>
                    <source src={props.path} type="video/mp4" />
                  </video>  
                
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

export default Video;