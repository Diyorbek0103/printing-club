import React, { Component } from "react";
import Footer from "./components/footer/Footer";
import Footersec from "./components/footerSection/Footersec";
import Header from "./components/header/Header";
import Homepage from "./components/main/Homepage";
import Section from "./components/section/Section";
import Sectiontwo from "./components/sectiontwo/Sectiontwo";



export default class App extends Component {
  setLanguage = (lang) => {
    if (lang === 'uz') {
      localStorage.setItem('language', 'uz')
    }
    else if (lang === 'ru') {
      localStorage.setItem('language', 'ru')
    }
    else {
      localStorage.setItem('language', 'en')
    }
    window.location.reload();
  };
  render() {
    return (
      <>
         <div className="languages">
            <ul className="nav">
              <li className="nav-item">
                <a onClick={()=>this.setLanguage('en')} className="nav-link" href="#">EN</a>
              </li>
              <li className="nav-item">
                <a  onClick= {()=>this.setLanguage('ru')} className="nav-link" href="#">RU</a>
              </li>
              <li className="nav-item">
                <a  onClick= {()=>this.setLanguage('uz')} className="nav-link" href="#">UZ</a>
              </li>
            </ul>
          </div>
        <Header />
        <div className="container">
          <Homepage />
        </div>
        <Section />
        <Sectiontwo />
        <Footersec />
        <Footer />
      </>
    );
  }
}
