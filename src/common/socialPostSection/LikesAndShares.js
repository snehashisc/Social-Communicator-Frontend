import React from 'react';

const LikesAndSharesComp = (props) => {
    //console.log (props.path);
    return (
        <div className="post-additional-info inline-items">

                    <a href="#/" className="post-add-icon inline-items">
                        <span className="glyphicon glyphicon-heart-empty"></span>
                        <span>148</span>
                    </a>

                    <ul className="friends-harmonic">
                        <li>
                            <a href="#/">
                                <img src={require("../../images/friend-harmonic7.jpg")} alt="friend"></img>
                            </a>
                        </li>
                        <li>
                            <a href="#/">
                                <img src={require("../../images/friend-harmonic8.jpg")} alt="friend"></img>
                            </a>
                        </li>
                        <li>
                            <a href="#/">
                                <img src={require("../../images/friend-harmonic9.jpg")} alt="friend"></img>
                            </a>
                        </li>
                        <li>
                            <a href="#/">
                                <img src={require("../../images/friend-harmonic10.jpg")} alt="friend"></img>
                            </a>
                        </li>
                        <li>
                            <a href="#/">
                            <img src={require("../../images/friend-harmonic11.jpg")} alt="friend"></img>
                            </a>
                        </li>
                    </ul>

                    <div className="names-people-likes">
                        <a href="#/">Diana</a>, <a href="#/">Nicholas</a> and
                        <br/>13 more liked this
                    </div>


                    <div className="comments-shared">
                        <a href="#/" className="post-add-icon inline-items">
                            <span className="glyphicon glyphicon-comment"></span>
                            <span className="comment-rating">61</span>
                        </a>

                        <a href="#/" className="post-add-icon inline-items">
                            <span className="glyphicon glyphicon-share"></span>
                            <span className="comment-rating">32</span>
                        </a>
                    </div>


                </div>
    );
};

export default LikesAndSharesComp;