import React from 'react';
import './about.scss';

const HobbiesAndInterests = (props) => {

	var hobbiesAndInterestDetails = Object.keys(props.info).map(function(val,key) {
			   				return <li className = "col col-lg-6 col-md-6 col-sm-6 col-6 "><span className="title">{val}</span> <span className="text">{props.info[val]}</span></li>
					});
	return (

		<div className="ui-block col-sm-12">
			<div className="ui-block-title">
				<h6 className="title">{props.title}</h6>
			</div>
			<div className="ui-block-content">
				<ul className="widget w-personal-info ">
					{hobbiesAndInterestDetails}
				</ul>
				

			</div> 	
		</div>
    	
	);	
    
};

export default HobbiesAndInterests;