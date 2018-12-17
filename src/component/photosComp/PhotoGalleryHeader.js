import React from 'react';

//import './_photo.scss';

const PhotoGalleryHeader = (props) => {
    //console.log (props.path);
    return (
        <div className="container photo-gallery-header">
            <div className="row">
                <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 photo-gallery-row">
                    <div className="ui-block responsive-flex">
                        <div className="ui-block-title">
                            <div className="h6 gallery-header-title">James’s Photo Gallery</div>

                            <div className="block-btn align-right">
                                <a href="#/" data-toggle="modal" data-target="#create-photo-album" className="btn btn-md-2 create-album">Create Album  +</a>

                                <a href="#/" data-toggle="modal" data-target="#update-header-photo" className="btn btn-md-2 btn-border-think custom-color c-grey add-photos">Add Photos</a>
    
                            </div>
                            <ul className="nav nav-tabs photo-gallery" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#photo-page" role="tab">
                                        <span className="glyphicon glyphicon-film"></span>
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#album-page" role="tab">
                                        <span className="glyphicon glyphicon-th-large"></span>
                                    </a>
                                </li>
                            </ul>
                            <a href="#/" className="more">More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoGalleryHeader;