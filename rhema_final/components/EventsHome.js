import React from 'react';

const EventsHome = () => {
    return (
        <section className="causes-area upcoming-event-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="section-heading blog-heading text-center">
                            <div className="section-icon">
                                <img src="/images/section-icon.png" alt="section-icon" />
                            </div>
                            <h2 className="section__title">Upcoming Events</h2>
                            <p className="section__meta">help us now</p>
                        </div>
                    </div>
                </div>
                <div className="row blog-content-wrap">
                    <div className="col-lg-4">
                        <div className="blog-content">
                            <div className="blog-item blog-item1">
                                <div className="blog-img">
                                    <img src="/images/img7.jpg" alt="" />
                            <span className="blog__tag blog__tag1">
                                <span className="date__num-text">30</span>
                                <span className="date__mon-text">Aug</span>
                            </span>
                                </div>
                                <div className="blog-inner-content">
                                    <h3 className="blog__title"><a href="/events-detail">Heal the wounds</a></h3>
                                    <ul className="blog__list">
                                        <li className="blog__dot-active">10:00am to 4:00pm</li>
                                        <li>Kawangware</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-content">
                            <div className="blog-item blog-item2">
                                <div className="blog-img">
                                    <img src="/images/img8.jpg" alt="" />
                            <span className="blog__tag blog__tag2">
                                <span className="date__num-text">29</span>
                                <span className="date__mon-text">Sep</span>
                            </span>
                                </div>
                                <div className="blog-inner-content">
                                    <h3 className="blog__title"><a href="/events-detail">An ear for all</a></h3>
                                    <ul className="blog__list">
                                        <li className="blog__dot-active">9:00am to 7:00pm</li>
                                        <li>Mathare</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-content">
                            <div className="blog-item blog-item3">
                                <div className="blog-img">
                                    <img src="/images/img9.jpg" alt="" />
                            <span className="blog__tag blog__tag3">
                                <span className="date__num-text">12</span>
                                <span className="date__mon-text">Dec</span>
                            </span>
                                </div>
                                <div className="blog-inner-content">
                                    <h3 className="blog__title"><a href="/events-detail">Free from hunger</a></h3>
                                    <ul className="blog__list">
                                        <li className="blog__dot-active">8:00am to 6:00pm</li>
                                        <li>City Market</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventsHome;
