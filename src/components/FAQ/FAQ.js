import React from "react";
import FAQList from "../../data/FAQList.js";
import { HiOutlinePlus } from "react-icons/hi";
import * as styles from "./FAQ.module.css";

const FAQ = () => {
  const toggle = (activeInd) => {
    for (let ind = 0; ind < FAQList.length; ind++) {
      let que = "que" + ind;
      let icon = "icon" + ind;
      let ans = "ans" + ind;
      let queElement = document.getElementById(que);
      let ansElement = document.getElementById(ans);
      let iconElement = document.getElementById(icon);
      if (ind === activeInd) {
        queElement.classList.toggle(styles.activeQue);
        iconElement.classList.toggle(styles.rotateIcon);
        ansElement.classList.toggle(styles.closedAns);
      } else {
        queElement.classList.remove(styles.activeQue);
        iconElement.classList.remove(styles.rotateIcon);
        ansElement.classList.add(styles.closedAns);
      }
    }
  };

  return (
    <section className={`margin-on-side ${styles.faqContainer}`}>
      <h4 className={`text-heading ${styles.faqLabel}`}>FAQ's</h4>
      <p className={styles.faqDes}>
        Find answers to common questions and learn more about our platform with
        our comprehensive FAQ section.
      </p>
      <div className={styles.faqList}>
        {FAQList.map((faq, index) => {
          return (
            <div className={styles.faqItem} key={index}>
              <button
                type="button"
                className={styles.quebtn}
                onClick={() => toggle(index)}
                id={`que${index}`}
              >
                <span>{faq.que}</span>
                <HiOutlinePlus size={30} id={`icon${index}`} />
              </button>
              <div
                className={`${styles.faqAnswer} ${styles.closedAns}`}
                id={`ans${index}`}
              >
                <span>{faq.ans}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
