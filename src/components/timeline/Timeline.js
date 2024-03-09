import React from 'react'
import Layout from '../Layout'
import { motion } from "framer-motion"
import '../timeline/Timeline.scss'

export default function Timeline() {
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
        transition={{ duration: 0.7, type:'spring' }}
        className="card card-body blur shadow-blur mx-3 mx-md-4 mt-n5 ">
        <section className=" position-relative">
          <div className="container">
            <div className="row">
              <div className="col-12 mx-auto">
                <div className="row py-5">
                  <div className="col-lg-7 col-md-7 z-index-2 position-relative px-md-2 px-sm-5 mx-auto">
                    <div className="d-flex justify-content-between align-items-center">
                      <span> <h3 className="mb-0">Timeline</h3>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <div className="container">
          <section id='timeline'>

            <div className="demo-card-wrapper">
              <div className="demo-card demo-card--step1">
                <div className="head">
                  <div className="number-box">
                    <span>MAY 2022</span>
                  </div>
                  <h2><span className="small">Jr. Developer</span> Kearney</h2>
                </div>
                <div className="body">
                  <p>Currently working with KNET team for the developement of internal tools/portals</p>
                  <br />
                  <p>Built a tracking tool from scratch which is currently used by the employees across globe.</p>
                  <br />
                  <p>Tech Stack: Spring boot, JSP, Servelets, Angular, Js, Oracle, SQL Server </p>
                </div>
              </div>

              <div className="demo-card demo-card--step2">
                <div className="head">
                  <div className="number-box">
                    <span>JUN 2021</span>
                  </div>
                  <h2><span className="small">System Engineer</span> Infosys</h2>
                </div>
                <div className="body">
                  <p>Worked with the ADM team for a financial client in Business Credit Service,Worked on feature
                    development/enhancement for $1M-3M deal category (WSL), Optimization of the already existing system.
                  </p>
                  <br />
                  <p>Tech Stack: Spring boot, Angular, Oracle</p>


                </div>
              </div>

              <div className="demo-card demo-card--step3">
                <div className="head">
                  <div className="number-box">
                    <span>JAN 2021</span>
                  </div>
                  <h2><span className="small">System Engineer Trainee</span> Infosys</h2>
                </div>
                <div className="body">
                  <p>Trained in Java, DSA, SQL, Spring boot, Angular.</p>
                  <p>Qualified with a HPF rating.</p>

                </div>
              </div>

              <div className="demo-card demo-card--step4">
                <div className="head">
                  <div className="number-box">
                    <span>SEPT 2020</span>
                  </div>
                  <h2><span className="small">B.Tech, Electronics</span>SRM University</h2>
                </div>
                <div className="body">
                  <p>
                    Graduated the bachelor's in electronics and communication.

                  </p>

                </div>
              </div>

              <div className="demo-card demo-card--step5">
                <div className="head">
                  <div className="number-box">
                    <span>APR 2016</span>
                  </div>
                  <h2><span className="small">Higher Secondary</span> Mamta Modern</h2>
                </div>
                <div className="body">
                  <p>
                    Graduated the Higher Secondary with major in Physics, Chemistry, Mathematics.
                  </p>


                </div>
              </div>

            </div>
          </section>
        </div>

      </motion.div>

    </Layout>
  )
}
