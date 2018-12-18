import React from 'react';

const FriendsComments = (props) => {
    //console.log (props.path);
    return (
        <div className="mCustomScrollbar ps ps--theme_default ps--active-y" data-mcs-theme="dark" data-ps-id="aa1a6c0e-5f6b-7c04-1053-1cec450caf29">

            <ul className="comments-list">
                <li className="comment-item">
                    <div className="comment-section">
                        <div className="post__author author vcard inline-items">
                            <img src={require("../../images/avatar48-sm.jpg")} alt="author" className="comment-images"></img>

                            <div className="author-date">
                                <a className="h6 post__author-name fn" href="#/">Marina Valentine</a>
                                <div className="post__date">
                                    <time className="published" datetime="2017-03-24T18:18">
                                        46 mins ago
                                    </time>
                                </div>
                            </div>

                            <a href="#/" className="more">More</a>

                        </div>

                        <p>I had a great time too!! We should do it again!</p>

                        <a href="#/" className="post-add-icon inline-items comment-section-glhpy-icon">
                            <span className="glyphicon glyphicon-heart-empty"></span>
                            <span>8</span>
                            <span className="reply">Reply</span>
                        </a>
                        
                    </div>
                </li>

                <li className="comment-item">
                    <div className="comment-section">
                        <div className="post__author author vcard inline-items">
                            <img src={require("../../images/avatar4-sm.jpg")} alt="author" className="comment-images"></img>

                            <div className="author-date">
                                <a className="h6 post__author-name fn" href="#/">Chris Greyson</a>
                                <div className="post__date">
                                    <time className="published" datetime="2017-03-24T18:18">
                                        1 hour ago
                                    </time>
                                </div>
                            </div>

                            <a href="#/" className="more">More</a>

                        </div>

                        <p>Dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>

                        <a href="#/" className="post-add-icon inline-items comment-section-glhpy-icon">
                            <span className="glyphicon glyphicon-heart-empty"></span>
                            <span>7</span>
                            <span className="reply">Reply</span>
                        </a>
                        
                    </div>
                </li>
            </ul>

        <div className="ps__scrollbar-x-rail"><div className="ps__scrollbar-x" ></div></div><div className="ps__scrollbar-y-rail" ><div className="ps__scrollbar-y"  ></div></div>
        
        </div>
    );
};

export default FriendsComments;