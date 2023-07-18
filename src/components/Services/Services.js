import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import * as styles from "./Services.module.css";

const Services = ({ servicesData }) => {
  return (
    <section
      className={`margin-on-side ${styles.servicesContainer}`}
      id="services"
    >
      <h4 className={`text-heading ${styles.servicesLabel}`}>
        {servicesData.title}
      </h4>
      <p className={styles.servicesDes}>{servicesData.description}</p>
      <div className={styles.servicesList}>
        {servicesData.servicesList.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            desc={service.desc}
            poster={service.poster}
            route={service.route}
            exploreText={servicesData.exploreText}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
