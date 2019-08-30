import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
        <section className="colorlib-contact" data-section="contact" style={{marginTop: -140}}>
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Get in Touch</span>
                <h2 className="colorlib-heading">Contact</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                  <div className="colorlib-icon">
                    <i className="icon-globe-outline" />
                  </div>
                  <div className="colorlib-text">
                    <p>anesarka@syr.edu</p>
                  </div>
                </div>
                <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                  <div className="colorlib-icon">
                    <i className="icon-map" />
                  </div>
                  <div className="colorlib-text">
                    <p>765 Westcott Street Syracuse New York NY 13210</p>
                  </div>
                </div>
                <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                  <div className="colorlib-icon">
                    <i className="icon-phone" />
                  </div>
                  <div className="colorlib-text">
                    <p><a href="tel://">+315 450 6299</a></p>
                  </div>
                </div>
              </div>
              
              {/* <div className="col-md-7 col-md-push-1">
                <div className="row">
                  <div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">
                    <form action>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Name" />
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Email" />
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Subject" />
                      </div>
                      <div className="form-group">
                        <textarea name id="message" cols={30} rows={7} className="form-control" placeholder="Message" defaultValue={""} />
                      </div>
                      <div className="form-group">
                        <input type="submit" className="btn btn-primary btn-send-message" defaultValue="Send Me ssage" />
                      </div>
                    </form>
                  </div>
                </div>
            </div> */}
            </div>
          </div>
        </section>
      )
    }
  }