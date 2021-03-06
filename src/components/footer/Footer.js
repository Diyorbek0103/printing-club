import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <div className="row">
            <ul className="nav ">
              <li className="nav-item">
                <a className="nav-link" href="https://">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://">
                  Our story
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://">
                  Apply now
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://">
                  Contact us
                </a>
              </li>
            </ul>
            <div className="icons">
              <svg
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 1.84616H7C4.23858 1.84616 2 3.91254 2 6.46155V15.6923C2 18.2413 4.23858 20.3077 7 20.3077H17C19.7614 20.3077 22 18.2413 22 15.6923V6.46155C22 3.91254 19.7614 1.84616 17 1.84616Z"
                  stroke="#242424"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.0002 10.4954C16.1236 11.2636 15.9815 12.0482 15.594 12.7376C15.2065 13.4269 14.5933 13.9859 13.8418 14.3351C13.0903 14.6843 12.2386 14.8058 11.408 14.6824C10.5773 14.559 9.80996 14.197 9.21503 13.6478C8.62011 13.0987 8.22793 12.3904 8.09426 11.6236C7.9606 10.8568 8.09226 10.0707 8.47052 9.37697C8.84878 8.68326 9.45438 8.11731 10.2012 7.75961C10.948 7.40192 11.7979 7.2707 12.6302 7.38462C13.4791 7.50082 14.265 7.86597 14.8719 8.42614C15.4787 8.9863 15.8743 9.71177 16.0002 10.4954Z"
                  stroke="#242424"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.5 6H17.51"
                  stroke="#242424"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 1.84616H15C13.6739 1.84616 12.4021 2.33242 11.4645 3.19798C10.5268 4.06353 10 5.23747 10 6.46155V9.23078H7V12.9231H10V20.3077H14V12.9231H17L18 9.23078H14V6.46155C14 6.21673 14.1054 5.98194 14.2929 5.80883C14.4804 5.63572 14.7348 5.53847 15 5.53847H18V1.84616Z"
                  stroke="#242424"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_4_1066)">
                  <path
                    d="M18.0591 5.27527L8.18867 10.8869C7.6301 11.2051 7.36577 11.8338 7.54573 12.4153L8.61298 15.8768C8.70415 16.1719 8.98868 16.3681 9.31606 16.3681C9.33429 16.3681 9.35271 16.3675 9.37118 16.3663C9.72115 16.3428 9.99809 16.1022 10.0446 15.7815L10.3221 13.8834C10.3595 13.6281 10.4929 13.3905 10.6972 13.2149L18.8424 6.2259C19.0886 6.01522 19.1211 5.67024 18.9183 5.42347C18.7151 5.17649 18.346 5.11263 18.0591 5.27527ZM10.0459 12.5687C9.6799 12.8832 9.44145 13.3081 9.37451 13.7653L9.23993 14.686L8.46523 12.1733C8.40228 11.9697 8.49499 11.7496 8.69046 11.6382L15.9213 7.52735L10.0459 12.5687Z"
                    fill="#242424"
                  />
                  <path
                    d="M23.6091 1.61731C23.3007 1.37604 22.8751 1.30962 22.4982 1.44401L0.7064 9.204C0.274822 9.35765 -0.00267838 9.73275 -0.000475259 10.1596C0.00177474 10.5868 0.283353 10.9599 0.717462 11.11L5.80762 12.8637L7.7932 18.758C7.90223 19.0821 8.17743 19.3338 8.52927 19.4316C8.88093 19.5292 9.26071 19.4594 9.54459 19.2451L12.5043 17.0179C12.6464 16.9109 12.8494 16.9056 12.9978 17.0051L18.336 20.5826C18.5281 20.7115 18.7547 20.7778 18.984 20.7778C19.1183 20.7778 19.2535 20.7551 19.3832 20.7088C19.7341 20.5835 19.9893 20.3058 20.0657 19.9661L23.9765 2.60181C24.0586 2.23619 23.9178 1.85896 23.6091 1.61731ZM23.0403 2.42246L19.1296 19.7867C19.1154 19.8495 19.0665 19.8756 19.0386 19.8856C19.0104 19.8956 18.9549 19.9067 18.8981 19.8686L13.5596 16.2909C13.321 16.1309 13.0404 16.0515 12.7603 16.0515C12.4548 16.0515 12.1497 16.1461 11.9003 16.3336L8.93995 18.5613C8.88726 18.6011 8.83255 18.594 8.80471 18.5863C8.77668 18.5785 8.72666 18.5564 8.70632 18.496L6.65109 12.3948C6.60716 12.2644 6.50029 12.1602 6.36173 12.1124L1.05243 10.2833C0.972931 10.2558 0.956009 10.1985 0.955775 10.1553C0.95554 10.1125 0.971853 10.0555 1.0506 10.0275L22.8425 2.26751C22.8426 2.26747 22.8427 2.26743 22.8428 2.26738C22.9136 2.24216 22.966 2.27115 22.9909 2.29062C23.0159 2.31031 23.0558 2.35358 23.0403 2.42246Z"
                    fill="#242424"
                  />
                  <path
                    d="M20.038 10.9102C19.7799 10.8584 19.5254 11.0096 19.4694 11.2478L19.3967 11.5568C19.3407 11.795 19.5045 12.03 19.7625 12.0817C19.7967 12.0885 19.8308 12.0918 19.8644 12.0918C20.0845 12.0918 20.2826 11.9506 20.3312 11.744L20.4039 11.4351C20.4598 11.1969 20.296 10.9619 20.038 10.9102Z"
                    fill="#242424"
                  />
                  <path
                    d="M19.5602 12.9428C19.3018 12.8911 19.0474 13.0423 18.9915 13.2805L17.8918 17.9558C17.8358 18.194 17.9996 18.429 18.2576 18.4807C18.2918 18.4875 18.3259 18.4908 18.3595 18.4908C18.5796 18.4908 18.7776 18.3496 18.8263 18.143L19.9259 13.4677C19.9819 13.2295 19.8182 12.9945 19.5602 12.9428Z"
                    fill="#242424"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4_1066">
                    <rect width="24" height="22.1538" fill="white" />
                  </clipPath>
                </defs>
                        </svg>
                        <div className="footer-section">
                            902 W.Main Street Teutopokis, Il 62467   
                                217.857.3153
                        </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
