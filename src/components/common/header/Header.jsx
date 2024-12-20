import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo, ProfilePic } from "../../../assets/images";
const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  useEffect(() => {
    const scrolling = () => {
      if (window.scrollY > 75) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };
    window.addEventListener("scroll", scrolling);
    return () => {
      window.removeEventListener("scroll", scrolling);
    };
  }, []);

  const scrollToViews = (sectionId) => {
    setActiveNav(sectionId);
    const section = document.getElementById(sectionId);
    console.log(section);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [activeNav, setActiveNav] = useState(null);
  const navigate = useNavigate();
  const role = localStorage.getItem("userType");
  const isHr = role === "HR";
  const isEmp = role === "EMPOLYEE";

  const HrAndEmpMenus = [
    {
      name: "home",
      hrUrl: "/home",
      empUrl: "/home",
    },
    {
      name: "Chat",
      hrUrl: "/chat",
      empUrl: "/chat",
    },
    {
      name: "wallet",
      hrUrl: "/wallet",
      empUrl: "/wallet",
    },
    // {
    //   name: "work history",
    //   hrUrl: "/work-history-list",
    //   empUrl: "/work-history-list",
    // },
    // {
    //   name: "setting",
    //   hrUrl: "/change-password",
    //   empUrl: "/change-password",
    // },
  ];

  const clickOnMenu = (path) => {
    navigate(path);
  };
  return (
    <>
      <header className={`${isScrolling ? "fixed" : ""}`}>
        <div className="container">
          <div className="main-header">
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </div>

            <div className="hdr-menu">
              <div className="navigation-menu">
                <nav>
                  {!isEmp && !isHr && (
                    <ul>
                      <li>
                        <Link
                          onClick={() => {
                            scrollToViews("home");
                          }}
                          to="/"
                          className={`${activeNav === "home" ? "active" : ""}`}
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => {
                            scrollToViews("howswork");
                          }}
                          to="/"
                          className={`${
                            activeNav === "howswork" ? "active" : ""
                          }`}
                        >
                          How Does It Work?
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => {
                            scrollToViews("aboutus");
                          }}
                          to="/"
                          className={`${
                            activeNav === "aboutus" ? "active" : ""
                          }`}
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => {
                            scrollToViews("contact");
                          }}
                          to="/"
                          className={`${
                            activeNav === "contact" ? "active" : ""
                          }`}
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  )}
                  {(isEmp || isHr) && (
                    <ul>
                      {HrAndEmpMenus.map((item, index) => {
                        return (
                          <li key={index}>
                            {isEmp && (
                              <a onClick={() => clickOnMenu(item.empUrl)}>
                                {item.name}
                              </a>
                            )}
                            {isHr && (
                              <a onClick={() => clickOnMenu(item.hrUrl)}>
                                {item.name}
                              </a>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </nav>
                <div
                  onClick={() => {
                    document.body.classList.remove("menu-open");
                  }}
                  className="close-menu"
                >
                  <span></span>
                </div>
              </div>
              <div className="auth-hdr">
                <div className="noti-hdr-icon">
                  <Link to="/notification">
                  <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.182 18.3545C17.511 18.0787 19.7993 17.5291 21.9995 16.717C20.1362 14.653 19.1066 11.9701 19.1107 9.18945V8.25195C19.1107 6.26283 18.3205 4.35518 16.914 2.94865C15.5075 1.54213 13.5998 0.751953 11.6107 0.751953C9.62158 0.751953 7.71393 1.54213 6.3074 2.94865C4.90088 4.35518 4.1107 6.26283 4.1107 8.25195V9.18945C4.11447 11.9702 3.08444 14.6531 1.2207 16.717C3.38695 17.517 5.6707 18.0732 8.03945 18.3545M15.182 18.3545C12.8094 18.6359 10.412 18.6359 8.03945 18.3545M15.182 18.3545C15.3621 18.9168 15.4069 19.5137 15.3127 20.0966C15.2185 20.6795 14.988 21.2319 14.6399 21.7089C14.2919 22.1859 13.8361 22.5739 13.3097 22.8415C12.7833 23.109 12.2012 23.2484 11.6107 23.2484C11.0202 23.2484 10.4381 23.109 9.91171 22.8415C9.38532 22.5739 8.92954 22.1859 8.58148 21.7089C8.23342 21.2319 8.00291 20.6795 7.90872 20.0966C7.81453 19.5137 7.85932 18.9168 8.03945 18.3545" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                  </Link>
                </div>
                {!isEmp && !isHr && (
                  <div className="signup-btn">
                    <Link
                      to="/login-roles"
                      className="btn primary-btn flex-btn"
                    >
                      Login
                      <span>
                        <svg
                          width="33"
                          height="43"
                          viewBox="0 0 42 43"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="21.0422"
                            cy="21.3625"
                            r="20.9417"
                            fill="black"
                          />
                          <path
                            d="M16.1057 25.666C15.7497 26.0883 15.8033 26.7191 16.2256 27.0752C16.6478 27.4312 17.2787 27.3775 17.6347 26.9553L16.1057 25.666ZM26.2112 16.3298C26.1644 15.7795 25.6803 15.3713 25.13 15.4181L16.1624 16.1809C15.6121 16.2277 15.204 16.7118 15.2508 17.2621C15.2976 17.8124 15.7816 18.2205 16.3319 18.1737L24.3031 17.4957L24.9812 25.4669C25.028 26.0172 25.512 26.4253 26.0623 26.3785C26.6126 26.3317 27.0208 25.8477 26.974 25.2974L26.2112 16.3298ZM17.6347 26.9553L25.9793 17.0591L24.4503 15.7699L16.1057 25.666L17.6347 26.9553Z"
                            fill="#3EEDE6"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                )}
                 <div className="admin-prflsec">
                <div className="admnprfl-tbmain">
                  <div
                    className="admin-name"
                    // onClick={() => setShowProfile((p) => !p)}
                  >
                    <Link to="/profile"
                      style={{ backgroundImage: `url(${ProfilePic})` }}
                    ></Link>
                  </div>
                </div>
              </div>
                <div
                  onClick={() => {
                    document.body.classList.toggle("menu-open");
                  }}
                  className="menu-icon"
                >
                  <span></span>
                </div>
              </div>
              <div
                className="overlay"
                onClick={() => {
                  document.body.classList.remove("menu-open");
                }}
              ></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
