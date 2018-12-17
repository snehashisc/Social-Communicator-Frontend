import React from 'react';
import '../photosComp/_photo.scss';

const VideoGalleryHeader = (props) => {
    //console.log (props.path);
    return (
        <div className="container photo-gallery-header">
            <div className="row">
                <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 photo-gallery-row">
                    <div className="ui-block responsive-flex">
                        <div className="ui-block-title">
                            <div className="h6 gallery-header-title">James’s Video Gallery</div>

                            <div className="block-btn align-right">
                                <a href="#/" data-toggle="modal" data-target="#upload-video-album" className="btn btn-md-2 upload-album">Upload Videos +</a>
                            </div>
                            
                            <a href="#/" className="more">More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoGalleryHeader;