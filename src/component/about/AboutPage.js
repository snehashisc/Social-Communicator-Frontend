import React from 'react';
//import aboutapis from '../../api/aboutapis';
import PersonalInfo from './PersonalInfo';
import EducationAndEmployement from './EducationAndEmployement';
import HobbiesAndInterests from './HobbiesAndInterests';
//import * as aboutActions from '../../actions/aboutActions';
import { connect } from 'react-redux';
import './about.scss';

class AboutPage extends React.Component{

	// componentWillMount() {
	//    this.props.dispatch(aboutActions.getAbout());
	//    //this.props.getAbout();
	//  }

	render() {
		const about = this.props.about;
		console.log("Props",about.personalInfo);
		return (
			<div>
				<div className="row">
					<div className="col col-xl-4 order-xl-1 col-lg-4 order-lg-1 col-md-12 order-md-2 col-sm-12 col-12 about-background">
					    <PersonalInfo info={about.personalInfo} title="Personal Info"/>
					</div>
					<div className="col col-xl-8 order-xl-2 col-lg-8 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12 about-background">
						<HobbiesAndInterests info={about.hobbiesAndInterest} title="Interests and Hobbies"/>
						<EducationAndEmployement info={about.educationAndEmployement} title="Education and Employment"/>
					</div>
					
				</div>
			</div>
		);
	}
}	



const mapStateToProps = state => {
  return {
    about: state.aboutReducer
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     getAbout: function () {
//       dispatch(aboutActions.getAbout());
//     }
//   };
// }

	


export default connect(mapStateToProps)(AboutPage);

							