import React from  'react';
import { connect } from 'react-redux';
import Photo from './Photo';
import PhotoGalleryHeader from './PhotoGalleryHeader';
import CreateAlbumModal from './CreateAlbumModal';
//import './_photo.scss';

class PhotosGallery extends React.Component {

    render() {
        const photoAlbums = this.props.albums;
        console.log("photo albums", this.props);
        return (
            <div>
                <PhotoGalleryHeader/>
                <div>
                    <div className = "row">
                        <div className= "col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 photo-album-row">
                            <div className="tab-content">
                                <div className=" col-4-width photo-album-item-wrap create-album-container">
                                    <a href="#/" data-toggle="modal" data-target="#create-photo-album"><img src={require("../../images/plus-icon.jpeg")} className="create-album" alt="Create Album"/></a>
                                    <div className= 'imgFooter'> 
                                        <h4>Create an Album</h4>
                                        <h5>It only take few minutes!</h5>
                                    </div> 
                                </div>
                                {
                                    photoAlbums.albums.map((image, index) => {
                                        console.log ("inside gallery", image.albumItems);
                                        return <Photo className='imageClass' key={image.imageTitle + index} path= {image.path} title={image.imageTitle} addTime = {image.addedTime} idImage={image.id} socialStatus={image.socialStatus} increaseAlbumLikes = {this.props.increaseAlbumLike} albumItems = {image.albumItems[0].description} picItems = {image.albumItems}/>
                                    })
                                }
                            </div>
                        </div>        
                    </div>  
                </div> 
                <CreateAlbumModal/>
             </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      albums: state.photoAlbumReducer,
      login: state.loginReducer
    }
};

const mapDispatchToProps = dispatch => {
    return {
        increaseAlbumLike: (id) => dispatch ({type: "INCREASE_ALBUM_LIKES", value: 1,id: id}),
        decreaseAlbumLike: () => dispatch ({type: "DECREASE_ALBUM_LIKES", value: 1}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (PhotosGallery);