import React from 'react';

const EnterComment = (props) => {
    //console.log (props.path);
    return (
        <form className="comment-form inline-items">

            <div className="post__author author vcard inline-items">
                <img src={require("../../images/author-page.jpg")} alt="author" className="comment-profile-icon"></img>

                <div className="form-group with-icon-right is-empty">
                    <textarea className="form-control" placeholder="Press Enter to post..."></textarea>
                        <a href="#/" className="options-message">
                            <span className="glyphicon glyphicon-camera content-form-glphy-camera-icon"></span>  
                        </a>
                    <span className="material-input"></span>
                </div>
            </div>

        </form>
    );
};

export default EnterComment;