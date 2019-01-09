import React,{Fragment} from 'react';
import Weather from '../../common/widget/weather/Weather';
import AuthorPost from '../../common/socialPostSection/AuthorPost';
import LikesAndSharesComp from '../../common/socialPostSection/LikesAndShares';
import Calendar from 'react-calendar';
import './Newsfeed.scss';

class NewsFeed extends React.Component {
	constructor(){
        super();
    }

    render() {
		return (
            <Fragment>
                <div className="container newsfeed">
				<div className="row">
				<div className="col col-xl-3 order-xl-1 col-lg-4 order-lg-1 col-md-12 order-md-2 col-sm-12 col-12">
					    <Weather />
                        <Calendar
          onChange={this.onChange}
          
        />
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
                    
					</div>
					</div>
                </Fragment>
        )
}

}
export default NewsFeed;