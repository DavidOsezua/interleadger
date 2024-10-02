import React, { useState } from "react";
import styles from "./Home.module.css";

import { arrow } from "../assests";
import Button from "../Components/BTN";
import { FormComponent } from "../Components";
import { Slide, Fade } from "react-awesome-reveal";
import FormModal from "../Components/FormModal";

const Home = () => {
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal((prev) => !prev);
  };
  return (
    <>
      {modal && <FormModal modalHandler={modalHandler} />}

      <section className={`${styles.formSection} `}>
        <div className={`${styles.formContainer}`}>
          <FormComponent modalHandler={modalHandler} />
        </div>
      </section>
    </>
  );
};

export default Home;
