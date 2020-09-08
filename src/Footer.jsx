import React from 'react';
import { NavLink } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const Footer = () => {
    return (
        <>
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-cta pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-6 col-md-6 mb-30" style={{ marginBottom: "20px" }}>
                                <div className="single-cta">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="cta-text">
                                        <h4>Find us</h4>
                                        <span> vasant oscar, mulund, mumbai - 400080</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6 col-md-6 mb-30">
                                <div className="single-cta">
                                    <i className="far fa-envelope-open"></i>
                                    <div className="cta-text">
                                        <h4>Mail us</h4>
                                        <span>helo@pagetoimage.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <a href="index.html"><img src="https://pageimages.s3.ap-south-1.amazonaws.com/footer+logo.svg" className="img-fluid" alt="logo" /></a>
                                    </div>
                                    <div className="footer-text">
                                        <p>Powerful REST API to take Screenshot of any <br /> internet available Webpage.</p>
                                    </div>
                                    <div className="footer-social-icon">
                                        <span>Follow us</span>
                                        <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                        <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                                        <a href="#"><i className="fab fa-google google-bg"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3 className="useful">Useful Links</h3>
                                    </div>
                                    <ul style={{display: 'inline-grid', textAlign: '-webkit-right'}}>
                                        <li className="Active_footer_Useful  Active_footer_link" style={{width: '100%'}}> <NavLink exact to="/Doc" >Documentation</NavLink></li>
                                        <li className="Active_footer_Useful" style={{width: '68%'}}><NavLink exact to="/blog" >Blog</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Subscribe</h3>
                                    </div>
                                    <div className="footer-text mb-25">
                                        <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                    </div>
                                    <div className="subscribe-form">
                                        <form action="#">
                                            <input type="text" placeholder="Email Address" />
                                            <button><i className="fab fa-telegram-plane"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        
                            <ScrollToTop />
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div className="copyright-text">
                                    <p>Copyright &copy; 2020, All Right Reserved <a href="" style={{color:'white'}}> pagetoimage</a></p>
                                </div>
                            </div>
                            {/* <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div className="footer-menu">
                                    <ul>
                                        <li ><NavLink exact to="/">Home</NavLink></li>
                                        <li><NavLink exact to="/">Terms</NavLink></li>
                                        <li><NavLink exact to="/">Privacy</NavLink></li>
                                        <li><NavLink exact to="/">Policy</NavLink></li>
                                        <li><NavLink exact to="/">Contact</NavLink></li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
