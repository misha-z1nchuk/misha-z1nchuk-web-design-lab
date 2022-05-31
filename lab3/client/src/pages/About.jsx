import React from 'react';

const About = () => {
    return (
        <div>

            <div className="imgres text-center">
                <img src={require("../static/logo-removebg-preview.png")}/>
            </div>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="col-xs-12 col-sm-4 col-md-4 ms-5">
                        <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                        <div className="row">
                            <div className="col-xl-12 col-lg-10 col-md-10 col-sm-10 mt-0">
                                <p className="lead">Blog is a free web app for everybody, where you can create posts,
                                    write comments, and
                                    express yourself. Write posts on any topic you want, and let people find out more
                                    about it</p></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;