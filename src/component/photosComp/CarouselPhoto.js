import React from 'react';
//import './_photo.scss';

const CarouselPhoto = (props) => {
    //console.log (props);
    return (
            <div className="container carouselPhotoAlbum">
                <div id={"myCarousel"+props.idImage} className="carousel slide" data-ride="false">
                    
                    <ol className="carousel-indicators">
                        <li data-target={"#myCarousel"+props.idImage} data-slide-to="0" className="carousal-background active"></li>
                        <li data-target={"#myCarousel"+props.idImage} data-slide-to="1" className="carousal-background"></li>
                    </ol>

                
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="img-circle" src={require("../../images/photo-album1.jpg")} alt="Italian Trulli" ></img>
                            <img className="img-circle" src={require("../../images/photo-album2.jpg")} alt="Italian Trulli" ></img>
                            <img className="img-circle" src={require("../../images/photo-album1.jpg")} alt="Italian Trulli" ></img>
                            <img className="img-circle" src={require("../../images/photo-album2.jpg")} alt="Italian Trulli" ></img>
                            {/* <span>Hi</span> */}
                        </div>

                        <div className="carousel-item">
                            <div className="container">
                            <div className= "row">
                                    <div className= "col col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                        <span>{props.socialStatus.photos}</span>
                                    </div>  
                                    <div className= "col col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                        <span>{props.socialStatus.comments}</span>
                                    </div> 
                                    <div className= "col col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                        <span>{props.socialStatus.shares}</span>
                                    </div>   
                                </div>
                                <div className= "row">
                                    <div className= "col col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                        <span>Photos</span>
                                    </div>  
                                    <div className= "col col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                        <span>Comments</span>
                                    </div> 
                                    <div className= "col col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                        <span>Share</span>
                                    </div>   
                                </div>
                            </div>   
                        </div>
                    </div>  
                    
                </div>
            </div> 
        
    );
};

export default CarouselPhoto;