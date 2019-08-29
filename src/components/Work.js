import React, { Component } from "react";
import "../App.css";
export default class Work extends Component {
  onclick = () => {
    window.location.assign(
      "https://raw.githubusercontent.com/anish9461/Code-Analysis-Software-Tool/master/code_analysis_software_tool.gif"
    );
  };

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
                      style={{ marginTop: "5%" }}
                    >
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-1">
                          <i className="icon-pen2" />
                        </div>
                        <div className="timeline-label">
                          <h2>
                            <div style={{ color: "#f33612", fontSize: "25px" }}>
                              Personal Website{" "}
                              <span style={{ color: "black" }}>
                                Jan 2019-May 2019
                              </span>
                            </div>
                            <div style={{ fontSize: "19px", color: "black" }}>
                              Domain: Web Development
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
                              ASP .Net Core MVC, Entity Framework, SQL Server,
                              Web API and Web services
                            </div>
                          </h2>
                          <ul>
                            <li>
                              This project is a Personal Website intended to
                              display my Educational history, Professional
                              experience, Career preference, Statement of
                              Interest, Portfolio projects etc.
                            </li>
                            <li>
                              The site also provides the ability to accept
                              comments and requests from the recruiters that are
                              authenticated by the site.
                            </li>
                            <li>
                              The private inputs like comments are viewable and
                              editable only by the admin and the authenticated
                              user.
                            </li>
                            <li>
                              The site is built on ASP .NET Core MVC framework,
                              SQL Server as database and Entity Framework to
                              manage the database.
                            </li>
                            <li>
                              The site provides a webservice for the clients
                              built using ASP .NET Web API with the ability to
                              upload, edit and delete projects, resumes etc.
                            </li>
                          </ul>
                          {/* <div style={{ marginLeft: "700px" }}>
                            <a
                              className="link"
                              href="https://github.com/anish9461/Personal-Website"
                              target="_blank"
                              style={{ textDecoration: "underline" }}
                            >
                              View Source Code
                            </a>
                          </div> */}

                          <div style={{ marginLeft: "720px", marginTop: "5%" }}>
                            <button
                              onClick={() => {
                                window.open(
                                  "https://github.com/anish9461/Personal-Website",
                                  "_blank"
                                );
                              }}
                              data-animate-effect="fadeInTop"
                            >
                              <span> View Source Code </span>
                            </button>{" "}
                            {/* <button style={{marginLeft:"10%"}}
                              onClick={() => {
                                window.open(
                                  "https://github.com/anish9461/Code-Analysis-Software-Tool",
                                  "_blank"
                                );
                              }}
                              data-animate-effect="fadeInTop"
                            >
                             <span> View Source Code </span>
                            </button>{" "} */}
                          </div>
                        </div>
                      </div>
                    </article>

                    <article
                      className="timeline-entry animate-box"
                      data-animate-effect="fadeInLeft"
                      style={{ marginTop: "5%" }}
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
                          <div style={{ marginLeft: "700px", marginTop: "5%" }}>
                            <button
                              onClick={() => {
                                window.open(
                                  "https://raw.githubusercontent.com/anish9461/Code-Analysis-Software-Tool/master/code_analysis_software_tool.gif",
                                  "_blank"
                                );
                              }}
                              data-animate-effect="fadeInTop"
                            >
                              <span> View Project </span>
                            </button>{" "}
                            <button
                              style={{ marginLeft: "10%" }}
                              onClick={() => {
                                window.open(
                                  "https://github.com/anish9461/Code-Analysis-Software-Tool",
                                  "_blank"
                                );
                              }}
                              data-animate-effect="fadeInTop"
                            >
                              <span> View Source Code </span>
                            </button>{" "}
                          </div>
                        </div>
                      </div>
                    </article>
                    <article
                      className="timeline-entry animate-box"
                      data-animate-effect="fadeInLeft"
                      style={{ marginTop: "5%" }}
                    >
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-1">
                          <i className="icon-pen2" />
                        </div>
                        <div className="timeline-label">
                          <h2>
                            <div style={{ color: "#f33612", fontSize: "25px" }}>
                              Small Scale IoT-enabled Automated Greenhouse{" "}
                              <span style={{ color: "black" }}>
                                Jan 2018-May 2018
                              </span>
                            </div>
                            <div style={{ fontSize: "19px", color: "black" }}>
                              Domain: Internet Of Things
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
                            <div style={{ fontSize: "15px" }}></div>
                          </h2>
                          <ul>
                            <li>
                              Completion of the Greenhouse construction as per
                              the designed 3D model by utilizing suitable
                              materials. This structure is designed and
                              implemented to serve as a platform to perform
                              different experiments pertaining to automation,
                              biotechnology, climate control system and various
                              other fields.
                            </li>
                            <li>
                              Successful interfacing and integration of the
                              complete Hardware architecture consisting of 9
                              sensors (4 DHT, 4 soil moisture and 1 ultrasonic)
                              and 8 actuators ( 2 fans, 4 irrigation motors, 1
                              humidity control motor and 1 solenoid valve).
                            </li>

                            <li>
                              Developed a System software architecture which
                              drives the hardware system components.
                              Successfully Tested and verified the working of
                              the complete Automated system with both SW and HW
                              components. A database system is developed to
                              store all the different parameters from the
                              sensors.
                            </li>

                            <li>
                              An IOT component is developed for the user/owner
                              of the greenhouse to be updated with the current
                              climatic conditions inside the greenhouse with the
                              addition of data logs in the form of attachment to
                              an email from the System to the user’s email. The
                              data logs obtained can be used to perform data
                              analytics.
                            </li>
                          </ul>
                          <div style={{ marginLeft: "700px" }}>
                            <button
                              onClick={() => {
                                window.open(
                                  "https://drive.google.com/file/d/1j2jKbtsIIIhQlnWpo-AeTEPMBjoIzFu8/view",
                                  "_blank"
                                );
                              }}
                              data-animate-effect="fadeInTop"
                            >
                              <span> View Project </span>
                            </button>{" "}
                          </div>
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
