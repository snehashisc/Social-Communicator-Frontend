import React from 'react';
import { connect } from 'react-redux';
import UploadPhotos from './UploadPhotos';
import PhotoContent from './PhotoContent';

import {Carousel} from 'react-bootstrap';
class CreateAlbumModal extends React.Component {
    render () {
        const albums = this.props.albums;
        return (
                <div className="container">
                    <div className="modal" id= "create-photo-album">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">        
                                <div className="modal-header">
                                    <h4 className="modal-title">Create Album</h4>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
        
                                <div className="modal-body">
                                <div className = "row">
                                    <div className= "col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 photo-upload-album-row">
                                        <form className="form-group label-floating">
                                            <label className="control-label">Album Name</label>
                                            <input className="form-control" placeholder="" type="text" value="Rock Garden Festival - Day 4"/>
                                            <span class="material-input"></span>
                                        </form>
                                        <div className="tab-content">
                                            <div className=" col-3-width photo-album-item-wrap create-album-container">
                                                <a href="#/"><img src={require("../../images/plus-icon.jpeg")} className="create-album" alt="Create Album"/></a>
                                                <div className= 'imgFooter'> 
                                                    <h4>Add More Photos ...</h4>
                                                </div> 
                                            </div>
                                            {
                                                albums.albums.map((image, index) => {
                                                   return <UploadPhotos className='imageClass' key={image.imageTitle + index} path= {image.path}/>
                                                })
                                            }
                                        </div>
                                    </div>        
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
    }
};

const mapStateToProps = state => {
    return {
      albums: state.photoAlbumReducer
    }
};

export default connect (mapStateToProps) (CreateAlbumModal);