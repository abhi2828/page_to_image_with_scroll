import React from 'react'
import { NavLink } from 'react-router-dom'

const Query_builder = () => {
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
                                 <NavLink exact to="/" className="nav-link" >
                                    <i className="fas fa-external-link-alt mr-3" />
                                    <span className="nav-link-text">Get started</span>
                                </NavLink>
                            </li>
                            <li className="nav-item dash_board" data-toggle="tooltip" data-placement="right" title="Account">
                                 <NavLink exact to="#" className="nav-link" >
                                    <i className="fas fa-user  mr-3" />
                                    <span className="nav-link-text">Account</span>
                                </NavLink>
                            </li>
                            <li className="nav-item dash_board" data-toggle="tooltip" data-placement="right" title="Query builder">
                                 <NavLink exact to="#" className="nav-link" >
                                    <i className="fas fa-code  mr-3" />
                                    <span className="nav-link-text">Query builder</span>
                                </NavLink>
                            </li>
                            <li className="nav-item dash_board dash_board_active" data-toggle="tooltip" data-placement="right" title="Usage">
                                 <NavLink exact to="#" className="nav-link" >
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
                                 <NavLink exact to="#" className="nav-link" >
                                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height={24} viewBox="0 0 24 24" width={24}><g><rect fill="none" height={24} width={24} /></g><g><g /><g><path fill="black" d="M8,8H6v7c0,1.1,0.9,2,2,2h9v-2H8V8z" /><path fill="black" d="M20,3h-8c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,11h-8V7h8V11z" /><path fill="black" d="M4,12H2v7c0,1.1,0.9,2,2,2h9v-2H4V12z" /></g></g><g display="none"><g display="inline" /><g display="inline"><path d="M8,8H6v7c0,1.1,0.9,2,2,2h9v-2H8V8z" /><path d="M20,3h-8c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,11h-8V7h8V11z" /><path d="M4,12H2v7c0,1.1,0.9,2,2,2h9v-2H4V12z" /></g></g></svg><span className="ml-3">Plans</span>
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <form className="form-inline my-2 my-lg-0 mr-lg-2">
                                    <div className="input-group" style={{ border: '1px solid #5c4cad',borderRadius: '5px' }}>
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
                                <NavLink exact to="/login" className="nav-link" style={{ color: '#5c4cad' }}><i className="fas fa-sign-out-alt" /> Logout</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="content-wrapper">
                    <div className="container-fluid">
                        <div className>
                        <div className="flex-grow-1">
    <div id="af-query-builder" className="row no-gutters">
      <div className="col-lg-6">
        <div className="card" style={{borderTopRightRadius: 0, zIndex: 10}}>
          <div className="card-body">
            <form>
              <div className="form-group row no-gutters">
                <div className="col-sm-5 col-form-label text-right mr-3"><kbd data-html="true" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="A valid access key allowing you to make API calls. Access keys can be managed from your <NavLink exact to=&quot;/dashboard/access_keys&quot;>dashboard</NavLink>." data-original-title title>
                    access_key
                  </kbd></div>
                <div className="col my-auto">
                  <input id="access_key" name="access_key" placeholder required="required" type="text" defaultValue className="form-control query_input" />
                </div>
              </div>
              <div className="form-group row no-gutters">
                <div className="col-sm-5 col-form-label text-right mr-3"><kbd data-html="true" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="The complete URL of the website for which you want to capture a screenshot. <span class=&quot;text-muted&quot;>The URL must include the protocol (<code>http://</code> or <code>https://</code>) to be processed correctly.</span>" data-original-title title>
                    url
                  </kbd></div>
                <div className="col my-auto">
                  <input id="url" name="url" placeholder required="required" type="text" defaultValue className="form-control query_input" />
                </div>
              </div>
              <div className="form-group row no-gutters">
                <div className="col-sm-5 col-form-label text-right mr-3"><kbd data-html="true" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="Number of seconds the screenshot is cached. API calls with the same parameters do return a cached screenshot and don't count in your monthly quota. <span class=&quot;text-muted&quot;>From 0 seconds to 2592000 seconds (30 days).</span>" data-original-title title>
                    ttl
                  </kbd></div>
                <div className="col my-auto">
                  <input id="ttl" name="ttl" placeholder={86400} type="text" defaultValue={86400} className="form-control query_input" />
                </div>
                <div className="col ml-2 mt-2"><small className="text-muted">seconds</small></div>
              </div>
              <div className="form-group row no-gutters">
                <div className="col-sm-5 col-form-label text-right mr-3"><kbd data-html="true" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="Force the API to capture a fresh new screenshot instead of returning a screenshot from the cache." data-original-title title>
                    fresh
                  </kbd></div>
                <div className="col my-auto">
                  <div className="custom-control custom-checkbox">
                    <input id="fresh" name="fresh" type="checkbox" defaultValue="y" className="custom-control-input" />
                    <label htmlFor="fresh" className="custom-control-label"></label>
                  </div>
                </div>
              </div>
              <div className="form-group row no-gutters">
                <div className="col-sm-5 col-form-label text-right mr-3"><kbd data-html="true" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="Set this parameter to <code>true</code> to capture the entire page of the target website." data-original-title title>
                    full_page
                  </kbd></div>
                <div className="col my-auto">
                  <div className="custom-control custom-checkbox">
                    <input id="full_page" name="full_page" type="checkbox" defaultValue="y" className="custom-control-input" />
                    <label htmlFor="full_page" className="custom-control-label">&nbsp;</label>
                  </div>
                </div>
              </div>
              <div className="form-group row no-gutters">
                <div className="col-sm-5 col-form-label text-right mr-3"><kbd data-html="true" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="Set this parameter to <code>true</code> to scroll through the entire page before capturing a screenshot. <span class=&quot;text-muted&quot;>This is useful to trigger animations or lazy loaded elements.</span>" data-original-title title>
                    scroll_page
                  </kbd></div>
                <div className="col my-auto">
                  <div className="custom-control custom-checkbox">
                    <input id="scroll_page" name="scroll_page" type="checkbox" defaultValue="y" className="custom-control-input" />
                    <label htmlFor="scroll_page" className="custom-control-label">&nbsp;</label>
                  </div>
                </div>
              </div>
              <div className="form-group row no-gutters">
                <div className="col-sm-5 col-form-label text-right mr-3"><kbd data-html="true" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="The width, in pixels, of the viewport to use." data-original-title title>
                    width
                  </kbd></div>
                <div className="col my-auto">
                  <input id="width" name="width" placeholder={1920} type="number" defaultValue={1920} className="form-control query_input" />
                </div>
                <div className="col ml-2 mt-2"><small className="text-muted">pixels</small></div>
              </div>
              <div className="form-group row no-gutters">
                <div className="col-sm-5 col-form-label text-right mr-3"><kbd data-html="true" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="The height, in pixels, of the viewport to use. <span class=&quot;text-muted&quot;>This is ignored if <kbd>full_page</kbd> is <code>true</code>.</span>" data-original-title title> height </kbd>
                </div>
                <div className="col my-auto">
                  <input id="height" name="height" placeholder={1080} type="number" defaultValue={1080} className="form-control query_input" />
                </div>
                <div className="col ml-2 mt-2"><small className="text-muted">pixels</small></div>
              </div>
              <div className="form-group row no-gutters">
                <div className="col-sm-5 col-form-label text-right mr-3"><kbd data-html="true" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="The delay, in seconds, to wait after the page is loaded <span class=&quot;text-muted&quot;>(<code>load</code> event fired and no more network connections for at least 500ms)</span> before capturing the screenshot. <span class=&quot;text-muted&quot;>From 0 seconds to a maximum of 10 seconds.</span>" data-original-title title>
                    delay
                  </kbd></div>
                <div className="col my-auto">
                  <input id="delay" name="delay" placeholder={0} type="number" defaultValue={0} className="form-control query_input" />
                </div>
                <div className="col ml-2 mt-2"><small className="text-muted">seconds</small></div>
              </div>
              <div className="form-group row no-gutters">
                <div className="col-sm-5 col-form-label text-right mr-3"><kbd data-html="true" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="Wait until the provided CSS selector matches an element present in the page before capturing a screenshot. The process times out after 40 seconds." data-original-title title>
                    wait_for
                  </kbd></div>
                <div className="col my-auto">
                  <input id="wait_for" name="wait_for" placeholder type="text" defaultValue className="form-control query_input" />
                </div>
              </div>
              <div className="form-group row no-gutters">
                <div className="col-sm-5 col-form-label text-right mr-3"><kbd data-html="true" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="Capture a screenshot of the first element matched by the given CSS selector." data-original-title title>
                    element
                  </kbd></div>
                <div className="col my-auto">
                  <input id="element" name="element" placeholder type="text" defaultValue className="form-control query_input" />
                </div>
              </div>
              <div className="form-group row no-gutters">
                <div className="col-sm-5 col-form-label text-right mr-3"><kbd data-html="true" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="The image format of the captured screenshot. Either <code>jpeg</code> or <code>png</code>." data-original-title title>
                    format
                  </kbd></div>
                <div className="col my-auto">
                  <div className="d-flex">
                    <div className="custom-control custom-radio mb-0 mr-3">
                      <input defaultChecked="checked" id="format-0" name="format" type="radio" defaultValue="jpeg" className="custom-control-input" />
                      <label htmlFor="format-0" className="custom-control-label"> jpeg </label>
                    </div>
                    <div className="custom-control custom-radio mb-0 mr-3">
                      <input id="format-1" name="format" type="radio" defaultValue="png" className="custom-control-input" />
                      <label htmlFor="format-1" className="custom-control-label"> png </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group row no-gutters">
                <div className="col-sm-5 col-form-label text-right mr-3"><kbd data-html="true" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="
  The type of response to return. Can be either <code>image</code> or <code>json</code>. <br/>
  <span class=&quot;text-muted&quot;><ul class=&quot;mt-2 mb-0&quot;><li>If the response type is <code>image</code>, the binary data of the 
  screenshot is returned with the appropriate <code>Content-Type</code> and <code>Content-Length</code> headers.</li>
  <li>If the response type is <code>json</code>, the response is a json document<span class=&quot;d-lg-none&quot;>.</span> 
  <span class=&quot;d-none d-lg-inline&quot;>formatted as follows:  
  <pre class=&quot;border mt-2 mb-0&quot;><code class=&quot;json&quot;>{
&quot;url&quot;: &quot;https://url_of_screenshot_image...&quot;,
&quot;extracted_html&quot;: &quot;https://url_of_extracted_html_here...&quot;,
&quot;extracted_text&quot;: &quot;https://url_of_extracted_text_here...&quot; 
  }</code></pre></span></li></ul></span>" data-original-title title>
                    response_type
                  </kbd></div>
                <div className="col my-auto">
                  <div className="d-flex">
                    <div className="custom-control custom-radio mb-0 mr-3">
                      <input id="response_type-0" name="response_type" type="radio" defaultValue="json" className="custom-control-input" />
                      <label htmlFor="response_type-0" className="custom-control-label"> json </label>
                    </div>
                    <div className="custom-control custom-radio mb-0 mr-3">
                      <input defaultChecked="checked" id="response_type-1" name="response_type" type="radio" defaultValue="image" className="custom-control-input" />
                      <label htmlFor="response_type-1" className="custom-control-label"> image </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group row no-gutters">
                <div className="col-sm-5 col-form-label text-right mr-3"><kbd data-html="true" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="The quality of the image between <code>0</code> and <code>100</code>. This only works with the <code>jpeg</code> format." data-original-title title>
                    quality
                  </kbd></div>
                <div className="col my-auto">
                  <input id="quality" name="quality" placeholder={80} type="number" defaultValue={80} className="form-control query_input" />
                </div>
              </div>
              <div className="form-group row no-gutters">
                <div className="col-sm-5 col-form-label text-right mr-3"><kbd data-html="true" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="Hides the default background and allows capturing screenshots with transparency. This only works with the <code>png</code> format." data-original-title title>
                    transparent
                  </kbd></div>
                <div className="col my-auto">
                  <div className="custom-control custom-checkbox">
                    <input id="transparent" name="transparent" type="checkbox" defaultValue="y" className="custom-control-input" />
                    <label htmlFor="transparent" className="custom-control-label">&nbsp;</label>
                  </div>
                </div>
              </div>
              <div className="form-group row no-gutters">
                <div className="col-sm-5 col-form-label text-right mr-3"><kbd data-html="true" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="The width, in pixels, of the thumbnail to generate. The aspect ratio will be preserved. <span class=&quot;text-muted&quot;>This is ignored if <kbd>full_page</kbd> is <code>true</code>.</span>" data-original-title title> thumbnail_width </kbd>
                </div>
                <div className="col my-auto">
                  <input id="thumbnail_width" name="thumbnail_width" placeholder type="number" defaultValue className="form-control query_input" />
                </div>
              </div>
              <div className="form-group row no-gutters">
                <div className="col-sm-5 col-form-label text-right mr-3"><kbd data-html="true" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="The device scale factor to use when capturing the screenshot. A scale factor of <code>2</code> will produce a high definition screenshot suited to be displayed on retina devices. <span class=&quot;text-muted&quot;>The bigger the scale factor is, the heavier the produced screenshot will be.</span>" data-original-title title>
                    scale_factor
                  </kbd></div>
                <div className="col my-auto">
                  <input id="scale_factor" name="scale_factor" placeholder={1} type="number" defaultValue={1} className="form-control query_input" />
                </div>
              </div>
              <div className="form-group row no-gutters">
                <div className="col-sm-5 col-form-label text-right mr-3"><kbd data-html="true" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="A CSS string to inject in the web page when capturing the screenshot. <span class=&quot;text-muted&quot;>This CSS string needs to be URL encoded to be processed correctly.</span>" data-original-title title>
                    css
                  </kbd></div>
                <div className="col my-auto">
                  <textarea id="css" name="css" placeholder className="form-control query_input" defaultValue={""} />
                </div>
              </div>
              <div className="form-group row no-gutters">
                <div className="col-sm-5 col-form-label text-right mr-3"><kbd data-html="true" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="Additional JavaScript code to be injected into the page before capturing. <span class=&quot;text-muted&quot;>The JS string needs to be URL encoded to be processed correctly.</span>" data-original-title title>
                    js
                  </kbd></div>
                <div className="col my-auto">
                  <textarea id="js" name="js" placeholder className="form-control query_input" defaultValue={""} />
                </div>
              </div>
              <div className="form-group row no-gutters">
                <div className="col-sm-5 col-form-label text-right mr-3"><kbd data-html="true" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="Extract the HTML of the page at the same time the screenshot is made. This only works when the <kbd>response_type</kbd> parameter is set to <code>json</code>. When this parameter is set to <code>true</code>, an <code>extracted_html</code> attribute is added to the returned json document." data-original-title title> extract_html </kbd>
                </div>
                <div className="col my-auto">
                  <div className="custom-control custom-checkbox">
                    <input id="extract_html" name="extract_html" type="checkbox" defaultValue="y" className="custom-control-input" />
                    <label htmlFor="extract_html" className="custom-control-label">&nbsp;</label>
                  </div>
                </div>
              </div>
              <div className="form-group row no-gutters">
                <div className="col-sm-5 col-form-label text-right mr-3"><kbd data-html="true" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="Extract the text of the page at the same time the screenshot is made. This only works when the <kbd>response_type</kbd> parameter is set to <code>json</code>. When this parameter is set to <code>true</code>, an <code>extracted_text</code> attribute is added to the returned json document." data-original-title title> extract_text </kbd>
                </div>
                <div className="col my-auto">
                  <div className="custom-control custom-checkbox">
                    <input id="extract_text" name="extract_text" type="checkbox" defaultValue="y" className="custom-control-input" />
                    <label htmlFor="extract_text" className="custom-control-label">&nbsp;</label>
                  </div>
                </div>
              </div>
              <div className="form-group row no-gutters">
                <div className="col-sm-5 col-form-label text-right mr-3"><kbd data-html="true" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="Sets the <code>Accept-Language</code> header on requests to the target URL allowing you to make screenshots of a website with a specific language." data-original-title title>
                    accept_language
                  </kbd></div>
                <div className="col my-auto">
                  <input id="accept_language" name="accept_language" placeholder type="text" defaultValue className="form-control query_input" />
                </div>
              </div>
              <div className="form-group row no-gutters">
                <div className="col-sm-5 col-form-label text-right mr-3"><kbd data-html="true" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="Sets the <code>User-Agent</code> header to emulate a particular device when making screenshots. <span class=&quot;text-muted&quot;>It should be URL encoded to be processed correctly.</span>" data-original-title title>
                    user_agent
                  </kbd></div>
                <div className="col my-auto">
                  <input id="user_agent" name="user_agent" placeholder type="text" defaultValue className="form-control query_input" />
                </div>
              </div>
              <div className="form-group row no-gutters">
                <div className="col-sm-5 col-form-label text-right mr-3"><kbd data-html="true" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="A semicolon separated list of headers to be used when capturing the screenshot. Each header should be supplied as a key value pair and multiple pairs should be separated by a semicolon. The <kbd>headers</kbd> parameter value should be URL encoded to be processed correctly. <span class=&quot;text-muted&quot;>For example, <code>Header1=value1;Header2=value2</code> would have to be URL encoded into <code>Header1%3Dvalue1%3BHeader2%3Dvalue2</code>.</span>" data-original-title title> headers </kbd>
                </div>
                <div className="col my-auto">
                  <input id="headers" name="headers" placeholder type="text" defaultValue className="form-control query_input" />
                </div>
              </div>
              <div className="form-group row no-gutters">
                <div className="col-sm-5 col-form-label text-right mr-3"><kbd data-html="true" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="A semicolon separated list of cookies to be used when capturing the screenshot. Each cookie should be supplied as a name value pair and multiple pairs should be separated by a semicolon. The <kbd>cookies</kbd> parameter value should be URL encoded to be processed correctly. <span class=&quot;text-muted&quot;>For example, <code>cookie1=value1;cookie2=value2</code> would have to be URL encoded into <code>cookie1%3Dvalue1%3Bcookie2%3Dvalue2</code>.</span>" data-original-title title> cookies </kbd>
                </div>
                <div className="col my-auto">
                  <input id="cookies" name="cookies" placeholder type="text" defaultValue className="form-control query_input" />
                </div>
              </div>
              <div className="form-group row no-gutters">
                <div className="col-sm-5 col-form-label text-right mr-3"><kbd data-html="true" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="An ISO alpha-2 country code designating the country that should be associated with the IP address of the proxy through which the screenshot is captured. <span class=&quot;text-muted&quot;>This feature is only available for custom enterprise plans. Get in touch with us if you need it.</span>" data-original-title title>
                    ip_location
                  </kbd></div>
                <div className="col my-auto">
                  <input id="ip_location" name="ip_location" placeholder type="text" defaultValue className="form-control query_input" />
                </div>
              </div>
              <div className="form-group row no-gutters">
                <div className="col-sm-5 col-form-label text-right mr-3"><kbd data-html="true" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="The latitude to use when emulating geo-location between <code>-90</code> and <code>90</code>." data-original-title title>
                    latitude
                  </kbd></div>
                <div className="col my-auto">
                  <input id="latitude" name="latitude" placeholder type="text" defaultValue className="form-control query_input" />
                </div>
              </div>
              <div className="form-group row no-gutters">
                <div className="col-sm-5 col-form-label text-right mr-3"><kbd data-html="true" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="The longitude to use when emulating geo-location between <code>-180</code> and <code>180</code>." data-original-title title>
                    longitude
                  </kbd></div>
                <div className="col my-auto">
                  <input id="longitude" name="longitude" placeholder type="text" defaultValue className="form-control query_input" />
                </div>
              </div>
              <div className="form-group row no-gutters">
                <div className="col-sm-5 col-form-label text-right mr-3"><kbd data-html="true" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="Accuracy value to use when emulating geo-location." data-original-title title>
                    accuracy
                  </kbd></div>
                <div className="col my-auto">
                  <input id="accuracy" name="accuracy" placeholder={0} type="number" defaultValue={0} className="form-control query_input" />
                </div>
                <div className="col ml-2 mt-2"><small className="text-muted">meters</small></div>
              </div>
              <div className="form-group row no-gutters">
                <div className="col-sm-5 col-form-label text-right mr-3"><kbd data-html="true" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="A comma separated list of HTTP status codes that should make the API call fail instead of returning a screenshot. <span class=&quot;text-muted&quot;>Hyphen separated HTTP status codes can be used to define ranges. For example <code>400,404,500-511</code> would make the API call fail if the URL returns 400, 404 or any status code between 500 and 511.</span>" data-original-title title>
                    fail_on_status
                  </kbd></div>
                <div className="col my-auto">
                  <input id="fail_on_status" name="fail_on_status" placeholder type="text" defaultValue className="form-control query_input" />
                </div>
              </div>
              <div className="form-group row no-gutters">
                <div className="col-sm-5 col-form-label text-right mr-3"><kbd data-html="true" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="The address of a proxy server through which the screenshot should be captured. The proxy address should be formatted as <code>address:port</code> or <code>user:password@address:port</code> if authentication is needed." data-original-title title>
                    proxy
                  </kbd></div>
                <div className="col my-auto">
                  <input id="proxy" name="proxy" placeholder type="text" defaultValue className="form-control query_input" />
                </div>
              </div>
              <div className="form-group row no-gutters">
                <div className="col-sm-5 col-form-label text-right mr-3"><kbd data-html="true" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="Prevent ads from being displayed. Block requests from popular ad-networks and hide common ad spaces." data-original-title title>
                    no_ads
                  </kbd></div>
                <div className="col my-auto">
                  <div className="custom-control custom-checkbox">
                    <input id="no_ads" name="no_ads" type="checkbox" defaultValue="y" className="custom-control-input" />
                    <label htmlFor="no_ads" className="custom-control-label">&nbsp;</label>
                  </div>
                </div>
              </div>
              <div className="form-group row no-gutters">
                <div className="col-sm-5 col-form-label text-right mr-3"><kbd data-html="true" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="Prevent tracking scripts to run and block requests from popular tracking services. Use this to prevent page views to be incorrectly reported to tracking tools when screenshots are captured." data-original-title title>
                    no_tracking
                  </kbd></div>
                <div className="col my-auto">
                  <div className="custom-control custom-checkbox">
                    <input id="no_tracking" name="no_tracking" type="checkbox" defaultValue="y" className="custom-control-input" />
                    <label htmlFor="no_tracking" className="custom-control-label">&nbsp;</label>
                  </div>
                </div>
              </div>
              <div className="form-group row no-gutters">
                <div className="col-sm-5 col-form-label text-right mr-3"><kbd data-html="true" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="Prevent cookie banners and popups from being displayed." data-original-title title>
                    no_cookie_banners
                  </kbd></div>
                <div className="col my-auto">
                  <div className="custom-control custom-checkbox">
                    <input id="no_cookie_banners" name="no_cookie_banners" type="checkbox" defaultValue="y" className="custom-control-input" />
                    <label htmlFor="no_cookie_banners" className="custom-control-label">&nbsp;</label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="af-sticky" style={{position:'fixed'}}>
          <div className="card card-body bg-light border-left-0 d-flex flex-column align-items-center" style={{borderBottomLeftRadius: 0, borderTopLeftRadius: 0}}>
            <div className="text-dark" data-original-title title><span>https://api.apiflash.com/v1/urltoimage </span><span className="ml-4 d-block text-nowrap">?<span className="text-primary font-weight-bold">access_key</span>=<b>20ebab4a09ac4d74b800dc2a91969d77</b></span>
            </div>
            <div>
              <button disabled="disabled" className="btn btn-primary mt-3 af-pointer"> Copy to clipboard </button> <NavLink exact to="https://api.apiflash.com/v1/urltoimage?access_key=20ebab4a09ac4d74b800dc2a91969d77" target="_blank" rel="nofollow" className="btn btn-primary mt-3 ml-3 af-pointer disabled">
                Launch in new tab
              </NavLink></div>
          </div>
          <div className="text-muted text-center my-5"> Need help or have questions? 
            <br />
            <br /> <NavLink exact to='' onclick="event.preventDefault(); $crisp.push(['do', 'chat:open'])" className="af-pointer" style={{color:'rgb(92 76 173)'}}>
              Chat with us live
              <i class="fas fa-comment-alt" style={{margin:'0 10px'}}></i></NavLink> or check the <NavLink exact to="/faq" style={{color:'rgb(92 76 173)'}}>FAQ</NavLink>. </div>
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

export default Query_builder