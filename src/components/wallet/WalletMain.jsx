import React, { useState } from "react";
import {
  Breadcrumb,
  Mywallet,
  PayementMethod,
  WithdrawalCard,
} from "./sub-component";
const WalletMain = () => {

  const [boxShow, setBoxShow] = useState({
    amount: 0,
    proceedBtn: true,
    cardBox: false,
  });

  return (
    <>
      <main>
        <Breadcrumb />
        <section className="workhistory-section">
          <div className="container">
            <div className="walet-flex">
              <div className="walet-flex-inner">
                <Mywallet />
              </div>
              <div className="walet-flex-inner">
                {boxShow.proceedBtn && <WithdrawalCard boxShow={boxShow} setBoxShow={setBoxShow} />}
                {boxShow.cardBox && <PayementMethod />}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default WalletMain;
