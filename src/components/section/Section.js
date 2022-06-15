import React, { Component } from "react";
import { getText } from "../../locales";

export default class Section extends Component {
  render() {
    return (
      <>
        <section>
          <div className="container">
            <div className="row">
              <div data-aos="zoom-in" className="col-xl-6">
                <div className="left-side">
                  <img alt="secimg" src="images/sectionimg.png"></img>
                </div>
              </div>
              <div data-aos="zoom-in-up" className="col-xl-6">
                <div  className="right-side">
                  <div className="title">
                    {  getText('SECTION_TITLE')}
                  </div>
                  <div className="text">
                    {getText('SECTION_TEXT') }
                  </div>
                  <div className="footer-content">
                    <div className="footer-content__left">
                      <div>
                        <h4>{ getText('EMAIL')}</h4>
                        <p>{ getText('SECONDS')}</p>
                      </div>
                    </div>
                    <div className="footer-content__right">
                      <div>
                        <h4>{ getText('DIRECT')}</h4>
                        <p>{ getText('DAYS')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
