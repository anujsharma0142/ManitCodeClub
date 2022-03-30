import React from 'react';

export const Dev = () => {
    return (
        <>
        <container className="Dev">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="carouselExampleIndicators" data-slide-to="1" className="active"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-md-4">
                                    <div className="single-box">
                                    <div className="img-area"><img src={process.env.PUBLIC_URL + "/images/logo.jpg"} alt="image"></img></div>
                                    <div className="img-text">
                                        <h2>Person One</h2>
                                        <p>Lorem Impsum</p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="single-box">
                                    <div className="img-area"><img src={process.env.PUBLIC_URL + "/images/logo.jpg"} alt="image"></img></div>
                                    <div className="img-text">
                                        <h2>Person Two</h2>
                                        <p>Lorem Impsum</p>
                                    </div>
                                </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="single-box">
                                    <div className="img-area"><img src={process.env.PUBLIC_URL + "/images/logo.jpg"} alt="image"></img></div>
                                    <div className="img-text">
                                        <h2>Person Three</h2>
                                        <p>Lorem Impsum</p>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </container>
       </> 
    );
};


