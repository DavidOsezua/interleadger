/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styles from "./FormComponent.module.css";
import FormField from "./FormField";
import { arrow } from "../assests";
import FormModal from "./FormModal";

const FormComponent = ({ modalHandler }) => {
  return (
    <>
      <form className={styles["form"]}>
        <h2 className={styles["form-heading"]}>Buy / Sell Crypto</h2>
        <div className={styles["form-body"]}>
          {/* crypto to send */}
          <FormField
            label="You Send"
            labelId="crypto-you-send"
            selectName="send-crypto"
          />

          {/* crypto conversion details */}
          <div className="flex w-full items-center justify-start py-2">
            <div className={styles["form-conversion-detail"]}>
              <span>Fee 2%</span>
              <span>1 BTC = 45762.89 USDT</span>
            </div>
            <button className="mx-auto" aria-label="Switch crypto">
              <img
                src="/switch-arrow.png"
                aria-hidden="true"
                width={20}
                height={20}
              />
            </button>
          </div>

          {/* crypto to receive */}
          <FormField
            label="You Get"
            labelId="crypto-you-get"
            selectName="receive-crypto"
          />

          {/* exchange button */}
          <div
            className={`${styles.formButton} cursor-pointer`}
            onClick={modalHandler}
          >
            <button type="button">Exchange</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormComponent;
