import React, { useState } from "react";
import FeedbackSubmitedPopup from "./FeedbackSubmitedPopup";

const FeedbackRating = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (index) => {
    setRating(index + 1);
  };


  const [showFeedbackSubmitedPopup, setShowFeedbackSubmitedPopup] = useState(false);
  const handleFeedbackSubmitedPopup = () => {
    setShowFeedbackSubmitedPopup((p) => !p);
  };
  return (
    <>
      <section className="fdback-main-sec">
      <div className="container">
        <div className="card">
          <div className="fdback-main">
            <div className="fdback-tp-heading">
              <h3>Share your valuable Review</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur , sed do eiusmod tempor
              </p>
            </div>
            <div className="fbback-rating-main">
              <div className="rating-star">
                <div className="ratingstar-slect">
                {[...Array(5)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleClick(index)}
        >
          <i className={`fa-star ${index < rating ? 'fa-solid' : 'fa-regular'}`}></i>
        </span>
      ))}
                </div>
              </div>
              <div className="fdback-textarea">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Type your review"
                ></textarea>
              </div>
              <div className="fdback-btn">
                <div className="form-btn flex-btn">
                  <button type="button" className="btn primary-btn" onClick={handleFeedbackSubmitedPopup}>
                    Rate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>


      {showFeedbackSubmitedPopup && <FeedbackSubmitedPopup handlePopup={handleFeedbackSubmitedPopup} />}
    </>
  );
};

export default FeedbackRating;
