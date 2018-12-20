import React from  'react';
import { connect } from 'react-redux';
import Video from './Video';
import VideoGalleryHeader from './VideoGalleryHeader';
import '../photosComp/_photo.scss';
import LatestVideo from './LatestVideo';

class VideosGallery extends React.Component {

    render() {
        const albums = this.props.albums;
        return (
            <div>

                <div className = "row">
                    <LatestVideo />
                        <div className = "row">
                            <VideoGalleryHeader/>
                                <div className="container">
                                    <div className = "row">
                                        <div className= "col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 photo-album-row">
                                            <div className="tab-content">
                                                    {
                                                    albums.videos.map((video, index) => {
                                                        return <Video className='imageClass' key={index} path= {video.path} title={video.videoTitle} published = {video.published} idVideo={video.id}  videoPath={video.videoPath} />
                                                    })
                                                }
                                            </div>
                                        </div>        
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
      albums: state.videoAlbumReducer
    }
};

export default connect(mapStateToProps) (VideosGallery);