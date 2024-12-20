import React from "react";
const WithdrawalCard = ({ boxShow, setBoxShow }) => {


  const clickOnProceed = () =>{
    setBoxShow(p => ({...p , proceedBtn : false , cardBox : true}))
  }
  return (
    <>
      <div className="card wthdrwlamnt-card">
        <div className="wthdrwlamnt-sec">
          <div className="wthdrwl-frstsec">
            <div className="wthdrwl-wraper">
              <div className="wthdrwa-heading">
                <h3>Withdrawal Amount</h3>
              </div>
              <div className="inputwth-euro">
                <div class="form-inputs">
                  <input
                    type="number"
                    name="amount"
                    class="form-control"
                    placeholder="Enter amount"
                    value={boxShow.amount}
                    onChange={() =>
                      setBoxShow((p) => ({ ...p, amount: e.target.value }))
                    }
                  />
                </div>
                <div className="euro-icon">
                  <span>
                    <i class="fa fa-eur" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="wthdrwl-wraper">
              <div className="wthdrwa-heading">
                <h3>Recommended</h3>
              </div>
              <div className="rcomded-amunt-main">
                <ul>
                  <li>
                    <button className="btn rcomnded-amntbtn" onClick={()=> setBoxShow((p) => ({ ...p, amount: 5 }))}>€5</button>
                  </li>
                  <li>
                    <button className="btn rcomnded-amntbtn" onClick={()=> setBoxShow((p) => ({ ...p, amount: 100 }))}>€100</button>
                  </li>
                  <li>
                    <button className="btn rcomnded-amntbtn" onClick={()=> setBoxShow((p) => ({ ...p, amount: 200 }))}>€200</button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="prced-btn">
              <button className="btn primary-btn" onClick={clickOnProceed}>Proceed</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithdrawalCard;
