import React from 'react';
import FriendContent from './FriendContent';
import './friends.scss';
import {ThemeContext} from './theme-context';


const Friend = (props) => {
    return (
        <div className="col-sm-3"> 
            <div className="ui-block">
                <div className="friend-item">
                    <div className="friend-header-thumb">
                        <img src={props.path} alt="Italian Trulli" ></img>
                    </div>
                    <ThemeContext.Provider value={props.friend}>
                           <FriendContent /> 
                    </ThemeContext.Provider>      
                </div>
            </div>   
        </div>
    );
};

//<FriendContent avatar={props.avatar} swiper={props.swiper}/>
export default Friend;