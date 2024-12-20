import React from "react";
const ChatBox = () => {
  return (
    <>
      <div className="chat-detail">
        <div className="chat-header">
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
          <div className="chathead-userdtl">
            <h2>Riparazione lampadina</h2>
          </div>
        </div>
        <div className="msginbox-sec">
          <ul>
            <li className="msg-reciver">
              <div className="card">
                <div className="msg-descrp msg-format">
                  <h3>Dear Niki,</h3>
                  <p>We have a task that requires your expertise. Details are as follows:</p>
                  <ol>
                  <li>Location: <bold>UK Street 1234</bold></li> 
                  <li>Timing: <bold>12:00PM to 4:00PM on 12Jan 2024</bold></li>
                  <li>Compensation: <bold>€99 for the 4-hour task.</bold></li> 
                  </ol>
                   <p>Your involvement is vital. If you have questions,reach out to [HR Contact]. We appreciate your commitment.</p>
                  <h5>Best,</h5>
                </div>
              </div>
              <div className="msgdate">
                <p>Sep 9</p>
              </div>
            </li>
            <li className="msg-sender">
              <div className="card">
                <div className="msg-descrp">
                  <p>Hello!</p>
                </div>
              </div>
              <div className="msgdate">
                <p>Sep 9</p>
              </div>
            </li>
            <li className="msg-reciver">
              <div className="card">
                <div className="msg-descrp">
                  <p>Hello ! How can I Help you?</p>
                </div>
              </div>
              <div className="msgdate">
                <p>Sep 9</p>
              </div>
            </li>
            <li className="msg-sender">
              <div className="card">
                <div className="msg-descrp">
                  <p>I want to add new Product</p>
                </div>
              </div>
              <div className="msgdate">
                <p>Sep 9</p>
              </div>
            </li>
            <li className="msg-reciver">
              <div className="card">
                <div className="msg-descrp">
                  <p>Sure, Please Upload the product details</p>
                </div>
              </div>
              <div className="msgdate">
                <p>Sep 9</p>
              </div>
            </li>
          </ul>
          <div className="chat-footer">
            <div className="chatftr-main">
              <div className="chat-typinput">
                <input type="text" placeholder="Write a message..." />
              </div>
              <div className="moremenu-chtbtn">
               
                <div className="send-btnmain">
                  <span className="send-icon">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.7601 1.04317C20.5763 0.85942 20.3467 0.728007 20.0952 0.662469C19.8436 0.596931 19.5792 0.599638 19.329 0.67031H19.3153L1.77438 5.99272C1.48885 6.07483 1.2351 6.24198 1.04694 6.47191C0.85877 6.70184 0.745111 6.98363 0.721095 7.27977C0.697078 7.5759 0.763844 7.87233 0.912501 8.12957C1.06116 8.38681 1.28465 8.59267 1.55322 8.71972L9.37782 12.4255L13.0836 20.2501C13.2006 20.5007 13.3868 20.7125 13.6203 20.8607C13.8538 21.0089 14.1248 21.0871 14.4014 21.0863C14.4434 21.0863 14.4855 21.0844 14.5275 21.0808C14.8226 21.0569 15.1033 20.9433 15.332 20.7553C15.5607 20.5673 15.7264 20.3138 15.8069 20.0289L21.1257 2.48801C21.1257 2.48344 21.1257 2.47887 21.1257 2.4743C21.1973 2.22478 21.2011 1.9607 21.1369 1.70918C21.0727 1.45767 20.9426 1.22779 20.7601 1.04317ZM14.4096 19.6104L14.405 19.6232L10.808 12.0298L15.1252 7.71172C15.2565 7.57349 15.3286 7.38944 15.3262 7.19879C15.3237 7.00815 15.2469 6.826 15.1121 6.69119C14.9773 6.55637 14.7951 6.47955 14.6045 6.47711C14.4139 6.47467 14.2298 6.5468 14.0916 6.67812L9.77353 10.9953L2.17923 7.39826H2.19202L19.7256 2.07768L14.4096 19.6104Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
