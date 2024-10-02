/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { lineArrow, usd, bitcoin } from "../assests";
import styles from "./ConfirmExchange.module.css";
const ConfirmExcahnge = () => {
  return (
    <div>
      <div className="w-max mx-auto relative sm:flex">
        <div className="flex items-center gap-12 justify-center py-4 w-64 border border-primaryBlue ">
          <p>150000</p>
          <p className="flex gap-2 items-center">
            <img src={usd} />
            USD
          </p>
        </div>

        <div className="flex items-center justify-center gap-12 py-4 w-64 border border-primaryBlue  ">
          <p>≈45762.89</p>
          <p className="flex gap-2 items-center">
            <img src={bitcoin} />
            BTC
          </p>
        </div>

        <img
          src={lineArrow}
          className=" rotate-90 mx-auto absolute top-1/2 left-1/2 -translate-y-1/2 z-10 sm:rotate-0 -translate-x-1/2"
        />
      </div>

      <div className={`${styles.details}`}>
        <div className={`${styles.recipientFee}`}>
          <div>
            <p className="text-[0.75rem] text-[#0010399C]">Recipient Wallet</p>
            <p className="text-4 font-[500]">
              bc1q89505gq64s2ux4are47k5pfc2q3gc987hg0ucc
            </p>
          </div>

          <div>
            <p className="text-[#0010399C]">Fee 2%</p>
          </div>
        </div>

        <div className={`${styles.exchangeRate}`}>
          <div>
            <p className="text-[0.75rem] text-[#0010399C]">Exchange rate</p>
            <p>1 BTC ≈ 45762.89 USD</p>
          </div>

          <div>
            <p className="text-[0.75rem] text-[#0010399C]">Estimated Arrival</p>
            <p>~ 10 minutes</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className={`${styles.checkBox}`}>
          <input type="checkbox" />
          <p>
            I've read and agree to the provider's Terms of use and Privacy
            Policy
          </p>
        </div>

        <div className={`${styles.checkBox}`}>
          <input type="checkbox" />
          <p>
            I'm aware that this exchange is made through a third-party service
            third-party service
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmExcahnge;
