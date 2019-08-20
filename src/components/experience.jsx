import React, { Component } from 'react'

export default class Experience extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="experience">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">My Professional Info</span>
                <h2 className="colorlib-heading animate-box">Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><div style={{color:"#f33612", fontSize:"25px"}}>Full Stack Software/IoT Developer</div><div style={{fontSize:"19px"}}>IoTRight <span>April 2019-present</span></div><a href="https://iotright.com/" target="_blank" style={{color:"#1889f1", fontSize:"15px"}}>www.iotright.com</a></h2>
                        <p>I am working as a Full Stack Software/IoT Developer at IotRight in North Syracuse. My work goes from Application development with React and React-Native, DevOps to configuring Sensors and gateways on Lora network communicating over MQTT protocol on back-end. I am also into the field of creating sustainable and flexible CI/CD (Continuous Integration & Continuous Development) pipelines which enables developers at IoTRight to do rapid development. I am also exploring the role of container technology like Docker and container-orchrastation technologies like K8s, Swarm to create industry standard production environments.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                      <h2><div style={{color:"#f33612", fontSize:"25px"}}>Research and Development Intern</div><div style={{fontSize:"19px"}}>Crucible of Reasearch and Innovation Lab <span>April 2016 - August 2016</span></div><a href="https://cori.pes.edu/" target="_blank" style={{color:"#1889f1", fontSize:"15px"}}>cori.pes.edu</a></h2>
                        <p>I was part of most reputed Research Lab at my University. I worked under <a href="https://www.linkedin.com/in/suresh-nagesh-b3387a51/" target="_blank">Prof. Suresh Nagesh</a> on a research project of designing a Smart Device on Electric vehicle.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                      <h2><div style={{color:"#f33612", fontSize:"25px"}}>Summer Intern</div><div style={{fontSize:"19px"}}>Microsoft Innovation Lab <span>April 2015 - August 2015</span></div><a href="https://cori.pes.edu/" target="_blank" style={{color:"#1889f1", fontSize:"15px"}}>cori.pes.edu</a></h2>
                        <p>This was my very first Internship as an Engineering Student. I worked on an exciting project in the Robotics domain</p>
                      </div>
                    </div>
                  </article>
                  {/* <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Research Intern at Crucible of Reasearch and Innovation Lab<span>2016-2017</span></h2>
                        <p>I completed my under-graduation with major in Electronics and Communication Engineering. I have taken courses like Internet Of Things, Embedded Systems, Computer Networks, DSA which have strengthened my fundamentals in the field of Computer Science. I have also been part of Microsoft Innovation Lab and Crucible of Research and Innovation lab as an intern and later as Mentor.</p>
                      </div>
                    </div>
                  </article> */}
                  {/* <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Primary and Higher Education <span>2003-2015</span></h2>
                        <p>I have completed my higher secondary education with major subjects as Physics,Chemistry & Maths with 91 merit. During my time at school, I have developed interest in solving complex problems of the fundamental physics which helped me to improve my understanding of any problem and also my mathematical skills to actually solve the problems.</p> 
                      </div>
                    </div>
                  </article> */}
                  {/* <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
