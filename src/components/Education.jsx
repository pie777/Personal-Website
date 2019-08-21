import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return (
        <section className="colorlib-education" data-section="education" style={{marginTop: 20}}>
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">My Academics</span>
                <h2 className="colorlib-heading animate-box">Education</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                <div className="fancy-collapse-panel">
                  <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="headingOne">
                        <h4 className="panel-title">
                          <a style={{fontSize:"21px"}} data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Master Degree in Computer and Information Science <span style={{fontSize:"13px"}}>2018 - 2020</span>
                          </a>
                        </h4>
                      </div>
                      <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                        <div className="panel-body">
                          <div className="row">
                            <div className="col-md-6">
                              <p>Syracuse University, New York(GPA:3.5/4)</p>
                            </div>
                            <div className="col-md-6">
                              <p>COURSES: Data Structure and Algorithms, Object Oriented Design, Object Oriented Programming, Software Modelling and Analysis, Operating System, Internet Programming, Computer Architecture, Social Media and Data Mining</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="headingTwo">
                        <h4 className="panel-title">
                          <a style={{fontSize:"21px"}} className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Bachelor Degree in Electronics Engineering <span style={{fontSize:"13px"}}>2014 - 2018</span>
                          </a>
                        </h4>
                      </div>
                      <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                      <div className="panel-body">
                          <div className="row">
                            <div className="col-md-6">
                              <p>PES University, India(GPA: 3.7/4)</p>
                            </div>
                            <div className="col-md-6">
                              <p>COURSES: Algorithms, Computer Networks, Internet Of Things</p>
                            </div>
                          </div>
                        </div>
                      </div>


{/*
                        <div className="panel-body">
                          <p>COURSES: Algorithms, Data Mining and Business Intelligence, Computer Networks, Python Programming, Advance Database, Structural Programming anf Fromal Methods, Advanced Computer Architure</p>
                          <ul>
                            <li>Separated they live in Bookmarksgrove right</li>
                            <li>Separated they live in Bookmarksgrove right</li>
                          </ul>
                        </div>
</div>*/}
                    </div>
                   {/*} <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="headingThree">
                        <h4 className="panel-title">
                          <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Diploma in Information Technology
                          </a>
                        </h4>
                      </div>
                      <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                        <div className="panel-body">
                          <p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>	
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="headingFour">
                        <h4 className="panel-title">
                          <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Diploma in Information Technology
                          </a>
                        </h4>
                      </div>
                      <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                        <div className="panel-body">
                          <p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>	
                        </div>
                      </div>
</div>*/}
                    {/* <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="headingFive">
                        <h4 className="panel-title">
                          <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">RV PU College, Bangalore
                          </a>
                        </h4>
                      </div>
                      <div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                        <div className="panel-body">
                          <p>Percentage: 95%</p>	
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }