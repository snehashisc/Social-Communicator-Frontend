import React from 'react';
import { Player, BigPlayButton } from 'video-react';



const VideoModal = (props) => {
    console.log (props.modalId);
    return (
             <div className="container">
                 <div className="modal" id= {props.modalId}>
                    <div className="modal-dialog modal-lg">
                         <div className="modal-content">        
                             <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                             </div>
    
                            <div className="modal-body">
                                <div className="open-photo-thumb">
                                    <Player className = "test-hover" poster={props.path} src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                                            <BigPlayButton position="center" />
                                    </Player>
                                </div>
                                <div className="open-photo-text-container">
                                    
                                </div>
                            </div>
                            

                            <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
        
                         </div>
                    </div>
                 </div>
            </div>
    );
};

export default VideoModal;