import React from 'react';
import './about.scss';

const EducationAndEmployement  = (props) => {

	var educationAndEmployement = props.info.map(function(data, index){
		
        return (
        	<li className = "col col-lg-6 col-md-6 col-sm-6 col-6"><span className="title">{data.company}</span><span className="date">{data.period}</span><span className="text">{data.desc}</span></li>
        );
    });
	return (

		<div className="ui-block col-sm-12">
			<div className="ui-block-title">
				<h6 className="title">{props.title}</h6>
			</div>
			<div className="ui-block-content">
				<ul className="widget w-personal-info ">
					{educationAndEmployement}
				</ul>
				

			</div> 	
		</div>
    	
	);	
    
};

export default EducationAndEmployement;