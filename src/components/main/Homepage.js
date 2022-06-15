import React, { Component } from "react";
import { getText } from "../../locales";

export default class Homepage extends Component {
  render() {
    return (
      <>
        <main>
          <div className="row ">
            <div data-aos="fade-up-right" className="col-xl-6">
              <div>
                <div className="title">{getText('TITLE') }</div>
                <div className="text">{ getText('TEXT')}</div>
                <button className="mainPagebtn">{ getText('BUTTON')}</button>
                <diV className="paragrph">
                  { getText('PARAGPH')}
                </diV>
              </div>
            </div>
            <div data-aos="fade-up-left" className="col-xl-6">
              <div className="for-img">
                <img alt="for-img" src="images/mainimg.png" />
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}
