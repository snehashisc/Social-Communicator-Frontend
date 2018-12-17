import React from  'react';
import { connect } from 'react-redux';
import Photo from './Photo';
import PhotoGalleryHeader from './PhotoGalleryHeader';
//import './_photo.scss';

class PhotosGallery extends React.Component {

    render() {
        const albums = this.props.albums;
        return (
            <div>
                <PhotoGalleryHeader/>
                <div className="container">
                    <div className = "row">
                        <div className= "col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 photo-album-row">
                            <div className="tab-content">
                                <div className=" col-4-width photo-album-item-wrap create-album-container">
                                    <a href="#/"><img src={require("../../images/plus-icon.jpeg")} className="create-album" alt="Create Album"/></a>
                                    <div className= 'imgFooter'> 
                                        <h4>Create an Album</h4>
                                        <h5>It only take few minutes!</h5>
                                    </div> 
                                </div>
                                {
                                    albums.images.map((image, index) => {
                                        return <Photo className='imageClass' key={image.imageTitle + index} path= {image.path} title={image.imageTitle} addTime = {image.addedTime} idImage={image.id} socialStatus={image.socialStatus}/>
                                    })
                                }
                            </div>
                        </div>        
                    </div>  
                </div> 
             </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      albums: state.photoAlbumReducer
    }
};

export default connect(mapStateToProps) (PhotosGallery);