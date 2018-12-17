import React from 'react';
import CarouselPhoto from './CarouselPhoto';
import PhotoModal from './PhotoModal';
//import './_photo.scss';

const Photo = (props) => {
    //console.log (props.path);
    return (
        <div className=" col-4-width photo-album-item-wrap">
            <div className="photo-album-item">
                <a href="#/" data-toggle="modal" data-target={"#myModal"+props.idImage}>
                    <img className = "test-hover1" src={props.path} alt="Italian Trulli" />
                    <div className="image-content">
                        <span className="glyphicon glyphicon-heart"></span>
                        <span className="image-content-number">312</span>
                    </div>
                </a>
                {/* <img className = "test-hover2" src={props.path} alt="Italian Trulli" ></img> */}
                {/* <a href="#" data-toggle="modal" data-target={"#myModal"+props.idImage} className= "full-block"></a> */}
                <PhotoModal modalId={"myModal"+props.idImage}/>
            </div>
            <div className= 'imgFooter'> 
                <h5>{props.title}</h5>
                <span>Last Added: {props.addTime}</span>
                <br/>
                <br/>
                <CarouselPhoto idImage={props.idImage} socialStatus={props.socialStatus}/>
            </div> 
        </div>
        
        // <div class="card col-4-width photo-album-item-wrap">
        //     <div className="photo-album-item">
        //         <img className="card-img-top" src={props.path} alt="Italian Trulli"></img>
        //     </div>
        //     <div class="card-body imgFooter">
        //         <h5 class="card-title">{props.title}</h5>
        //         <p class="card-text">Last Added: {props.addTime}</p>
        //         <br/>
        //         <br/>
        //         <CarouselPhoto idImage={props.idImage} socialStatus={props.socialStatus}/>
        //     </div>
        // </div>
    );
};

export default Photo;