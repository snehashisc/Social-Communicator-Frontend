import React from 'react';
import { Player, BigPlayButton } from 'video-react';

const VideoModal = (props) => {
    return (
             <div className="container">
                 <div className="modal" id= {props.modalId}>
                    <div className="modal-dialog modal-lg">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <div className="modal-body">
                                <div className="open-photo-thumb">
                                    <Player className = "test-hover" poster={props.path}  autoPlay="true" playsInline="true" muted="true" src={props.videoPath}/>
                                </div>
                            </div>
                    </div>
                 </div>
            </div>
    );
};

export default VideoModal;