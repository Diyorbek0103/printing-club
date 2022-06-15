import React, { Component } from "react";
import { getText } from "../../locales";

export default class Footersec extends Component {
  render() {
    return (
      <>
        <div className="footersec">
          <section>
            <div className="container">
              <div className="row">
                <div data-aos="flip-up" className="col-xl-6">
                  <div className="left-side">
                    <img alt="secimg" src="images/footersecimg.png"></img>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  className="col-xl-6"
                >
                  <div className="right-side">
                    <div className="title">
                      { getText('FOOTERSEC_TITLE')}
                    </div>
                    <div className="text">
                      {getText('FOOTERSEC_TEXT') }
                    </div>
                    <button className="footersecBtn">{getText('BUTTON')}</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}
