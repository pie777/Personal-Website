/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";

export default class Experience extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="experience">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">My Professional Info</span>
                <h2 className="colorlib-heading animate-box">Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      {/* TODO: Elaborate the experience just like Linkedln */}
                      <div className="timeline-label">
                        <h2>
                          <div style={{ color: "#f33612", fontSize: "25px" }}>
                            Full Stack Software/IoT Developer
                          </div>
                          <div style={{ fontSize: "19px" }}>
                            IoTRight <span>April 2019-present</span>
                          </div>
                          <div style={{ fontSize: "15px" }}>
                            Syracuse, New York
                          </div>
                          <a
                            href="https://iotright.com/"
                            target="_blank"
                            style={{ color: "#1889f1", fontSize: "15px" }}
                          >
                            www.iotright.com
                          </a>
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
                            React App, React Native, nodejs, javascript, Shell
                            scripts, Docker Containers, Node-Red, CircleCI, AWS
                            S3, AWS EC2, Wireless Sensor Networks, Lora
                            Communication, MQTT protocol
                          </div>
                        </h2>
                        <p>
                          I am working as a Full Stack Software/IoT Developer at
                          IotRight in North Syracuse. My work goes from
                          Application development with React and React-Native,
                          DevOps and configuring Sensors and gateways on Lora
                          network communicating over MQTT protocol on back-end.
                          Here are the tasks I perform for Front-end, DevOps and
                          on the Back-end
                        </p>
                        <p>
                          <b>Front-End</b>
                        </p>
                        <ul>
                          <li>
                            React Web App Portal to display and analyze the data
                            received from the IoT platform.
                          </li>
                          <li>
                            REST API to fetch data from the platform where the
                            sensor data is stored.
                          </li>
                          <li>
                            Routing and Higher Order Components to design the
                            React App
                          </li>
                          <li>Webpack 4 and babel to bundle the React App.</li>
                          <li>
                            Configure the Electron Desktop App in package.json
                            based on React App.
                          </li>
                          <li>
                            React native to design the mobile apps in android
                            and iOS.
                          </li>
                          <li>
                            Designing SVG’s and and placing them dynamically on
                            a map.
                          </li>
                          <li>
                            Data visualization on the SVG’s using d3js library.
                          </li>
                          <li>
                            SCSS customization and styling for the React App.{" "}
                          </li>
                        </ul>
                        <p>
                          <b>DevOps</b>
                        </p>
                        <ul>
                          <li>
                            Configuring Docker files for setting IoT platform
                            dependencies and React App for Production and
                            Deployment using Github, CircleCI and Amazon AWS
                            (CI/CD).{" "}
                          </li>
                          <li>
                            AWS EC2 to host the website and Amazon S3 bucket for
                            data storage.
                          </li>
                        </ul>
                        <p>
                          <b>Back-End</b>
                        </p>
                        <ul>
                          <li>
                            Configuring various wireless Netvox Sensors in
                            OAA(over the air activation) based on Lora
                            communication.{" "}
                          </li>
                          <li>
                            Configuring Lora Network server on the Gateway
                            (Multitech Conduit, Raspberry Pi)
                          </li>
                          <li>
                            Setting up wireless Sensor Networks between based on
                            Lora Communication protocol.
                          </li>
                          <li>
                            Configuring an instance of IoT platform of IoTRight
                            in the gateway (called the “Edge”).
                          </li>
                          <li>
                            Writing Node-red(Javascript) and GoLang Parsers for
                            converting Netvox sensor data to readable JSON
                            format and Writing Node-red(Javascript) and GoLang
                            Parsers for converting Netvox sensor data to
                            readable JSON format and{" "}
                          </li>
                          <li>
                            Setting up mQTT protocol topic paths for
                            transferring data from “edge” to the IoT Platform.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          <div style={{ color: "#f33612", fontSize: "25px" }}>
                            Research and Development Intern
                          </div>
                          <div style={{ fontSize: "19px" }}>
                            Crucible of Reasearch and Innovation Lab{" "}
                            <span>April 2016 - August 2016</span>
                          </div>
                          <div style={{ fontSize: "15px" }}>
                            Bangalore, India
                          </div>
                          <a
                            href="https://cori.pes.edu/"
                            target="_blank"
                            style={{ color: "#1889f1", fontSize: "15px" }}
                          >
                            cori.pes.edu
                          </a>
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
                            React Native, Sensors and Actuators, Embedded C
                          </div>
                        </h2>
                        <p>
                          I was part of most reputed Research Lab at my
                          University. I worked under{" "}
                          <a
                            href="https://www.linkedin.com/in/suresh-nagesh-b3387a51/"
                            target="_blank"
                          >
                            Prof. Suresh Nagesh
                          </a>{" "}
                          on a research project of designing a Smart Device on
                          Electric vehicle.
                        </p>
                        <ul>
                          <li>
                            Designed a smart device that can be embedded on an
                            electric vehicle to monitor the state of charge of
                            the electric vehicle.
                          </li>

                          <li>
                            Involved in efficient and optimal programming of the
                            microcontroller to control the sensor that provides
                            necessary information like speed, distance covered
                            by the vehicle and its location.
                          </li>
                          <li>
                            Built an Android App to display the information like
                            speed, distance, state of charge and location of the
                            electric vehicle.
                          </li>
                        </ul>
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
                          <div style={{ color: "#f33612", fontSize: "25px" }}>
                            Summer Intern
                          </div>
                          <div style={{ fontSize: "19px" }}>
                            Microsoft Innovation Lab{" "}
                            <span>April 2015 - August 2015</span>
                          </div>
                          <div style={{ fontSize: "15px" }}>
                            Bangalore, India
                          </div>
                          <a
                            href="https://mlabpesu.azurewebsites.net/"
                            target="_blank"
                            style={{ color: "#1889f1", fontSize: "15px" }}
                          >
                            www.mlab.net
                          </a>
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
                            Sensors( Flex, gyro sensor ), Actuators( Servo, DC,
                            Stepper motor ), Zigbee wireless communication,
                            Embedded C, Atmega 2560
                          </div>
                        </h2>
                        <p>
                          This was my very first Internship as an Engineering
                          Student. I worked on an exciting project in the
                          Robotics domain
                        </p>
                        <ul>
                          <li>
                            Designed and built a hand gesture controlled robotic
                            arm.
                          </li>
                          <li>
                            Involved and contributed to the efficient and
                            optimal programming of the microcontroller which was
                            ARM processor.
                          </li>
                          <li>
                            Designed a wireless network for communication
                            between the gesture sensor and the robot via ZigBee
                            Communication.
                          </li>
                          <li>
                            Built the robotic arm using recyclable materials
                            from scratch.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
