import React from "react";
import {  UserBlank, User1, User2, User3, User4  } from "../../../assets/images";
const ChatList = () => {
  return (
    <>
      <div className="chatlist-main">
        <div className="cahtlist-heading">
          <div className="back-arrow">
            <svg
              width="21"
              height="16"
              viewBox="0 0 21 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.62502 7.16001C0.232298 7.54832 0.228725 8.18148 0.617039 8.5742L6.94499 14.974C7.3333 15.3667 7.96646 15.3703 8.35918 14.982C8.7519 14.5936 8.75547 13.9605 8.36716 13.5678L2.74232 7.87907L8.431 2.25423C8.82372 1.86592 8.8273 1.23276 8.43898 0.840041C8.05067 0.447319 7.41751 0.443746 7.02479 0.83206L0.62502 7.16001ZM1.32248 8.87108L20.0132 8.97655L20.0245 6.97658L1.33377 6.87111L1.32248 8.87108Z"
                fill="black"
              />
            </svg>
          </div>
          <h3>Message</h3>
        </div>
        <ul className="userchat-list">
          <li>
            <div className="usrchat-crd">
              <div className="chatusr-prfl">
                <span>
                  <img src={User1} alt="" />
                </span>
              </div>
              <div className="chatusr-descrp">
                <div className="tp-chtdescrp">
                  <h3>Jackson Allen</h3>
                  <p>02:30 PM</p>
                </div>
                <div className="btm-chtdescrp">
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                  <div className="nmbr-chat">
                    <span>3</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="usrchat-crd">
              <div className="chatusr-prfl">
                <span>
                  <img src={User2} alt="" />
                </span>
              </div>
              <div className="chatusr-descrp">
                <div className="tp-chtdescrp">
                  <h3>Jackson Allen</h3>
                  <p>02:30 PM</p>
                </div>
                <div className="btm-chtdescrp">
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                  <div className="nmbr-chat">
                    <span>3</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="usrchat-crd">
              <div className="chatusr-prfl">
                <span>
                  <img src={User3} alt="" />
                </span>
              </div>
              <div className="chatusr-descrp">
                <div className="tp-chtdescrp">
                  <h3>Jackson Allen</h3>
                  <p>02:30 PM</p>
                </div>
                <div className="btm-chtdescrp">
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="usrchat-crd active">
              <div className="chatusr-prfl">
                <span>
                  <img src={User4} alt="" />
                </span>
              </div>
              <div className="chatusr-descrp">
                <div className="tp-chtdescrp">
                  <h3>Jackson Allen</h3>
                  <p>02:30 PM</p>
                </div>
                <div className="btm-chtdescrp">
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="usrchat-crd">
              <div className="chatusr-prfl">
                <span>
                  <img src={UserBlank} alt="" />
                </span>
              </div>
              <div className="chatusr-descrp">
                <div className="tp-chtdescrp">
                  <h3>Jackson Allen</h3>
                  <p>02:30 PM</p>
                </div>
                <div className="btm-chtdescrp">
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="usrchat-crd">
              <div className="chatusr-prfl">
                <span>
                  <img src={User1} alt="" />
                </span>
              </div>
              <div className="chatusr-descrp">
                <div className="tp-chtdescrp">
                  <h3>Jackson Allen</h3>
                  <p>02:30 PM</p>
                </div>
                <div className="btm-chtdescrp">
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="usrchat-crd">
              <div className="chatusr-prfl">
                <span>
                  <img src={User2} alt="" />
                </span>
              </div>
              <div className="chatusr-descrp">
                <div className="tp-chtdescrp">
                  <h3>Jackson Allen</h3>
                  <p>02:30 PM</p>
                </div>
                <div className="btm-chtdescrp">
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="usrchat-crd">
              <div className="chatusr-prfl">
                <span>
                  <img src={User3} alt="" />
                </span>
              </div>
              <div className="chatusr-descrp">
                <div className="tp-chtdescrp">
                  <h3>Jackson Allen</h3>
                  <p>02:30 PM</p>
                </div>
                <div className="btm-chtdescrp">
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ChatList;
