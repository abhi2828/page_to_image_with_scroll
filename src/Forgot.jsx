import React from 'react'
import { NavLink } from 'react-router-dom';

const Forgot = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mx-auto " style={{ marginTop: '5%' }}>
                            <div className="card login-form">
                                <div className="login_card_body card-body">
                                    <NavLink exact to="/" className="navbar-brand"><img src='https://pageimages.s3.ap-south-1.amazonaws.com/header+log.svg' alt="logo" className="logo" /></NavLink>
                                    <div className="card-text">
                                        <form>
                                            <div className="forgot_pass mx-auto">
                                                <h5> Reset your password</h5>
                                                <p>Enter your email address bellow and we will
                                                    send you a link to reset your password.</p>
                                            </div>
                                            <div className="form-control">
                                                <label htmlFor="email">Email</label>
                                                <input type="text" id="email" placeholder="Enter email" />
                                            </div>
                                            
                                            <NavLink exact to="/"> <button type="submit" className="btn btn-primary btn-block mx-auto my-2">Send recovery email</button></NavLink>
                                           
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Forgot