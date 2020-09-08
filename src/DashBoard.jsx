import React from 'react'
import { NavLink } from 'react-router-dom'

const DashBoard = () => {
    return (
        <>
            <div className="outer_body fixed-nav sticky-footer bg-dark" id="page-top">
                {/* Navigation*/}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                    <NavLink exact to="#" className="navbar-brand"><img src=' https://pageimages.s3.ap-south-1.amazonaws.com/header+log.svg' alt="logo" className="logo" /></NavLink>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" style={{ background: '#5c4cad' }}>
                        <i class="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
                            <li className="nav-item dash_board" data-toggle="tooltip" data-placement="right" title="Get started">
                                <a className="nav-link" href="index.html">
                                    <i className="fas fa-external-link-alt mr-3" />
                                    <span className="nav-link-text">Get started</span>
                                </a>
                            </li>
                            <li className="nav-item dash_board" data-toggle="tooltip" data-placement="right" title="Account">
                                <a className="nav-link" href="index.html">
                                    <i className="fas fa-user  mr-3" />
                                    <span className="nav-link-text">Account</span>
                                </a>
                            </li>
                            <li className="nav-item dash_board" data-toggle="tooltip" data-placement="right" title="Query builder">
                                <a className="nav-link" href="index.html">
                                    <i className="fas fa-code  mr-3" />
                                    <span className="nav-link-text">Query builder</span>
                                </a>
                            </li>
                            <li className="nav-item dash_board dash_board_active" data-toggle="tooltip" data-placement="right" title="Usage">
                                <a className="nav-link" href="index.html">
                                    {/* <i class="fas fa-chart-pie  mr-3"></i> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" height={24} viewBox="0 0 24 24" width={24}><path d="M0 0h24v24H0z" fill="none" /><path fill="black" d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z" /></svg><span className="ml-3" style={{ position: "absolute" }}>Usage</span>
                                </a>
                            </li>
                            <li className="nav-item dash_board" data-toggle="tooltip" data-placement="right" title="Access keys">
                                <a className="nav-link" href="index.html">
                                    <i className="fa fa-key  mr-3" aria-hidden="true" />
                                    <span className="nav-link-text">Access keys</span>
                                </a>
                            </li>
                            <li className="nav-item dash_board" data-toggle="tooltip" data-placement="right" title="Plans">
                                <a className="nav-link" href="index.html">
                                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height={24} viewBox="0 0 24 24" width={24}><g><rect fill="none" height={24} width={24} /></g><g><g /><g><path fill="black" d="M8,8H6v7c0,1.1,0.9,2,2,2h9v-2H8V8z" /><path fill="black" d="M20,3h-8c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,11h-8V7h8V11z" /><path fill="black" d="M4,12H2v7c0,1.1,0.9,2,2,2h9v-2H4V12z" /></g></g><g display="none"><g display="inline" /><g display="inline"><path d="M8,8H6v7c0,1.1,0.9,2,2,2h9v-2H8V8z" /><path d="M20,3h-8c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,11h-8V7h8V11z" /><path d="M4,12H2v7c0,1.1,0.9,2,2,2h9v-2H4V12z" /></g></g></svg><span className="ml-3">Plans</span>
                                </a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <form className="form-inline my-2 my-lg-0 mr-lg-2">
                                    <div className="input-group">
                                        <input className="form-control" type="text" placeholder="Search for..." />
                                        <span className="input-group-append">
                                            <button className="btn btn-primary" type="button">
                                                <i className="fa fa-search" />
                                            </button>
                                        </span>
                                    </div>
                                </form>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/login" className="nav-link" style={{ color: '#5c4cad' }}><i className="fas fa-sign-out-alt" /> Logout</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="content-wrapper">
                    <div className="container-fluid">
                        <div className>
                            <div className="d-flex flex-column flex-xl-row">
                                <div className="flex-grow-1">
                                    <div className="row no-gutters mt-3">
                                        <div className="col-lg-6 pr-lg-3">
                                            <div className="card h-100">
                                                <div className="card-header text-uppercase text-muted small d-flex justify-content-between">
                                                    <div>current period</div>
                                                    <div>
                                                        02/09/2020
                                                        - 02/10/2020
                                                    </div>
                                                </div>
                                                <div className="card-body d-flex flex-column align-items-center pt-2">
                                                    <div className="text-center w-100">
                                                        <div className="d-flex flex-row align-items-end">
                                                            <span className="h2 mb-0 font-weight-bold">
                                                                0.0 %
                                                                used
                                                            </span>
                                                            <span className="mx-auto" />
                                                            <small className="text-uppercase text-muted pb-1">
                                                                Resets
                                                                in 29 days
                                                        </small>
                                                        </div>
                                                        <div className="progress my-3">
                                                            <div className="progress-bar" role="progressbar" style={{ width: '0%' }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <table className="table small my-auto">
                                                        <tbody><tr>
                                                            <td className="text-muted text-uppercase">This period</td>
                                                            <td>0 screenshots
                                                                <span className="text-muted d-none d-sm-inline">
                                                                    (out of 100)
                                                                </span>
                                                            </td>
                                                        </tr>
                                                            <tr>
                                                                <td className="text-muted text-uppercase">Prior 24 hours</td>
                                                                <td>0 screenshots</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-muted text-uppercase">Estimated total</td>
                                                                <td>0 screenshots</td>
                                                            </tr>
                                                        </tbody></table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mt-3 mt-lg-0" id="af-usage-bar-chart">
                                            <div className="card">
                                                <div className="card-header text-uppercase text-muted small">
                                                    Last 30 days
                                                </div>
                                                <div className="card-body">
                                                    <div className="d-flex flex-row mb-2">
                                                        <small className="text-muted text-uppercase">4 weeks ago</small>
                                                        <span className="mx-auto" />
                                                        <small className="text-muted text-uppercase">Today</small>
                                                    </div>
                                                    <svg classclassName="dashboard_graph" height={200} width="421.469" style={{ width: '100%', marginLeft: '-30px' }}><g transform="translate(20,0)"><g className="axis axis--x" transform="translate(0,180)" fill="none" fontSize={10} fontFamily="sans-serif" textAnchor="middle"><path className="domain" stroke="currentColor" d="M0.5,6V0.5H381.969V6" /><g className="tick" opacity={1} transform="translate(16.5,0)"><line stroke="currentColor" y2={6} /><text fill="currentColor" y={9} dy="0.71em">Aug 05</text></g><g className="tick" opacity={1} transform="translate(100.5,0)"><line stroke="currentColor" y2={6} /><text fill="currentColor" y={9} dy="0.71em">Aug 12</text></g><g className="tick" opacity={1} transform="translate(184.5,0)"><line stroke="currentColor" y2={6} /><text fill="currentColor" y={9} dy="0.71em">Aug 19</text></g><g className="tick" opacity={1} transform="translate(268.5,0)"><line stroke="currentColor" y2={6} /><text fill="currentColor" y={9} dy="0.71em">Aug 26</text></g><g className="tick" opacity={1} transform="translate(352.5,0)"><line stroke="currentColor" y2={6} /><text fill="currentColor" y={9} dy="0.71em">Sep 02</text></g></g><rect className="screenshot-count" x={11} y={180} width={11} height={0} /><rect className="screenshot-count" x={23} y={180} width={11} height={0} /><rect className="screenshot-count" x={35} y={180} width={11} height={0} /><rect className="screenshot-count" x={47} y={180} width={11} height={0} /><rect className="screenshot-count" x={59} y={180} width={11} height={0} /><rect className="screenshot-count" x={71} y={180} width={11} height={0} /><rect className="screenshot-count" x={83} y={180} width={11} height={0} /><rect className="screenshot-count" x={95} y={180} width={11} height={0} /><rect className="screenshot-count" x={107} y={180} width={11} height={0} /><rect className="screenshot-count" x={119} y={180} width={11} height={0} /><rect className="screenshot-count" x={131} y={180} width={11} height={0} /><rect className="screenshot-count" x={143} y={180} width={11} height={0} /><rect className="screenshot-count" x={155} y={180} width={11} height={0} /><rect className="screenshot-count" x={167} y={180} width={11} height={0} /><rect className="screenshot-count" x={179} y={180} width={11} height={0} /><rect className="screenshot-count" x={191} y={180} width={11} height={0} /><rect className="screenshot-count" x={203} y={180} width={11} height={0} /><rect className="screenshot-count" x={215} y={180} width={11} height={0} /><rect className="screenshot-count" x={227} y={180} width={11} height={0} /><rect className="screenshot-count" x={239} y={180} width={11} height={0} /><rect className="screenshot-count" x={251} y={180} width={11} height={0} /><rect className="screenshot-count" x={263} y={180} width={11} height={0} /><rect className="screenshot-count" x={275} y={180} width={11} height={0} /><rect className="screenshot-count" x={287} y={180} width={11} height={0} /><rect className="screenshot-count" x={299} y={180} width={11} height={0} /><rect className="screenshot-count" x={311} y={180} width={11} height={0} /><rect className="screenshot-count" x={323} y={180} width={11} height={0} /><rect className="screenshot-count" x={335} y={180} width={11} height={0} /><rect className="screenshot-count" x={347} y={180} width={11} height={0} /><rect className="screenshot-count" x={359} y={180} width={11} height={0} /><rect className="full-bar" x={11} y={0} width={11} height={180} /><rect className="full-bar" x={23} y={0} width={11} height={180} /><rect className="full-bar" x={35} y={0} width={11} height={180} /><rect className="full-bar" x={47} y={0} width={11} height={180} /><rect className="full-bar" x={59} y={0} width={11} height={180} /><rect className="full-bar" x={71} y={0} width={11} height={180} /><rect className="full-bar" x={83} y={0} width={11} height={180} /><rect className="full-bar" x={95} y={0} width={11} height={180} /><rect className="full-bar" x={107} y={0} width={11} height={180} /><rect className="full-bar" x={119} y={0} width={11} height={180} /><rect className="full-bar" x={131} y={0} width={11} height={180} /><rect className="full-bar" x={143} y={0} width={11} height={180} /><rect className="full-bar" x={155} y={0} width={11} height={180} /><rect className="full-bar" x={167} y={0} width={11} height={180} /><rect className="full-bar" x={179} y={0} width={11} height={180} /><rect className="full-bar" x={191} y={0} width={11} height={180} /><rect className="full-bar" x={203} y={0} width={11} height={180} /><rect className="full-bar" x={215} y={0} width={11} height={180} /><rect className="full-bar" x={227} y={0} width={11} height={180} /><rect className="full-bar" x={239} y={0} width={11} height={180} /><rect className="full-bar" x={251} y={0} width={11} height={180} /><rect className="full-bar" x={263} y={0} width={11} height={180} /><rect className="full-bar" x={275} y={0} width={11} height={180} /><rect className="full-bar" x={287} y={0} width={11} height={180} /><rect className="full-bar" x={299} y={0} width={11} height={180} /><rect className="full-bar" x={311} y={0} width={11} height={180} /><rect className="full-bar" x={323} y={0} width={11} height={180} /><rect className="full-bar" x={335} y={0} width={11} height={180} /><rect className="full-bar" x={347} y={0} width={11} height={180} /><rect className="full-bar" x={359} y={0} width={11} height={180} /></g></svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="af-last-api-call" className="col-lg-12 mt-3 mb-3"><div className="card"><div className="card-header text-muted small d-flex justify-content-between"><div className="text-uppercase">Last api call</div> {/**/}</div> <div><div className="card-body text-center text-muted small py-5">
                                            No api call to display.
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
            </div>

        </>
    )
}

export default DashBoard