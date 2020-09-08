import React from 'react'
import { NavLink } from 'react-router-dom';
import Validation from './Validation';


const Sign_up = () => {
    return (
        <>
            <section class="section_form">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 mx-auto">
                            <form id="form" className="form card-body">
                            <NavLink exact to="#" className="navbar-brand"><img src='https://pageimages.s3.ap-south-1.amazonaws.com/header+log.svg' alt="logo" className="logo" /></NavLink>
                                <div className="form-control">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" id="email" placeholder="Enter email" />
                                    <small>Error Message</small>
                                </div>
                                <div className="form-control">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" placeholder="Enter password" />
                                    <small>Error Message</small>
                                </div>
                                <div className="form-control">
                                    <label htmlFor="password2">Confirm Password</label>
                                    <input type="password" id="password2" placeholder="Enter password again" />
                                    <small>Error Message</small>
                                </div>
                                <navlink exact to="/login" onclick='Validation()'><button>Submit</button></navlink>
                                <div classname="sign-up my-2">or sign up with
                                <div className="footer-social-icon my-2">
                                        <a href="#"><i className="fab fa-facebook-f facebook-bg" /></a>
                                        <a href="#"><i className="fab fa-twitter twitter-bg" /></a>
                                        <a href="#"><i className="fab fa-google google-bg" /></a>
                                    </div>
                                </div>
                                <div classname="sign-up my-2">Already have an account? <navlink exact to="/login" style={{color:'#2885c3'}} >Log in</navlink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sign_up