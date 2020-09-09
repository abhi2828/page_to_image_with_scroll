import React from 'react'
import { NavLink } from 'react-router-dom'

const Plans = () => {
    return (
        <>
            <div className="outer_body fixed-nav sticky-footer bg-dark" id="page-top">
                {/* Navigation*/}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                    <NavLink exact to="" className="navbar-brand"><img src=' https://pageimages.s3.ap-south-1.amazonaws.com/header+log.svg' alt="logo" className="logo" /></NavLink>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" style={{ background: '#5c4cad' }}>
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
                            <li className="nav-item dash_board" data-toggle="tooltip" data-placement="right" title="Get started">
                                <NavLink exact to="/Get_started" className="nav-link" >
                                    <i className="fas fa-external-link-alt mr-3" />
                                    <span className="nav-link-text">Get started</span>
                                </NavLink>
                            </li>
                            <li className="nav-item dash_board" data-toggle="tooltip" data-placement="right" title="Account">
                                <NavLink exact to="/Account" className="nav-link" >
                                    <i className="fas fa-user  mr-3" />
                                    <span className="nav-link-text">Account</span>
                                </NavLink>
                            </li>
                            <li className="nav-item dash_board" data-toggle="tooltip" data-placement="right" title="Query builder">
                                <NavLink exact to="/Query_builder" className="nav-link" >
                                    <i className="fas fa-code  mr-3" />
                                    <span className="nav-link-text">Query builder</span>
                                </NavLink>
                            </li>
                            <li className="nav-item dash_board" data-toggle="tooltip" data-placement="right" title="Usage">
                                <NavLink exact to="/usage" className="nav-link" >
                                    {/* <i className="fas fa-chart-pie  mr-3"></i> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" height={24} viewBox="0 0 24 24" width={24}><path d="M0 0h24v24H0z" fill="none" /><path fill="black" d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z" /></svg><span className="ml-3" style={{ position: "absolute" }}>Usage</span>
                                </NavLink>
                            </li>
                            <li className="nav-item dash_board" data-toggle="tooltip" data-placement="right" title="Access keys">
                                <NavLink exact to="/Access_key" className="nav-link" >
                                    <i className="fa fa-key  mr-3" aria-hidden="true" />
                                    <span className="nav-link-text">Access keys</span>
                                </NavLink>
                            </li>
                            <li className="nav-item dash_board dash_board_active" data-toggle="tooltip" data-placement="right" title="Plans">
                                <NavLink exact to="/Plans" className="nav-link" >
                                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height={24} viewBox="0 0 24 24" width={24}><g><rect fill="none" height={24} width={24} /></g><g><g /><g><path fill="black" d="M8,8H6v7c0,1.1,0.9,2,2,2h9v-2H8V8z" /><path fill="black" d="M20,3h-8c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,11h-8V7h8V11z" /><path fill="black" d="M4,12H2v7c0,1.1,0.9,2,2,2h9v-2H4V12z" /></g></g><g display="none"><g display="inline" /><g display="inline"><path d="M8,8H6v7c0,1.1,0.9,2,2,2h9v-2H8V8z" /><path d="M20,3h-8c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,11h-8V7h8V11z" /><path d="M4,12H2v7c0,1.1,0.9,2,2,2h9v-2H4V12z" /></g></g></svg><span className="ml-3">Plans</span>
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <form className="form-inline my-2 my-lg-0 mr-lg-2">
                                    <div className="input-group Search">
                                        <input className="form-control" type="text" placeholder="  Search for..." />
                                        <span className="input-group-append">
                                            <button className="btn btn-primary" type="button">
                                                <i className="fa fa-search" />
                                            </button>
                                        </span>
                                    </div>
                                </form>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/login" className="nav-link nav_logOut"><i className="fas fa-sign-out-alt" /> Logout</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="content-wrapper">
                    <div className="container-fluid">
                        <div>
                            <section>
                                <div className="pricing8 py-5">
                                    <div className="container">
                                        <div className="row mt-4">

                                            <div className="col-md-4 ml-auto pricing-box align-self-center">
                                                <div className="card mb-4">
                                                    <div className="card-body card-body-height p-4 text-center">
                                                        <h3 className="font-weight-normal">Basic</h3>
                                                        <sup>$</sup><span className="text-dark display-5">0</span><sub>/ mon</sub>
                                                        <div className="columns">
                                                            <ul className="pricecards">
                                                                <li>200 Screenshots</li>
                                                                <li>Ticket Support</li>
                                                                <li>Basic API Access</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <a className="btn btn-info-gradiant p-3 btn-block border-0 text-white" href="">CHOOSE PLAN </a>
                                                </div>
                                            </div>


                                            <div className="col-md-4 ml-auto pricing-box align-self-center">
                                                <div className="card mb-4">
                                                    <div className="card-body card-body-height p-4 text-center">
                                                        <h3 className="font-weight-normal">Premimum <sup style={{ top: '-10px' }}>*</sup></h3>
                                                        <sup>$</sup><span className="text-dark display-5">10</span><sub>/ mon</sub>
                                                        <div className="columns">
                                                            <ul className="pricecards">
                                                                <li>1500 Screenshots</li>
                                                                <li>Ticket & Live Chat Support</li>
                                                                <li>Premium API Access</li>
                                                                <li>Mobile Viewport Access</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <a className="btn btn-danger-gradiant p-3 btn-block border-0 text-white" href="">CHOOSE PLAN </a>
                                                </div>
                                            </div>


                                            <div className="col-md-4 ml-auto pricing-box align-self-center">
                                                <div className="card mb-4">
                                                    <div className="card-body card-body-height p-4 text-center">
                                                        <h3 className="font-weight-normal">Enterprise</h3>
                                                        <sup>$</sup><span className="text-dark display-5">50</span><sub>/ mon</sub>
                                                        <div className="columns">
                                                            <ul className="pricecards">
                                                                <li>20,000 Screenshots</li>
                                                                <li>24/7 Free Support</li>
                                                                <li>Enterprise API Access</li>
                                                                <li>Mobile Viewport Access</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <a className="btn btn-info-gradiant p-3 btn-block border-0 text-white" href="">CHOOSE PLAN </a>
                                                </div>
                                            </div></div>
                                    </div>
                                </div>
                            </section>
                            <div className="card small">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">
                                        Custom Enterprise <span className="font-weight-light">Plan</span>
                                    </h5>
                                </div>
                                <div className="card-body d-flex justify-content-center align-items-center flex-column flex-md-row">
                                    <div>
                                        Need to make millions of screenshots?
    </div>
                                    <div>
                                        <a className="ml-0 ml-md-4 mt-3 mt-md-0 btn btn-primary" href="mailto:helo@pagetoimage.com"> Contact us </a>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Plans