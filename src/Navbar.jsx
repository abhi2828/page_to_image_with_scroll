import React from 'react'
import {NavLink} from  'react-router-dom';

const Navbar = () => {
    return (
        <>
            <section>
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <div className="container container1">
                        <NavLink exact to="#" className="navbar-brand"><img src='https://pageimages.s3.ap-south-1.amazonaws.com/header+log.svg' alt="logo" className="logo" /></NavLink>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav">
                            <NavLink exact to="/" className="nav-item nav-link Active_page">Home</NavLink>
                                <NavLink exact to="/Doc" className="nav-item nav-link">Documentation</NavLink>
                                <NavLink exact to="/blog" className="nav-item nav-link blog">Blog</NavLink>
                            </div>
                            <div className="navbar-nav ml-auto">
                                <div className="row">
                                    <div className="col-md-6">
                                       <NavLink exact to="/login"><button type="button" className="btn btns login header_btn">Login</button></NavLink>
                                    </div>
                                    <br /><br />
                                    <div className="col-md-6">
                                        <NavLink exact to="/sign_up"> <button type="button" className="btn btns btn-outline-danger header_btn active">Sign up</button></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default Navbar