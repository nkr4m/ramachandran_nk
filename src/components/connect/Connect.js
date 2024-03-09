import React from 'react'
import Layout from '../Layout'
import { motion } from "framer-motion"

export default function Connect() {
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
                                            <span> <h3 className="mb-0">Connect</h3>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



            </motion.div>

        </Layout>
    )
}
