import React, { Component } from "react";
import { getText } from "../../locales";
export default class Header extends Component {
  render() {
    return (
      <>
        <header className="navbar">
          <ul className="nav align-items-center justify-content-between w-100">
            <div>
              <li className="navbar-brand">
                <a href="https://" className="nav-link">
                  Printing Club
                </a>
              </li>
            </div>
            <div className="d-flex">
              <li className="nav-item">
                <a href="https://" className="nav-link">
                  {getText('HOME')}
                </a>
              </li>
              <li className="nav-item">
                <a href="https://" className="nav-link">
                  {getText('STORY')}
                </a>
              </li>
              <li className="nav-item">
                <a href="https://" className="nav-link">
                  {getText('APPLY')}
                </a>
              </li>
            </div>
            <div>
              <li className="nav-item">
                <a href="https://" className="nav-link">
                  <button>{ getText('BUTTON')}</button>
                </a>
              </li>
            </div>
          </ul>
        </header>
      </>
    );
  }
}
