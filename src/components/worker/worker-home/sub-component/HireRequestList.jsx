import React from "react";
import { PrflImage } from "../../../../assets/images";
import { Link } from "react-router-dom";

const HireRequestList = () => {

  return (
    <>
       <div className="card">
        <div className="hirqest-heading">
          <h3>Hire Requests</h3>
        </div>
       <div className="hiring-list">
          <ul>
            {Array(10).fill(1).map((item,idx)=>{
              return(
                <li>
              <div className="hirng-card">
                <div className="hirngcrd-top">
                  <div className="hirngprfl-dtl">
                    <div className="hrngprfl-image">
                    <span style={{ backgroundImage: `url(${PrflImage})` }}></span>
                    </div>
                    <div className="hirngprfl-descrp">
                     <div className="namewith-badgestatus">
                     <h3>John Doe</h3>
                     <span>Sent you a hire request </span>
                     </div>
                     <p>HR Manager at NewCompany </p>
                     <div className="advrtise-date">
                           <span><i className="fa fa-calendar" aria-hidden="true"></i></span><p>2:00 PM Thur 2024 </p>
                      </div>
                    </div>
                  </div>
                  <div className="hirng-jobttl">
                    <span className="job-badge">Cleaner</span>
                  </div>
                </div>
                <div className="hirngcrd-mdl">
                   <h3>Hii NIKI,</h3>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Assumenda architecto laborum eos, nihil commodi id, asperiores quas option!<Link to="/job-request-detail" >..View Detail</Link>
                   </p>
                </div>
                <div className="hirngcrd-btm">
                   <div className="hirng-action">
                         <button className="btn decline-btn">Decline</button>
                        <Link to="/job-request-detail" className="btn accept-btn">Accept</Link>
                        {/* {!acceptedTopic.includes(idx) &&
                        <>
                        <button className="btn decline-btn">Decline</button>
                        <button onClick={()=>{handleAccepted(idx)}} className="btn accept-btn">Accept</button>
                        </>
                        }
                        {acceptedTopic.includes(idx) && 
                        <button className="btn chating-btn">Chat <span><i className="fa fa-comments-o" aria-hidden="true"></i></span></button>
                        } */}
                    </div>

                </div>
              </div>
            </li>
              )
            })}
          </ul>
        </div>
       </div>
    </>
  );
};

export default HireRequestList;
