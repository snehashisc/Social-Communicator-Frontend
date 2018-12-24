import React,{Fragment} from 'react';
import './Weather.scss';
const Weather = (props) => {
    return (
		<Fragment>
		<div className="ui-block">
        <div className ="weatherwidget weather">
        <div className="currWeather inline-items">
        <div className="tempSensor">64°</div>
        <div className="maxminTemp">
        <span>58°</span>
        <span>76°</span>
        </div>
        <div className="glyphicon glyphicon-cloud"></div>
        </div>
        <div className="description">
						<div className="climate">Partly Sunny</div>
						<span>Real Feel: <span>67°</span></span>
						<span>Chance of Rain: <span>49%</span></span>
		</div>
        <ul className="weekly-forecast">
				
						<li>
							<div className="day">sun</div>
							
                            <div className="glyphicon glyphicon-cloud"></div>
							<div className="temperature-sensor-day">60°</div>
						</li>
				
						<li>
							<div className="day">mon</div>
                            <div className="glyphicon glyphicon-cloud"></div>
							<div className="temperature-sensor-day">58°</div>
						</li>
				
						<li>
							<div className="day">tue</div>
                            <div className="glyphicon glyphicon-cloud"></div>
							<div className="temperature-sensor-day">67°</div>
						</li>
				
						<li>
							<div className="day">wed</div>
                            <div className="glyphicon glyphicon-cloud"></div>
							<div className="temperature-sensor-day">70°</div>
						</li>
				
						<li>
							<div className="day">thu</div>
                            <div className="glyphicon glyphicon-cloud"></div>
							<div className="temperature-sensor-day">58°</div>
						</li>
				
						<li>
							<div className="day">fri</div>
                            <div className="glyphicon glyphicon-cloud"></div>
							<div className="temperature-sensor-day">68°</div>
						</li>
				
						<li>
							<div className="day">sat</div>
                            <div className="glyphicon glyphicon-cloud"></div>
							<div className="temperature-sensor-day">65°</div>
						</li>
				
					</ul>
        <div className="date-and-place">
						<h5 className="date">Saturday, March 26th</h5>
						<div className="place">San Francisco, CA</div>
					</div>
        </div>
		</div>
			</Fragment>

    );

};

export default Weather;