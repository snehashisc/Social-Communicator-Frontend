import React from 'react';
import './about.scss';

const PersonalInfo = (props) => {
	

	var personalDetails = Object.keys(props.info).map(function(val,key) {
		return <li ><span className="title col-sm-4">{val}</span> <span className="text col-sm-8">{props.info[val]}</span></li>
	});

	return (
	<div className="ui-block col-sm-12">
		<div className="ui-block-title">
			<h6 className="title">{props.title}</h6>
		</div>
			<div className="ui-block-content">
				<ul className="widget w-personal-info">
					{personalDetails}
				</ul>
			</div> 	
	</div>

	);	

};



export default PersonalInfo;