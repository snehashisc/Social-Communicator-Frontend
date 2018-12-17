import React from 'react';

const AuthorPost = (props) => {
    //console.log (props.path);
    return (
        <article className="hentry post">

                    <div className="post__author author vcard inline-items">
                        <img src={require("../../images/author-page.jpg")} alt="author" className="popup-icon"></img>

                        <div className="author-date">
                            <a className="h6 post__author-name fn" href="02-ProfilePage.html">James Spiegel</a>
                            <div className="post__date">
                                <time className="published" datetime="2017-03-24T18:18">
                                    2 hours ago
                                </time>
                            </div>
                        </div>

                        <div className="more more-dropdown"> <a href="#/">More</a>
                            <ul className="more-dropdown-content">
                                <li>
                                    <a href="#/">Edit Post</a>
                                </li>
                                <li>
                                    <a href="#/">Delete Post</a>
                                </li>
                                <li>
                                    <a href="#/">Turn Off Notifications</a>
                                </li>
                                <li>
                                    <a href="#/">Select as Featured</a>
                                </li>
                            </ul>
                        </div>
                        <div className="control-block-button post-control-button">

                            <a href="#/" className="btn btn-control">
                                <span className="glyphicon glyphicon-heart-empty"></span>
                            </a>

                            <a href="#/" className="btn btn-control">
                                <span className="glyphicon glyphicon-comment"></span>
                            </a>

                            <a href="#/" className="btn btn-control">
                                <span className="glyphicon glyphicon-share"></span>
                            </a>

                        </div>
                    </div>

                    <p>Here’s a photo from last month’s photoshoot. We really had a great time and got a batch of incredible shots for the new catalog.</p>

                    <p>With: <a href="#/">Jessy Owen</a>, <a href="#/">Marina Valentine</a></p>               
                </article>
    );
};

export default AuthorPost;