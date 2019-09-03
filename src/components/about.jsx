import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        <strong>Hi, I am Anish Nesarkar,</strong> a Full Stack
                        Software/IoT Developer and Computer Science Graduate
                        student at Syracuse University.{" "}
                      </p>
                      <p>
                        I love exploring new technologies and often amazed by
                        the progress we as a human species have made so far in
                        the recent years
                      </p>
                      <p>
                        This is my Personal Website showcasing my talent in Full
                        Stack Software Development. Scroll down to explore my
                        past and current Projects, Work experiences, education
                        and skills
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div
                    className="col-md-3 animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="services color-1">
                      <span className="icon2">
                        <i className="icon-bulb" />
                      </span>
                      <h3>Full Stack Software Development</h3>
                    </div>
                  </div>
                  <div
                    className="col-md-3 animate-box"
                    data-animate-effect="fadeInRight"
                  >
                    <div className="services color-2">
                      <span className="icon2">
                        <i className="icon-globe-outline" />
                      </span>
                      <h3>Internet Of Things</h3>
                    </div>
                  </div>
                  <div
                    className="col-md-3 animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="services color-3">
                      <span className="icon2">
                        <i className="icon-data" />
                      </span>
                      <h3>Web Development</h3>
                    </div>
                  </div>
                  <div
                    className="col-md-3 animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="services color-4">
                      <span className="icon2">
                        <i className="icon-phone3" />
                      </span>
                      <h3>Application Development</h3>
                    </div>
                  </div>
                  <div
                    className="col-md-3 animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="services color-4">
                      <span className="icon2">
                        <i className="icon-diamond" />
                      </span>
                      <h3>DevOps</h3>
                    </div>
                  </div>
                  <div
                    className="col-md-3 animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="services color-4">
                      <span className="icon2">
                        <i className="icon-diamond" />
                      </span>
                      <h3>Git Version Control</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
