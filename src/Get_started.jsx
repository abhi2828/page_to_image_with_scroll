import React from 'react'
import { NavLink } from 'react-router-dom'

const Get_started = () => {
    return (
        <>
           <div className="outer_body fixed-nav sticky-footer bg-dark" id="page-top">
                {/* Navigation*/}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                    <NavLink exact to="" className="navbar-brand"><img src=' https://pageimages.s3.ap-south-1.amazonaws.com/header+log.svg' alt="logo" className="logo" /></NavLink>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" style={{ background: '5c4cad' }}>
                        <i class="fas fa-bars"></i>
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
                            <li className="nav-item dash_board dash_board_active" data-toggle="tooltip" data-placement="right" title="Usage">
                                 <NavLink exact to="/usage" className="nav-link" >
                                    {/* <i class="fas fa-chart-pie  mr-3"></i> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" height={24} viewBox="0 0 24 24" width={24}><path d="M0 0h24v24H0z" fill="none" /><path fill="black" d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z" /></svg><span className="ml-3" style={{ position: "absolute" }}>Usage</span>
                                </NavLink>
                            </li>
                            <li className="nav-item dash_board" data-toggle="tooltip" data-placement="right" title="Access keys">
                                 <NavLink exact to="/Access_key" className="nav-link" >
                                    <i className="fa fa-key  mr-3" aria-hidden="true" />
                                    <span className="nav-link-text">Access keys</span>
                                </NavLink>
                            </li>
                            <li className="nav-item dash_board" data-toggle="tooltip" data-placement="right" title="Plans">
                                 <NavLink exact to="/Plans" className="nav-link" >
                                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height={24} viewBox="0 0 24 24" width={24}><g><rect fill="none" height={24} width={24} /></g><g><g /><g><path fill="black" d="M8,8H6v7c0,1.1,0.9,2,2,2h9v-2H8V8z" /><path fill="black" d="M20,3h-8c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,11h-8V7h8V11z" /><path fill="black" d="M4,12H2v7c0,1.1,0.9,2,2,2h9v-2H4V12z" /></g></g><g display="none"><g display="inline" /><g display="inline"><path d="M8,8H6v7c0,1.1,0.9,2,2,2h9v-2H8V8z" /><path d="M20,3h-8c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,11h-8V7h8V11z" /><path d="M4,12H2v7c0,1.1,0.9,2,2,2h9v-2H4V12z" /></g></g></svg><span className="ml-3">Plans</span>
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <form className="form-inline my-2 my-lg-0 mr-lg-2">
                                    <div className="input-group" style={{ border: '1px solid 5c4cad',borderRadius: '5px' }}>
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
                                <NavLink exact to="/login" className="nav-link" style={{ color: '5c4cad' }}><i className="fas fa-sign-out-alt" /> Logout</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="content-wrapper">
                    <div className="container-fluid">
                        <div >
                        <div className="flex-grow-1">
  <div className="row">
    <div className="col-md-12 text-center">
      <div className="card my-3">
        <div className="card-body">
          <h2 className="font-weight-bold">Let's make your first screenshot!</h2>
          <div className="d-flex flex-row align-items-center mt-3 mb-4">
            <div className="card bg-light mx-auto" data-original-title title>
              <div className="card-body">
                <div className="text-left text-dark" id="af-get-started-http-call">
                  {/* Formatting is weird here, but it's important to avoid spaces when copy pasting. */}
                  <span>https://api.apiflash.com/v1/urltoimage</span><span className="ml-4 d-block">?<span className="text-primary font-weight-bold">access_key</span>=<b>20ebab4a09ac4d74b800dc2a91969d77</b></span><span className="ml-4 d-block">&amp;<span className="text-primary font-weight-bold">url</span>=<b>http://google.com</b></span>
                </div>
                <button id="af-copy-clipboard" className="btn btn-primary af-pointer mt-3">
                  Copy to clipboard
                </button>
                <a id="af-launch-in-new-tab" className="btn btn-primary mt-3 ml-3 af-pointer" href="https://api.apiflash.com/v1/urltoimage?access_key=20ebab4a09ac4d74b800dc2a91969d77&url=http://google.com" target="_blank" rel="nofollow">
                  Launch in new tab
                </a>
                <div className="mt-2">
                  <small className="text-muted">
                    or go to
                    <a href="/documentationexamples">
                      code examples
                    </a>
                  </small>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <small className="text-muted">A few things to know ...</small>
          <br /><br />
          API calls with the same parameters <b>will return a cached screenshot.</b>
          <br className="d-none d-md-inline" />
          Use the <kbd>fresh</kbd> parameter to get a fresh new screenshot.
          <br /><br />
          By default, screenshots are captured once the network is idle.
          <br className="d-none d-md-inline" />
          If needed, use the <kbd>delay</kbd> parameter to delay the screenshot
          <br className="d-none d-md-inline" /> by a few more seconds.
          <br /><br />
          <small className="text-muted">
            More parameters described in the
            <a href="/documentationurltoimage">documentation</a>.
          </small>
          <hr />
          Need help or have questions?
          <NavLink exact to='' onclick="event.preventDefault(); $crisp.push(['do', 'chat:open'])" className="af-pointer" style={{color:'rgb(92 76 173)'}}>
                 Chat with us live
              <i class="fas fa-comment-alt" style={{margin:'0 10px'}}></i></NavLink>
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

export default Get_started