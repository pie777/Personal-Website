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
        style={{ marginTop: 20 }}
      >
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">My Work</span>
              <h2 className="colorlib-heading animate-box">Recent Projects</h2>
            </div>
          </div>
          <h3
            className="colorlib-heading animate-box"
            style={{ marginBottom: "-15px" }}
          >
            Academic
          </h3>

          <div className="row">
            <div className="colorlib-narrow-content">
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
                              FoodDine-InReady{" "}
                              <span style={{ color: "black" }}>
                                Aug 2019-Dec 2019
                              </span>
                            </div>
                            <div style={{ fontSize: "19px", color: "black" }}>
                              Domain: Full Stack Software Development
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
                              React, Javascript, Java, Springboot, MongoDB, AWS
                              Amplify, Heroku, DevOps, Object Oriented Design,
                              REST API{" "}
                            </div>
                          </h2>
                          <ul>
                            <li>
                              The project is based on Object-Oriented Design
                              patterns and principles.
                            </li>
                            <li>
                              The React Web App displays a 2D map view of the
                              restaurant to book a table via REST API calls
                            </li>

                            <li>
                              The backend Spring Boot and MongoDB provide REST
                              API calls
                            </li>
                            <li>
                              The Web App and Spring boot is continuously
                              integrated and deployed (CI/CD) on AWS amplify and
                              Heroku respectively
                            </li>
                          </ul>
                          <div
                            className="button"
                            onClick={() => {
                              window.open(
                                "https://master.d1q95m7fvorcmw.amplifyapp.com/",
                                "_blank"
                              );
                            }}
                          >
                            {/* <button
                              onClick={() => {
                                window.open(
                                  "https://raw.githubusercontent.com/anish9461/Code-Analysis-Software-Tool/master/code_analysis_software_tool.gif",
                                  "_blank"
                                );
                              }}
                              data-animate-effect="fadeInTop"
                            > */}
                            <span> View Project </span>
                            {/* </button>{" "} */}
                            {/* <button
                              style={{ marginLeft: "10%" }}
                              onClick={() => {
                                window.open(
                                  "https://github.com/anish9461/Code-Analysis-Software-Tool",
                                  "_blank"
                                );
                              }}
                              data-animate-effect="fadeInTop"
                            > */}

                            {/* </button>{" "} */}
                          </div>
                          <div
                            className="button"
                            style={{ marginTop: "7px" }}
                            onClick={() => {
                              window.open(
                                "https://github.com/anish9461/FoodDine-InReady",
                                "_blank"
                              );
                            }}
                          >
                            <span> View Source Code </span>
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

                          <div
                            className="button"
                            onClick={() => {
                              window.open(
                                "https://github.com/anish9461/Personal-Website",
                                "_blank"
                              );
                            }}
                          >
                            <span> View Source Code </span>
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
                          <div
                            className="button"
                            onClick={() => {
                              window.open(
                                "https://raw.githubusercontent.com/anish9461/Code-Analysis-Software-Tool/master/code_analysis_software_tool.gif",
                                "_blank"
                              );
                            }}
                          >
                            {/* <button
                              onClick={() => {
                                window.open(
                                  "https://raw.githubusercontent.com/anish9461/Code-Analysis-Software-Tool/master/code_analysis_software_tool.gif",
                                  "_blank"
                                );
                              }}
                              data-animate-effect="fadeInTop"
                            > */}
                            <span> View Project </span>
                            {/* </button>{" "} */}
                            {/* <button
                              style={{ marginLeft: "10%" }}
                              onClick={() => {
                                window.open(
                                  "https://github.com/anish9461/Code-Analysis-Software-Tool",
                                  "_blank"
                                );
                              }}
                              data-animate-effect="fadeInTop"
                            > */}

                            {/* </button>{" "} */}
                          </div>
                          <div
                            className="button"
                            style={{ marginTop: "7px" }}
                            onClick={() => {
                              window.open(
                                "https://github.com/anish9461/Code-Analysis-Software-Tool",
                                "_blank"
                              );
                            }}
                          >
                            <span> View Source Code </span>
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
                          <div
                            className="button"
                            onClick={() => {
                              window.open(
                                "https://drive.google.com/file/d/1j2jKbtsIIIhQlnWpo-AeTEPMBjoIzFu8/view",
                                "_blank"
                              );
                            }}
                          >
                            <span> View Project </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3
            className="colorlib-heading animate-box"
            style={{ marginBottom: "-25px" }}
          >
            Personal
          </h3>

          <div className="row">
            <div className="colorlib-narrow-content">
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
                              Connect4 Game{" "}
                              {/* <span style={{ color: "black" }}>
                      Jan 2019-May 2019
                    </span> */}
                            </div>
                            <div style={{ fontSize: "19px", color: "black" }}>
                              Domain: Full Stack Web Development
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
                              React Web App, nodejs server, Websocket
                              Communication
                            </div>
                          </h2>
                          <ul>
                            <li>
                              The fron-end of the game is designed and build
                              using React Web App
                            </li>
                            <li>
                              The back-end server and the business logic of the
                              game was built on nodejs
                            </li>
                            <li>
                              The Communication between the front-end and
                              back-end was over Websockets
                            </li>
                          </ul>

                          <div
                            className="button"
                            onClick={() => {
                              window.open(
                                "https://github.com/anish9461/Connect4-Game",
                                "_blank"
                              );
                            }}
                          >
                            <span> View Source Code </span>
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
                        <div className="timeline-icon color-2">
                          <i className="icon-pen2" />
                        </div>
                        <div className="timeline-label">
                          <h2>
                            <div style={{ color: "#f33612", fontSize: "25px" }}>
                              Tic-Tac-Toe Game{" "}
                            </div>
                            <div style={{ fontSize: "19px", color: "black" }}>
                              Domain: Application Web Development
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
                              React Web App, Reactjs
                            </div>
                          </h2>
                          This was a Tic-Tac-Toe game built on React Web App
                          <div
                            className="button"
                            onClick={() => {
                              window.open(
                                "https://anish9461.github.io/Tic-Tac-Toe",
                                "_blank"
                              );
                            }}
                          >
                            <span> View Project </span>
                          </div>
                          <div
                            className="button"
                            style={{ marginTop: "7px" }}
                            onClick={() => {
                              window.open(
                                "https://github.com/anish9461/Tic-Tac-Toe",
                                "_blank"
                              );
                            }}
                          >
                            <span> View Source Code </span>
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
                        <div className="timeline-icon color-3">
                          <i className="icon-pen2" />
                        </div>
                        <div className="timeline-label">
                          <h2>
                            <div style={{ color: "#f33612", fontSize: "25px" }}>
                              Docker Containers{" "}
                            </div>
                            <div style={{ fontSize: "19px", color: "black" }}>
                              Domain: DevOps
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
                              Dockerfiles, docker compose files, containers,
                              shell scripting
                            </div>
                          </h2>
                          Docker Containers is the best adavancement that has
                          ever happened in the software Technology. Here are
                          some docker files that I have used to make my life
                          simple :). I would be creating more Dockerfiles as and
                          when needed to make my work ez pz.
                          <div
                            className="button"
                            onClick={() => {
                              window.open(
                                "https://github.com/anish9461/DockerFiles",
                                "_blank"
                              );
                            }}
                          >
                            <span> View Docker files </span>
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
                              Circle CI{" "}
                            </div>
                            <div style={{ fontSize: "19px", color: "black" }}>
                              Domain: DevOps
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
                              CI/CD pipelines, yml scripts, setting up
                              containers
                            </div>
                          </h2>
                          Circle CI is a tool to build, test and deploy
                          application automatically. These are circle CI scripts
                          that I have used to build and deploy my applications.
                          <div
                            className="button"
                            onClick={() => {
                              window.open(
                                "https://github.com/anish9461/Circle-CI",
                                "_blank"
                              );
                            }}
                          >
                            <span> View Circle CI scripts </span>
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
