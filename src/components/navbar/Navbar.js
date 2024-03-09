import React from 'react'
import { motion } from "framer-motion"
import { Routes, Route, Navigate, Link } from "react-router-dom";

export default function Navbar() {
    return (

        <>


            <motion.div
                // initial={{ opacity: 0.5, y:-100 }}
                // animate={{opacity:1, y:0}}
                // transition={{ ease: "easeOut", duration: 0.5, type: "spring", stiffness: 300 }}

                className="container position-sticky z-index-sticky top-0">
                <div className="row">
                    <div className="col-12">
                        <nav
                            className="navbar navbar-expand-lg  blur border-radius-xl top-0 z-index-fixed shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
                            <div className="container-fluid px-0">
                                <Link to="/" className="navbar-brand font-weight-bolder ms-sm-3"
                                    rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom">
                                    NKR4M
                                </Link>
                                <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon mt-2">
                                        <span className="navbar-toggler-bar bar1"></span>
                                        <span className="navbar-toggler-bar bar2"></span>
                                        <span className="navbar-toggler-bar bar3"></span>
                                    </span>
                                </button>
                                <div className="collapse navbar-collapse pt-3 pb-2 py-lg-0 w-100" id="navigation">
                                    <ul className="navbar-nav navbar-nav-hover ms-auto">


                                        <li className="nav-item ms-lg-auto">
                                            <Link to="/timeline" className="nav-link nav-link-icon me-2"
                                                >
                                                <i className="fa fa-list me-1"></i>
                                                <p className="d-inline text-sm z-index-1 font-weight-bold" data-bs-toggle="tooltip"
                                                    data-bs-placement="bottom" title="Star us on Github">Timeline</p>
                                            </Link>
                                        </li>

                                        <li className="nav-item ms-lg-auto">
                                            <Link to="/projects" className="nav-link nav-link-icon me-2" 
                                                >
                                                <i className="fa fa-star me-1"></i>
                                                <p className="d-inline text-sm z-index-1 font-weight-bold" data-bs-toggle="tooltip"
                                                    data-bs-placement="bottom" title="Star us on Github">Projects</p>
                                            </Link>
                                        </li>

                                        {/* <li className="nav-item ms-lg-auto">
                                            <Link to="/connect" className="nav-link nav-link-icon me-2" >
                                                <i className="fa fa-group me-1"></i>
                                                <p className="d-inline text-sm z-index-1 font-weight-bold" data-bs-toggle="tooltip"
                                                    data-bs-placement="bottom" title="Star us on Github">Connect</p>
                                            </Link>
                                        </li> */}


                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </motion.div>

        </>
    )
}
