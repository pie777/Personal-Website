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
                    React, React Native and Electron framework, SASS & SCSS
                    styling, Webpack and Babel{" "}
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
                  <p>Nodejs, Golang, SQL Server, Python, ASP .Net Core MVC</p>
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
                    protocol, IoT Platform{" "}
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
                  <p>Docker Containers, Circle CI, Amazon AWS S3 and EC2</p>
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
