import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import servicesList from "../../data/ServicesList";
import * as styles from "./Services.module.css";

const Services = () => {
  return (
    <section className={`margin-on-side ${styles.servicesContainer}`}>
      <h4 className={`text-heading ${styles.servicesLabel}`}>Our Services</h4>
      <p className={styles.servicesDes}>
        Our platform is packed with advanced features designed to help you stay
        organized, focused, and on top of your workload - all while freeing up
        more time for the things that matter most.
      </p>
      <div className={styles.servicesList}>
        {servicesList.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            desc={service.desc}
            poster={service.poster}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
