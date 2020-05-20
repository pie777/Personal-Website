import React, { Component } from "react";

export default class Expertise extends Component {
  render() {
    return (
      <section className="colorlib-about" data-section="expertise">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">What I do?</span>
              <h2 className="colorlib-heading">
                Here are some of my expertise
              </h2>
            </div>
          </div>
          <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
              <div className="services color-1">
                <span className="icon">
                  <i className="icon-bulb" />
                </span>
                <div className="desc">
                  <h3>Front End Development</h3>
                  <p>
                    React, Javascript, React Native and Electron framework, SASS & SCSS
                    styling, Nginx, Webpack and Babel{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-3">
                <span className="icon">
                  <i className="icon-phone3" />
                </span>
                <div className="desc">
                  <h3>Back End Development</h3>
                  <p>Spring boot framework, Apache Tomcat, JUnit Testing, Swagger API, Nodejs, Golang, SQL Server, Python, MongoDB, MySQL</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-5">
                <span className="icon">
                  <i className="icon-data" />
                </span>
                <div className="desc">
                  <h3>Internet Of Things</h3>
                  <p>
                    Wireless Sensor Networks, Gateways, Lora Network, MQTT
                    protocol, Lighting and Alarm Systems, IoT Platform{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 text-center animate-box" />
            <div className="col-md-4 text-center animate-box">
              <div className="services color-5">
                <span className="icon">
                  <i className="icon-data" />
                </span>
                <div className="desc">
                  <h3>DevOps</h3>
                  <p>Docker Containers, Docker Swarm, Jenkins, Circle CI, Amazon AWS EC2, S3, VPC, SES and SNS, Amplify and RDS, Microservices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: "100px" }}></div>
      </section>
    );
  }
}
