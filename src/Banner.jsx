import React from 'react';
import Card from './Card';
import CommentCard from './CommentCard';
import CommentData from './CommentData';
import Demodata from './Demodata';
import { NavLink } from 'react-router-dom';
import Technology from './Technology';
const Banner = () => {
    return (
        <>
            <section className="section1">
                <section className="bannerSection">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 banner_items">
                                <h1 className="bannerpara"> Webpage Screenshot API</h1>
                                <p className="bannerheader"> Powerful REST API to take Screenshot of any <br /> internet available Webpage.</p>
                                <div className="banner-btn">
                                <NavLink exact to="/sign_up"> <button type="button" className="btn btns btn-outline-danger header_btn active">Try Now</button></NavLink>
                                </div>
                            </div>
                            <div className="col-md-6 banner_items_video">
                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/D6zumIBGkwo?autoplay=1&mute=1"></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section className="section2">
                <svg className="svg1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#4d1c9c" fill-opacity="1"
                        d="M0,64L120,90.7C240,117,480,171,720,176C960,181,1200,139,1320,117.3L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z">
                    </path>
                </svg>
                <section>
                    <div className="container">
                        <div className="row cardRowHeading">
                            <div className="col-md-12">
                                <h2> Features Make us Powerful</h2>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container container2">
                    {/* row 1 */}
                    <div className="row">
                        <div className="col-md-4">
                            <Card img={Demodata[0].img} title={Demodata[0].title} link={Demodata[0].link} about={Demodata[0].about}></Card>
                        </div>
                        <div className="col-md-4">
                            <Card img={Demodata[1].img} title={Demodata[1].title} link={Demodata[1].link} about={Demodata[1].about}></Card>
                        </div>
                        <div className="col-md-4">
                            <Card img={Demodata[2].img} title={Demodata[2].title} link={Demodata[2].link} about={Demodata[2].about}></Card>
                        </div>
                    </div>
                    {/* row 2 */}
                    <div className="row">
                        <div className="col-md-4">
                            <Card img={Demodata[3].img} title={Demodata[3].title} link={Demodata[3].link} about={Demodata[3].about}></Card>
                        </div>
                        <div className="col-md-4">
                            <Card img={Demodata[4].img} title={Demodata[4].title} link={Demodata[4].link} about={Demodata[4].about}></Card>
                        </div>
                        <div className="col-md-4">
                            <Card img={Demodata[5].img} title={Demodata[5].title} link={Demodata[5].link} about={Demodata[5].about}></Card>
                        </div>
                    </div>
                </div>
                <br /><br />
                <section className="customerCommentds">
                    <div className="container">
                        <div className="row cardRowHeading">
                            <div className="col-md-12">
                                <h2>Some of our customers </h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="colorsolSection">
                    <div className="container colorsolContainer">
                        <div className="row">
                            <div className="col-md-12">
                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <CommentCard comment={CommentData[0].comment} name={CommentData[0].name} post={CommentData[0].post}></CommentCard>
                                        </div>
                                        <div className="carousel-item">
                                            <CommentCard comment={CommentData[1].comment} name={CommentData[1].name} post={CommentData[1].post}></CommentCard>
                                        </div>
                                        <div className="carousel-item">
                                            <CommentCard comment={CommentData[2].comment} name={CommentData[2].name} post={CommentData[2].post}></CommentCard>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                                        data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                                        data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <br />
                <br />
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Lets Start Free Trial</h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="pricing8 py-5">
                        <div className="container">
                            <div className="row mt-4">

                                <div className="col-md-4 ml-auto pricing-box align-self-center">
                                    <div className="card mb-4">
                                        <div className="card-body card-body-height p-4 text-center">
                                            <h3 className="font-weight-normal">Basic</h3>
                                            <sup>$</sup><span className="text-dark display-5">0</span><sub>/ mon</sub>
                                            <div class="columns">
                                                <ul class="pricecards">
                                                    <li>200 Screenshots</li>
                                                    <li>Ticket Support</li>
                                                    <li>Basic API Access</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a className="btn btn-info-gradiant p-3 btn-block border-0 text-white" href="#">CHOOSE PLAN </a>
                                    </div>
                                </div>


                                <div className="col-md-4 ml-auto pricing-box align-self-center">
                                    <div className="card mb-4">
                                        <div className="card-body card-body-height p-4 text-center">
                                            <h3 className="font-weight-normal">Premimum <sup style={{ top: '-10px' }}>*</sup></h3>
                                            <sup>$</sup><span className="text-dark display-5">10</span><sub>/ mon</sub>
                                            <div class="columns">
                                                <ul class="pricecards">
                                                    <li>1500 Screenshots</li>
                                                    <li>Ticket & Live Chat Support</li>
                                                    <li>Premium API Access</li>
                                                    <li>Mobile Viewport Access</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a className="btn btn-danger-gradiant p-3 btn-block border-0 text-white" href="#">CHOOSE PLAN </a>
                                    </div>
                                </div>


                                <div className="col-md-4 ml-auto pricing-box align-self-center">
                                    <div className="card mb-4">
                                        <div className="card-body card-body-height p-4 text-center">
                                            <h3 className="font-weight-normal">Enterprise</h3>
                                            <sup>$</sup><span className="text-dark display-5">50</span><sub>/ mon</sub>
                                            <div class="columns">
                                                <ul class="pricecards">
                                                    <li>20,000 Screenshots</li>
                                                    <li>24/7 Free Support</li>
                                                    <li>Enterprise API Access</li>
                                                    <li>Mobile Viewport Access</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a className="btn btn-info-gradiant p-3 btn-block border-0 text-white" href="#">CHOOSE PLAN </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h5 class="card-title" style={{ marginTop: '3%' }}>
                                    Custom Enterprise <span class="font-weight-light">Plan</span>
                                </h5>
                                <div class="d-flex justify-content-center align-items-center flex-column ">
                                    <div>
                                        Need to make millions of screenshots?
                                    </div>
                                    <div style={{ marginTop: '1%' }}>
                                        <a class="ml-0 ml-md-4 mt-3 mt-md-0 btn btn-primary" href="helo@pagetoimage.com">
                                            Contact us
                                         </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <br />
                <br />
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 style={{ margin: '30px 0' }}>Easy to integrate with</h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container indegratedIconContainer">
                        <div className="row">
                             <div className="col-md-2 SvgRow">
                                <Technology className="svg" img={Demodata[6].img}/>
                            </div>
                            <div className="col-md-2 SvgRow">
                                <Technology className="svg" img={Demodata[7].img}/> 
                            </div>
                            <div className="col-md-2 SvgRow" style={{marginLeft: '30px'}}>
                                <Technology className="svg" img={Demodata[8].img}/>
                            </div>
                            <div className="col-md-2 SvgRow" style={{marginLeft: '30px'}}>
                                <Technology className="svg" img={Demodata[9].img}/>
                            </div>
                            <div className="col-md-2 SvgRow" style={{marginLeft: '30px'}}>
                                <Technology className="svg" img={Demodata[10].img}/>
                            </div>
                            <div className="col-md-2 SvgRow" style={{marginLeft: '70px'}}>
                                <Technology className="svg" img={Demodata[11].img} />
                            </div>
                            
                        </div>
                    </div>
                </section>
                <br />
                <br />
            </section>


        </>
    )
}

export default Banner;