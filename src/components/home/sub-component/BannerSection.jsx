import React from 'react'
import { Banner } from '../../../assets/images'
const BannerSection = () => {
  return (
    <>
      <section className="banner-section" id='home' style={{ backgroundImage: `url(${Banner})` }}>
      <div className="container">
        <div className="banner-main">
            <div className="banner-content">
              <h1>Welcome to <span>Temps Employ</span> - Your Gateway to Efficient Workforce Management</h1>
              <p>TempsEmploy is your premier destination for efficient and effective temporary workforce management. We specialize in connecting businesses with skilled temporary workers, including cleaners, gardeners.</p>
               <div className="bnr-btn">
               <button className="btn primary-btn flex-btn">
                    Explore Now
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
                  </button>
               </div>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default BannerSection