import React from 'react';

const UploadPhotos = (props) => {
    //console.log (props.path);
    return (
        <div className=" col-3-width photo-album-upload-item-wrap">
            <div className="photo-album-upload-item">
                <img className = "test-hover1" src={props.path} alt="Italian Trulli" />          
            </div>
            <div className= 'photo-album-upload-footer'> 
                <textarea className="form-control" placeholder="Write something about this photo..."></textarea>
                <button type="button" className=" select-upload-btn btn dropdown-toggle btn-secondary" data-toggle="dropdown" role="button" title="Nothing selected">
                    <span class="filter-option pull-left">Nothing selected</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span>
                </button>
                <br/>
                <br/>
                
            </div> 
        </div>
        
    );
};

export default UploadPhotos;