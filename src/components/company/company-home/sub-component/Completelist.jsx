import React from "react";
import { PrflImage } from "../../../../assets/images";
import { Link } from "react-router-dom";
const Completelist = () => {
  return (
    <>
      <div className="card">
        <div className="hirqest-heading">
          <h3>Complete List</h3>
        </div>
        <div className="hiring-list">
          <ul>
            {Array(10)
              .fill(1)
              .map((item, idx) => {
                return (
                  <li>
                    <div className="hirng-card">
                      <div className="hirngcrd-mdl">
                        <h3>UI UX Designer</h3>
                        <div className="skils-list">
                          <span className="skils-badge">Figma</span>
                          <span className="skils-badge">Photoshop</span>
                        </div>
                        <div className="wrker-adrsdtls">
                          <div className="wrker-adrdtl-descrp">
                            <em>
                              <svg
                                width="19"
                                height="19"
                                viewBox="0 0 19 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.4942 17.4936C10.1473 17.8184 9.68352 18 9.20088 18C8.71824 18 8.25456 17.8184 7.9076 17.4936C4.73042 14.5008 0.472608 11.1575 2.54902 6.30373C3.6717 3.67933 6.36667 2 9.20088 2C12.0351 2 14.7301 3.67933 15.8528 6.30373C17.9266 11.1514 13.6792 14.5111 10.4942 17.4936Z"
                                  stroke="#0EB7B0"
                                  stroke-width="1.2"
                                />
                                <path
                                  d="M12.0004 9.20039C12.0004 10.7468 10.7468 12.0004 9.20039 12.0004C7.65399 12.0004 6.40039 10.7468 6.40039 9.20039C6.40039 7.65399 7.65399 6.40039 9.20039 6.40039C10.7468 6.40039 12.0004 7.65399 12.0004 9.20039Z"
                                  stroke="#0EB7B0"
                                  stroke-width="1.2"
                                />
                              </svg>
                            </em>
                            <p>
                              <span>Location:</span>XYZ Restaurant, 123 Main
                              Street, City, State
                            </p>
                          </div>
                          <div className="wrker-adrdtl-descrp">
                            <em>
                              <svg
                                width="19"
                                height="19"
                                viewBox="0 0 19 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.70898 10.292H12.6673M6.33398 10.292H6.34109M10.2923 13.4587H6.33398M12.6673 13.4587H12.6602"
                                  stroke="#0EB7B0"
                                  stroke-width="1.1875"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M14.25 1.58301V3.16634M4.75 1.58301V3.16634"
                                  stroke="#0EB7B0"
                                  stroke-width="1.1875"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M1.97852 9.69253C1.97852 6.24304 1.97852 4.51826 2.96978 3.44663C3.96104 2.375 5.55645 2.375 8.74727 2.375H10.2514C13.4422 2.375 15.0377 2.375 16.0289 3.44663C17.0202 4.51826 17.0202 6.24304 17.0202 9.69253V10.0991C17.0202 13.5487 17.0202 15.2734 16.0289 16.3451C15.0377 17.4167 13.4422 17.4167 10.2514 17.4167H8.74727C5.55645 17.4167 3.96104 17.4167 2.96978 16.3451C1.97852 15.2734 1.97852 13.5487 1.97852 10.0991V9.69253Z"
                                  stroke="#0EB7B0"
                                  stroke-width="1.1875"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M2.375 6.33301H16.625"
                                  stroke="#0EB7B0"
                                  stroke-width="1.1875"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </em>
                            <p>
                              <span>Date & Time:</span> Full-time position,
                              Monday to Friday, 9:00 AM to 5:00 PM
                            </p>
                          </div>
                        </div>
                        <p className="para-descrp">
                          We are seeking reliable and experienced kitchen staff
                          to join our team at XYZ Restaurant
                        </p>
                      </div>
                      <div className="hirngcrd-btm">
                        <div className="hirng-action">
                          <Link to="/completed-job-detail" className="btn accept-btn">
                            View Detail
                          </Link>
                        </div>
                      </div>
                      <div className="cmplet-invoce-dlw">
                        <div className="download-btn">
                          <em>
                            <svg
                              width="17"
                              height="20"
                              viewBox="0 0 17 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M15.8648 5.82967L10.7489 0.713772C10.681 0.645925 10.6003 0.592124 10.5116 0.555445C10.4229 0.518765 10.3278 0.499925 10.2318 0.5H1.46169C1.07402 0.5 0.702237 0.653999 0.428118 0.928118C0.153999 1.20224 0 1.57402 0 1.96169V18.0402C0 18.4279 0.153999 18.7997 0.428118 19.0738C0.702237 19.3479 1.07402 19.5019 1.46169 19.5019H14.6169C15.0045 19.5019 15.3763 19.3479 15.6504 19.0738C15.9246 18.7997 16.0786 18.4279 16.0786 18.0402V6.34675C16.0786 6.25074 16.0598 6.15566 16.0231 6.06694C15.9864 5.97822 15.9326 5.8976 15.8648 5.82967ZM10.9626 2.99492L13.5836 5.6159H10.9626V2.99492ZM14.6169 18.0402H1.46169V1.96169H9.50096V6.34675C9.50096 6.54058 9.57796 6.72647 9.71502 6.86353C9.85208 7.00059 10.038 7.07759 10.2318 7.07759H14.6169V18.0402ZM11.6935 10.7318C11.6935 10.9256 11.6165 11.1115 11.4794 11.2486C11.3424 11.3856 11.1565 11.4626 10.9626 11.4626H5.1159C4.92207 11.4626 4.73618 11.3856 4.59912 11.2486C4.46206 11.1115 4.38506 10.9256 4.38506 10.7318C4.38506 10.538 4.46206 10.3521 4.59912 10.215C4.73618 10.078 4.92207 10.001 5.1159 10.001H10.9626C11.1565 10.001 11.3424 10.078 11.4794 10.215C11.6165 10.3521 11.6935 10.538 11.6935 10.7318ZM11.6935 13.6552C11.6935 13.849 11.6165 14.0349 11.4794 14.172C11.3424 14.309 11.1565 14.386 10.9626 14.386H5.1159C4.92207 14.386 4.73618 14.309 4.59912 14.172C4.46206 14.0349 4.38506 13.849 4.38506 13.6552C4.38506 13.4613 4.46206 13.2755 4.59912 13.1384C4.73618 13.0013 4.92207 12.9243 5.1159 12.9243H10.9626C11.1565 12.9243 11.3424 13.0013 11.4794 13.1384C11.6165 13.2755 11.6935 13.4613 11.6935 13.6552Z"
                                fill="#2965E2"
                              />
                            </svg>
                          </em>
                          Invoice
                          <span>
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M15.9995 9.987V14.6239C15.9995 14.9753 15.8599 15.3122 15.6115 15.5607C15.363 15.8092 15.026 15.9487 14.6747 15.9487H1.42639C1.07503 15.9487 0.73805 15.8092 0.489596 15.5607C0.241142 15.3122 0.101563 14.9753 0.101562 14.6239V9.987C0.101562 9.81132 0.171353 9.64283 0.295579 9.5186C0.419806 9.39437 0.588294 9.32458 0.763977 9.32458C0.93966 9.32458 1.10815 9.39437 1.23237 9.5186C1.3566 9.64283 1.42639 9.81132 1.42639 9.987V14.6239H14.6747V9.987C14.6747 9.81132 14.7445 9.64283 14.8687 9.5186C14.9929 9.39437 15.1614 9.32458 15.3371 9.32458C15.5128 9.32458 15.6813 9.39437 15.8055 9.5186C15.9297 9.64283 15.9995 9.81132 15.9995 9.987ZM7.58188 10.4557C7.6434 10.5172 7.71646 10.5661 7.79687 10.5994C7.87729 10.6328 7.96349 10.6499 8.05054 10.6499C8.13759 10.6499 8.22379 10.6328 8.3042 10.5994C8.38462 10.5661 8.45767 10.5172 8.5192 10.4557L11.8313 7.14359C11.8928 7.08204 11.9416 7.00898 11.9749 6.92856C12.0082 6.84815 12.0254 6.76196 12.0254 6.67493C12.0254 6.58789 12.0082 6.5017 11.9749 6.42129C11.9416 6.34088 11.8928 6.26781 11.8313 6.20627C11.7697 6.14472 11.6967 6.0959 11.6162 6.06259C11.5358 6.02929 11.4496 6.01214 11.3626 6.01214C11.2756 6.01214 11.1894 6.02929 11.109 6.06259C11.0286 6.0959 10.9555 6.14472 10.894 6.20627L8.71295 8.3881V0.713196C8.71295 0.537513 8.64316 0.369025 8.51894 0.244798C8.39471 0.120571 8.22622 0.0507813 8.05054 0.0507812C7.87485 0.0507813 7.70637 0.120571 7.58214 0.244798C7.45791 0.369025 7.38812 0.537513 7.38812 0.713196V8.3881L5.20712 6.20627C5.08283 6.08197 4.91425 6.01214 4.73846 6.01214C4.56268 6.01214 4.3941 6.08197 4.26981 6.20627C4.14551 6.33056 4.07568 6.49915 4.07568 6.67493C4.07568 6.85071 4.14551 7.01929 4.26981 7.14359L7.58188 10.4557Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Completelist;
