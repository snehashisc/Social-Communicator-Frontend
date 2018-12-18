import React from  'react';
import AuthorPost from '../../common/socialPostSection/AuthorPost';
import LikesAndSharesComp from '../../common/socialPostSection/LikesAndShares';

class Timeline extends React.Component {

    render() {
        
        return (
				<div className="row timeline-component">
					<div className="col col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12 col-12">
                    <div className="ui-block">
				<div className="ui-block-title">
					<h6 className="title">Profile Intro</h6>
				</div>
				<div className="ui-block-content">

					
					
					<ul className="widget w-personal-info item-block">
						<li>
							<span className="title">About Me:</span>
							<span className="text">Hi, I’m James, I’m 36 and I work as a Digital Designer for the  “Daydreams” Agency in Pier 56.</span>
						</li>
						<li>
							<span className="title">Favourite TV Shows:</span>
							<span className="text">Breaking Good, RedDevil, People of Interest, The Running Dead, Found,  American Guy.</span>
						</li>
						<li>
							<span className="title">Favourite Music Bands / Artists:</span>
							<span className="text">Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a Revenge.</span>
						</li>
					</ul>
					
					
					
					<div className="widget w-socials">
						<h6 className="title">Other Social Networks:</h6>
						<a href="#/" className="social-item bg-facebook">
					
							Facebook
						</a>
						<a href="#/" className="social-item bg-twitter">
							
							Twitter
						</a>
						<a href="#/" className="social-item bg-dribbble">
							
							Dribbble
						</a>
					</div>
					
					
					
				</div>
			</div>
					</div>
					<div className="col col-xl-6 order-xl-2 col-lg-6 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">

                        <div className="ui-block-timeline">
                        <AuthorPost/>
                        <LikesAndSharesComp/>
                        </div>

                        <div className="ui-block-timeline">
                        <AuthorPost/>
                        <LikesAndSharesComp/>
                        </div>
					</div>
                    <div className="col col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12 col-12">
                        <div className="ui-block">
                            <div className="ui-block-title">
                                <h6 className="title">Last Photos</h6>
                            </div>
				<div className="ui-block-content">
					
					<ul className="widget w-last-photo js-zoom-gallery">
						<li>
							<a href="img/last-photo10-large.jpg">
								<img src={require("../../images/last-photo10-large.jpg")} alt="photo2"/>
							</a>
						</li>
						<li>
							<a href="img/last-phot11-large.jpg">
								<img src={require("../../images/last-phot11-large.jpg")} alt="photo3"/>
							</a>
						</li>
						<li>
							<a href="img/last-phot12-large.jpg">
								<img src={require("../../images/last-phot12-large.jpg")} alt="photo4"/>
							</a>
						</li>
						<li>
							<a href="img/last-phot13-large.jpg">
								<img src={require("../../images/last-phot13-large.jpg")} alt="photo5"/>
							</a>
						</li>
						<li>
							<a href="img/last-phot14-large.jpg">
								<img src={require("../../images/last-phot14-large.jpg")} alt="photo6"/>
							</a>
						</li>
						<li>
							<a href="img/last-phot15-large.jpg">
								<img src={require("../../images/last-phot15-large.jpg")} alt="photo7"/>
							</a>
						</li>
						<li>
							<a href="img/last-phot16-large.jpg">
								<img src={require("../../images/last-phot16-large.jpg")} alt="photo8"/>
							</a>
						</li>
						<li>
							<a href="img/last-phot17-large.jpg">
								<img src={require("../../images/last-phot17-large.jpg")} alt="photo9"/>
							</a>
						</li>
						<li>
							<a href="img/last-phot18-large.jpg">
								<img src={require("../../images/last-phot18-large.jpg")} alt="photo10"/>
							</a>
						</li>
					</ul>
					
				</div>
			</div>
					</div>
					
				</div>
			
        );
    }
}


export default Timeline;