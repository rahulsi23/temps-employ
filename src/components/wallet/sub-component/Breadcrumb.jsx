import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = () => {
  return (
    <>
    <div className="breadcrumb-main">
      <div className="container">
        <div className="breadcrumb-inner">
          <div className="page-title title-wthback-icon">
            <div className="back-page-btn">
              <Link to="/">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 7.5H3.83L9.42 1.91L8 0.5L0 8.5L8 16.5L9.41 15.09L3.83 9.5H16V7.5Z"
                    fill="#2D3849"
                  />
                </svg>
              </Link>
            </div>
            <h3>Wallet</h3>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Breadcrumb