import React from 'react'
import Layout from '../Layout'
import { motion } from "framer-motion"

export default function Projects() {
    return (
        <Layout>

            <header>
                <div className="page-header2 min-height-100" loading="lazy">
                    <span className="mask"></span>
                </div>
            </header>
            <motion.div
                initial={{ opacity: 1, x: 500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, type: 'spring' }}
                className="card card-body blur shadow-blur mx-3 mx-md-4 mt-n5 ">
                <section className=" position-relative">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mx-auto">
                                <div className="row py-5">
                                    <div className="col-lg-7 col-md-7 z-index-2 position-relative px-md-2 px-sm-5 mx-auto">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span> <h3 className="mb-0">Projects</h3>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <div className="container" style={{ "height": "650px" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-4 mb-2">
                                <div className="card" style={{ "height": "350px" }}>
                                    <div className="card-body">
                                        <strong className='mb-2'>YouTrack | Tool for Project Management</strong>

                                        <span>
                                            <p>YouTrack is a product management tool with the functionality to collaborate
                                                with a team.</p>
                                            <p>Users can manage the work flow from the initial stage to the delivery pov.</p></span>

                                        <p>Backend: Spring Boot, Frontend: Angular, DB:MongoDB</p>
                                        <div className="float-end"><button type="button" onClick={() => {
                                            window.open('https://github.com/nkr4m/YouTrack-frontend');
                                        }} className="btn btn-primary btn-sm">Repository</button></div><br></br>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 mb-2">
                                <div className="card" style={{ "height": "350px" }}>
                                    <div className="card-body">
                                        <strong>MetroLink | Optimal Route Finder for Delhi Metro</strong>
                                        <span>
                                            <p>MetroLink was developed to understand the real world graph data structure
                                                applications, the way google maps/any route/path finder application works.
                                            </p>
                                            <p>The Application makes use of Depth-First Search and Dijkstra’s algorithm to
                                                provide the user with the most optimal route from source to destination.
                                            </p>
                                            <div className="float-end"><button type="button" onClick={() => {
                                                window.open('https://github.com/nkr4m/metroLink-client');
                                            }} className="btn btn-primary btn-sm">Repository</button></div><br></br>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 mb-2">
                                <div className="card" style={{ "height": "350px" }}>
                                    <div className="card-body">
                                        <strong>The Jersey Store | Ecommerce Application</strong>
                                        <span>
                                            <p>The Jersey Store is an ecommerce platform for sport equipments, where the
                                                users can select from the catalog and place their orders accordingly.</p>
                                            <p>Backend: Spring Boot, Frontend: Angular, DB: MYSQL</p>
                                            <br /><br />
                                            <div className="float-end"><button type="button" onClick={() => {
                                                window.open('https://github.com/nkr4m/JerseyStore-web');
                                            }} className="btn btn-primary btn-sm">Repository</button></div><br></br>
                                        </span>
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
