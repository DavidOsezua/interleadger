/* eslint-disable react/prop-types */
import React from "react";
import Button from "./Button";
import { arrow } from "../assests";
import styles from "./SectionComponent.module.css";
import { Slide, Fade } from "react-awesome-reveal";

const SectionComponent = ({
  image,
  images,
  heading1,
  heading2,
  heading3,
  text1,
  text2,
  text3,
  center,
  imageSide,
}) => {
  return (
    <div className={styles.split}>
      <div className={`${imageSide ? styles.imageSide : ""} ${styles.image}`}>
        <Fade delay={1000} triggerOnce>
          <img src={image} />
        </Fade>
      </div>

      <div
        className={`${styles.splitContainer} ${
          center  ? styles.textCenter : " "
        } `}
      >
        <div className={``}>
          <Slide direction="down" triggerOnce>
            <h1 className={styles.heading}>{heading1} </h1>
          </Slide>
          <Fade delay={300} triggerOnce>
            <p className={styles.text}>{text1}</p>
          </Fade>
        </div>

        <div>
          <Slide direction="down" triggerOnce>
            <h1 className={styles.heading}>{heading2} </h1>
          </Slide>
          <Fade delay={300} triggerOnce>
            <p className={styles.text}>{text2}</p>
          </Fade>
        </div>

        <div>
          <Slide direction="down" triggerOnce>
            <h1 className={styles.heading}>{heading3} </h1>
          </Slide>
          <Fade delay={300} triggerOnce>
            <p className={styles.text}>{text3}</p>
          </Fade>
        </div>

        <div>{images}</div>
        <Slide delay={500} direction="up" triggerOnce>
          <Button>
            <img src={arrow} /> Start Now
          </Button>
        </Slide>
      </div>
    </div>
  );
};

export default SectionComponent;
