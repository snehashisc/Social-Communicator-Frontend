import React from 'react';
//import {ThemeContext} from './theme-context';
import MoreModal from './MoreModal';


class MoreFeatures extends React.Component  {

    constructor(){
        super();
        this.state = {
            more: ["Report Profile", "Block Profile", "Turn Off Notifications"],
            addClass: false,
            modalId : 1
        } 
        this.handleClick = this.handleClick.bind(this)   
                
    } 
    handleClick() {
        console.log("This",this);
        this.setState({addClass: !this.state.addClass});
    }               

    render(){
        var listItems = this.state.more.map(function(data, index){
            return (
                <li><a href="/">{data}</a></li>
            );
        });


        return (
        	<div className="more" onClick ={this.handleClick.bind()} data-target={"#myModal"+ this.state.modalId}>
               <span className="_3DotsIcon"> </span> 
                {
                    this.state.addClass &&  <MoreModal keys={this.state.modalId} modalId={"#myModal"+ this.state.modalId} listOptions={listItems}/>
                            
                }
            </div>
        );
    } 
};

//<ul class="more-dropdown">{listItems}</ul>
//<MoreModal keys={this.state.modalId} modalId={"#myModal"+ this.state.modalId} listOptions={listItems}/>

export default MoreFeatures;