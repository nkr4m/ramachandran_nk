import React from 'react'
import '../dashboard/Dashboard.css'
import { motion } from "framer-motion"
import Layout from '../Layout';
import '../navbar/Navbar.css'

export default function Dashboard() {
    return (
        <Layout>

            <header>
                <div className="page-header min-height-300" loading="lazy">
                    <span className="mask"></span>
                </div>
            </header>
            <motion.div
                initial={{ opacity: 1, x: 500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, type: 'spring' }}
                className="card light card-body shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
                <section className="py-sm-7 py-5 position-relative">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mx-auto">
                                <div className="mt-n8 mt-md-n9 text-center">
                                    <img className="avatar avatar-xxl shadow-xl position-relative z-index-2" src="https://avatars.githubusercontent.com/u/52562193?v=4" alt="bruce" loading="lazy" />
                                </div>
                                <div className="row py-5">
                                    <div className="col-lg-7 col-md-7 z-index-2 position-relative px-md-2 px-sm-5 mx-auto">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <span> <h3 className="">Ramachandran N.K</h3>
                                                <div className="">JR. Developer | KEARNEY</div>


                                            </span>
                                            <div className="d-block">
                                                <button type="button" onClick={() => {
                                                    window.open('https://www.linkedin.com/in/nkramachandran/');
                                                }} className="btn btn-sm btn-outline-info text-nowrap ">Let's Connect</button>
                                            </div>
                                        </div>



                                        <p className="text-lg mb-0">
                                            <strong>Hi</strong>, I am a Full-Stack Developer with 2years of experience, currently working at Kearney, I am good at problem solving and ability to perform well in a team, Passionate about coding and exploring new technologies. <br />
                                        </p>
                                    </div>

                                </div>

                                <div className="row py-5">
                                    <div className="col-lg-7 col-md-7 z-index-2 position-relative px-md-2 px-sm-5 mx-auto">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <span> <h3 className="">Coding Profiles</h3>
                                            </span>
                                        </div>
                                        <div className="container text-center">
                                                <div className="row">
                                                    <div className="col-4">
                                                    <button type="button" onClick={()=>{
                                                        window.open('https://leetcode.com/nkr4m_21/');
                                                    }} className="btn btn-primary btn-sm">Leetcode</button>
                                                    </div>
                                                    <div className="col-4">
                                                    <button type="button" onClick={()=>{
                                                        window.open('https://www.hackerrank.com/nkr4m?hr_r=1');
                                                    }} className="btn btn-primary btn-sm">Hackerrank</button>
                                                    </div>
                                                    <div className="col-4">
                                                    <button type="button" onClick={()=>{
                                                        window.open('https://github.com/nkr4m');
                                                    }} className="btn btn-primary btn-sm">Github</button>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 mx-auto mb-3">
                            <div className="text-center">
                                <h3 className="mb-4">Tech Stacks</h3>
                                <div className="row justify-content-center">
                                    <div className="col-lg-2 col-4 mb-2">
                                        <a href="https://www.creative-tim.com/product/soft-ui-design-system" target="_blank">
                                            <img
                                                src="https://pbs.twimg.com/profile_images/1410016948977422337/rKU8iR89_400x400.png"
                                                className="img-fluid" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                title="Bootstrap 5 - Most popular front-end component library" />
                                        </a>
                                    </div>
                                    <div className="col-lg-2 col-4 mb-2">
                                        <a href="/">
                                            <img
                                                src="https://pbs.twimg.com/profile_images/1232983959996436481/vtIQyCjg_400x400.png"
                                                className="img-fluid opacity-6" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                title="Comming soon" />
                                        </a>
                                    </div>
                                    <div className="col-lg-2 col-4 mb-2">
                                        <a href="/">
                                            <img src="https://pbs.twimg.com/profile_images/1580919426081251330/z11bDhy-_400x400.jpg"
                                                className="img-fluid opacity-6" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                title="Comming soon" />
                                        </a>
                                    </div>
                                    <div className="col-lg-2 col-4 mb-2">
                                        <a href="/">
                                            <img
                                                src="https://pbs.twimg.com/profile_images/1235868806079057921/fTL08u_H_400x400.png"
                                                className="img-fluid opacity-6" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                title="Comming soon" />
                                        </a>
                                    </div>
                                    <div className="col-lg-2 col-4 mb-2">
                                        <a href="/">
                                            <img src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg"
                                                className="img-fluid opacity-6" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                title="Comming soon" />
                                        </a>
                                    </div>
                                    <div className="col-lg-2 col-4 mb-2">
                                        <a href="/" target="_blank">
                                            <img
                                                src="https://pbs.twimg.com/profile_images/1255113654049128448/J5Yt92WW_400x400.png"
                                                className="img-fluid opacity-6" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                title="Comming soon" />
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </motion.div>

        </Layout>
    )
}
