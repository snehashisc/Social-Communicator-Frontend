import React from 'react';
import PhotoContent from './PhotoContent';
//import './_photo.scss';

import {Carousel} from 'react-bootstrap';
const PhotoModal = (props) => {
    console.log (props.picItems);
    return (
             <div className="container">
                 <div className="modal" id= {props.modalId}>
                    <div className="modal-dialog modal-lg">
                         <div className="modal-content">        
                             <div className="modal-header">
                                 <h4 className="modal-title">Modal Heading</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                             </div>
    
                            <div className="modal-body">
                                <div className="open-photo-thumb">
                                    <Carousel indicators={false} interval={null}>  
                                     {
                                        props.picItems.map((image, index) => {
                                            return  <Carousel.Item>
                                                        <img className="carousal-images"  alt="900x500" src= {image.imgPath} />
                                                    </Carousel.Item>
                                                
                                    })
                                }
                                </Carousel> 
                             </div>
                                {/* <div className="open-photo-thumb">
                                    <Carousel indicators={false} interval={null}>
                                        <Carousel.Item>
                                            <img className="carousal-images"  alt="900x500" src={require("../../images/photo-album1.jpg")} />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img className="carousal-images"  alt="900x500" src={require("../../images/photo-album2.jpg")} />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img className="carousal-images"  alt="900x500" src={require("../../images/photo-album2.jpg")} />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img className="carousal-images"  alt="900x500" src={require("../../images/open-photo2.jpg")} />
                                        </Carousel.Item>
                                    </Carousel> 
                                </div> */}
                                <div className="open-photo-text-container">
                                    <PhotoContent albumItems = {props.albumItems}/>
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

export default PhotoModal;