import React from "react";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import testmonialsList from "../../data/TestimonialsList";
import * as styles from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <section className={`${styles.testContainer} margin-on-side`}>
      <h4 className={`text-heading ${styles.testLabel}`}>Testimonials</h4>
      <p className={styles.Des}>
        Find out why our platform has earned rave reviews from users around the
        world - read their testimonials today!
      </p>
      <div className={styles.testList}>
        {testmonialsList.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            message={testimonial.message}
            name={testimonial.name}
            rating={testimonial.rating}
            avatar={testimonial.avatar}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
