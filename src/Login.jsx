import React from 'react'
import { NavLink } from 'react-router-dom';
import Validation from './Validation';

const Login = () => {
    return ( 
        <>
            <section className="section_form">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 mx-auto">
                            <form id="form" className="form card-body">
                            <NavLink exact to="#" className="navbar-brand"><img src='https://pageimages.s3.ap-south-1.amazonaws.com/header+log.svg' alt="logo" className="logo" /></NavLink>
                                <div className="form-control">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" id="email" placeholder="Enter email" value="Admin" />
                                    <small>Error Message</small>
                                </div>
                                <div className="form-control">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" placeholder="Enter password" value="Admin" />
                                    <small>Error Message</small>
                                </div>
                                <NavLink to="/forgot_password" className="my-2" style={{ float: 'right', fontSize: 12 }}>Forgot password?</NavLink>
                                <NavLink exact to="/Usage" onclick='Validation()'><button>Log in</button></NavLink>
                                <div classname="sign-up my-2">or sign up with
                                <div className="footer-social-icon my-2">
                                        <a href="#"><i className="fab fa-facebook-f facebook-bg" /></a>
                                        <a href="#"><i className="fab fa-twitter twitter-bg" /></a>
                                        <a href="#"><i className="fab fa-google google-bg" /></a>
                                    </div>
                                </div>
                                <div classname="sign-up my-2">New to Page To Image? <NavLink exact to="/sign_up">Create an account.</NavLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login   

