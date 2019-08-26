import React, { Component } from "react";

export default class Work extends Component {
  render() {
    return (
      <section
        className="colorlib-work"
        id="work"
        data-section="work"
        style={{ marginTop: 40 }}
      >
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">My Work</span>
              <h2 className="colorlib-heading animate-box">Recent Projects</h2>
              <h3 className="colorlib-heading animate-box">Academic</h3>
            </div>
          </div>
          {/*<div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
              <div className="col-md-12">
                <p className="work-menu"><span><button className="active">Graphic Design</button></span> <span><button>Web Design</button></span> <span><button>Software</button></span> <span><button>Apps</button></span></p>
              </div>
    </div>*/}
          <div className="row">
            {/* <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
               <div className="project" style={{backgroundImage: 'url(images/img-1.jpg)'}}>
                  <div className="desc">
                    <div className="con">
                      <h3><a href="work.html">Work 01</a></h3>
                      <span>Website</span>
                      <p className="icon">
                        <span><button><i className="icon-share3" /></button></span>
                        <span><button><i className="icon-eye" /> 100</button></span>
                        <span><button><i className="icon-heart" /> 49</button></span>
                      </p>
                    </div>
                  </div>
                </div>
                </div>
                <section className="colorlib-experience" data-section="experience">*/}
            <div className="colorlib-narrow-content">
              {/*<div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Experience</span>
                <h2 className="colorlib-heading animate-box">Work Experience</h2>
              </div>
            </div>*/}
              <div className="row">
                <div className="col-md-12">
                  <div className="timeline-centered">
                    <article
                      className="timeline-entry animate-box"
                      data-animate-effect="fadeInLeft"
                    >
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-1">
                          <i className="icon-pen2" />
                        </div>
                        <div className="timeline-label">
                          <h2>
                            <div style={{ color: "#f33612", fontSize: "25px" }}>
                              Code Analysis Software Tool{" "}
                              <span style={{ color: "black" }}>
                                Aug 2018-Dec 2018
                              </span>
                            </div>
                            <div style={{ fontSize: "19px", color: "black" }}>
                              Domain: Enterprise Software Development
                            </div>
                            <div
                              style={{
                                fontSize: "15px",
                                color: "#1414f5",
                                textDecoration: "underline"
                              }}
                            >
                              Technology Stacks and Skills:
                            </div>
                            <div style={{ fontSize: "15px" }}>
                              C#, Windows Communication Foundation(WCF), Windows
                              Presentation Foundation(WPF), Software Design{" "}
                            </div>
                          </h2>
                          <ul>
                            <li>
                              Documenting Operational Concept Document (OCD)
                              which provides the design and implementation of
                              the project
                            </li>
                            <li>
                              Building Parsers for the software tool, mainly the
                              tokenizer and Semi-expression package
                            </li>
                            <ul>
                              <li>
                                Tokenizer extracts words, called tokens from a
                                stream of characters
                              </li>
                              <li>
                                Semi-expression groups tokens into sets,each of
                                which contain all the information needed to
                                analyze some grammatical construct without
                                cotaining extra tokens that have to be saved for
                                subsequent anlysis
                              </li>
                            </ul>
                            <li>
                              Building local test package dependency analyzer:{" "}
                            </li>
                            <ul>
                              <li>
                                TypeTabe and TypeAnalysis: TypeTable provides
                                container that stores type information needed
                                for dependency analysis like classes, structs,
                                enums and aliases
                              </li>
                              <li>
                                Dependency Analysis: This package finds, for
                                each file in a specified collection, all other
                                files from the collection on which they depend
                              </li>
                              <li>
                                Strong Component: It is the largest set of files
                                that are mutually dependent
                              </li>
                            </ul>
                            <li>
                              Building a remote package dependency analyzer
                              using WCF framework and WPF for the Client
                            </li>
                          </ul>
                          <div style={{marginLeft: "700px"}}><button  data-animate-effect="fadeInTop">View Project</button> <a href="https://github.com/anish9461/Code-Analysis-Software-Tool" style={{textDecoration: "underline"}}>View Source Code</a></div>
                        </div>
                        
                      </div>
                    </article>
                    <article
                      className="timeline-entry animate-box"
                      data-animate-effect="fadeInRight"
                    >
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-2">
                          <i className="icon-pen2" />
                        </div>
                        <div className="timeline-label">
                          <h2>
                            <button>
                              Question Answering System (Python + Deep Learning)
                            </button>{" "}
                            <span>Oct 2018-Dec 2018</span>
                          </h2>
                          <p>
                            • Implemented Dynamic Memory Network (DNM) on top of
                            RNN to generate contextual answers to the long input
                            sequence which decreased false negative rates by 61%
                            on average than the regular RNN model
                          </p>
                          <p>
                            • Tuned and trained the model using Python, Jupyter
                            Notebook, Tensorflow libraries and Facebook’s bAbI
                            dataset which achieved the accuracy of 95% overall
                          </p>
                        </div>
                      </div>
                    </article>
                    <article
                      className="timeline-entry animate-box"
                      data-animate-effect="fadeInLeft"
                    >
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-5">
                          <i className="icon-pen2" />
                        </div>
                        <div className="timeline-label">
                          <h2>
                            <button>Nucleus Message Passing (C++)</button>{" "}
                            <span>Nov 2018-Dec 2018</span>
                          </h2>
                          <p>
                            • Designed a new socket based communication channel
                            for internal processes by maintaining a common pool
                            of message buffers and a message queue for each
                            process using Nachos in C++, improves the
                            interaction between OS and processes
                          </p>
                          <p>
                            • This extension allowed the processes to
                            communicate efficiently using different methods like
                            sendMessage, waitMessage, sendAnswer and waitAnswer
                          </p>
                        </div>
                      </div>
                    </article>
                    <article
                      className="timeline-entry animate-box"
                      data-animate-effect="fadeInTop"
                    >
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-4">
                          <i className="icon-pen2" />
                        </div>
                        <div className="timeline-label">
                          <h2>
                            <button>Facebook Data Mining</button>{" "}
                            <span>Mar 2018-Apr 2018</span>
                          </h2>
                          <p>
                            • Analyzed, discovered knowledge and categorized the
                            Facebook page data i.e. comments, likes, shares
                          </p>
                          <p>
                            • Worked with Facebook API and python libraries like
                            urllib.request, JSON, datetime, csv, time libraries
                            for data fetching
                          </p>
                          <p>
                            • Extracted data can be used for the future
                            prediction and development and launch of the new
                            products
                          </p>
                        </div>
                      </div>
                    </article>
                    <article
                      className="timeline-entry animate-box"
                      data-animate-effect="fadeInLeft"
                    >
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-3">
                          <i className="icon-pen2" />
                        </div>
                        <div className="timeline-label">
                          <h2>
                            <button>
                              Software Repository - NoSQL database (C++)
                            </button>{" "}
                            <span>Jan 2017-May 2018</span>
                          </h2>
                          <p>
                            • Constructed NoSQL database for manipulating and
                            constructing data, persisting and querying database
                            using C++
                          </p>
                          <p>
                            • developed versioning, check-in, check-out, and
                            browsing of the source code in the repository and
                            performed TDD-unit testing
                          </p>
                          <p>
                            • Created Socket based C++ message-passing
                            communication which allows transferring of files to
                            and from local Client
                          </p>
                        </div>
                      </div>
                    </article>
                    <article
                      className="timeline-entry animate-box"
                      data-animate-effect="fadeInLeft"
                    >
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-0">
                          <i className="icon-pen2" />
                        </div>
                        <div className="timeline-label">
                          <h2>
                            <button>RentMaster</button>{" "}
                            <span>June 2017-June 2018</span>
                          </h2>
                          <p>
                            • Developed and designed a full-stack application
                            used by a registered user for renting commodity to
                            get a fair market value
                          </p>
                          <p>
                            • Built backend APIs in PHP, Data access implemented
                            using REST services and front-end UI using XML
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
