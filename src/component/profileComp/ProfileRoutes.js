import React ,{Fragment}from 'react';
import { Route } from 'react-router-dom';

import Timeline from '../../common/footer/Footer';
import Header from '../../common/header/Header';

class DefaultLayout extends React.Component{ 
	render(){
		return(
			 <Fragment>
		      	<div className="container">
                    <Route path="/" exact component={Timeline} />
                </div>
		    </Fragment>
		)
	}
}

export default DefaultLayout
    
