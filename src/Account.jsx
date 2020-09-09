import React from 'react'
import { NavLink } from 'react-router-dom'

const Account = () => {
    return (
        <>
           <div className="outer_body fixed-nav sticky-footer bg-dark" id="page-top">
                {/* Navigation*/}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                    <NavLink exact to="" className="navbar-brand"><img src=' https://pageimages.s3.ap-south-1.amazonaws.com/header+log.svg' alt="logo" className="logo" /></NavLink>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" style={{ background: '#5c4cad' }}>
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
                            <li className="nav-item dash_board dash_board_active" data-toggle="tooltip" data-placement="right" title="Account">
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
                                    <div className="input-group Search" >
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
                        <div >
                        <div className="flex-grow-1">
  <div className="modal fade" id="updateEmailModal" tabIndex={-1}>
    <div className="modal-dialog">
      <div className="modal-content">
        <form method="post" action="/dashboard/account/update_email">
          <input id="csrf_token" name="csrf_token" type="hidden" defaultValue="IjY3YTIxMjJlZGZhZGZkYzZiYjkxOTRlNzNmZTA0MjVmNDFmNWE5MmUi.X1ezgw.c0Bl2tRbZdpstneDEir2lz3z-J0" />
          <div className="modal-header align-items-center">
            <small className="text-uppercase text-muted">
              Change email
            </small>
            <button type="button" className="close font-weight-light" aria-label="Close" data-dismiss="modal">
              <span aria-hidden="true" className="mr-1">×</span>
            </button>
          </div>
          <div className="modal-body text-center py-4">
            <input className="form-control" id="email" name="email" placeholder="email" required type="email" defaultValue="abhi.mishra280896@gmail.com" />
          </div>
          <div className="modal-footer bg-light">
            <button type="button" className="btn btn-link af-pointer" data-dismiss="modal">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary af-pointer">Confirm</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div className="row no-gutters mt-3">
    <div className="col-lg-6 mb-3 pr-3">
      <div className="card">
        <div className="card-header text-uppercase text-muted small">Email &amp; Password</div>
        <div className="card-body">
          <div className="text-muted font-weight-light">abhi.mishra280896@gmail.com</div>
          <div className="mt-3 d-flex flex-row justify-content-between">
            <button className="btn btn-primary flex-grow-1" data-toggle="modal" data-target="updateEmailModal">
              Change email
            </button>
            <span className="mx-2" />
            <a className="btn btn-primary flex-grow-1" href="/change">
              Set password
            </a>
          </div>
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-header text-uppercase text-muted small">Social logins</div>
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div className="af-icon mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
            </div>
            <div className="mr-auto ml-4">
              <div className="font-weight-light">
                Login with <span className="font-weight-normal">Google</span>
              </div>
              <small className="text-success">Enabled</small>
            </div>
            <form method="post" action="/dashboard/account/disable_social_login">
              <input type="hidden" name="provider" defaultValue="google" />
              <button disabled type="submit" className="btn btn-danger">Disable
              </button>
            </form>
          </div>
          <hr />
          <div className="d-flex align-items-center">
            <div className="af-icon mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
            </div>
            <div className="mr-auto ml-4">
              <div className="font-weight-light">
                Login with <span className="font-weight-normal">Github</span>
              </div>
              <small className="text-muted">Disabled</small>
            </div>
            <a href="/oauth/login/github?next=%2Fdashboard%2Faccount" className="btn btn-primary">Enable</a>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-6 mb-3">
      <div className="card">
        <div className="card-header text-uppercase text-muted small">Notification emails</div>
        <div className="card-body">
          <form method="post" action="/dashboard/account/change_notification_emails">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <div>Usage</div>
                <small className="text-muted">Receive an alert email at 80% of your monthly quota.</small>
              </div>
              <div className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" id="af-usage-alerts-emails" name="send_usage_emails" defaultChecked />
                <label className="custom-control-label af-pointer" htmlFor="af-usage-alerts-emails" />
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <div>Billing</div>
                <small className="text-muted">Receive invoices by email.</small>
              </div>
              <div className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" id="af-invoices-emails" name="send_billing_emails" />
                <label className="custom-control-label af-pointer" htmlFor="af-invoices-emails" />
              </div>
            </div>
            <hr />
            <div className="d-flex">
              <button type="submit" className="btn btn-primary ml-auto" disabled>Save changes</button>
            </div>
          </form>
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

export default Account