import React from "react";
import Services from "../Services/Services";
import workoutData from "../../data/ServicesData";

const Workout = () => {
  return <Services servicesData={workoutData} />;
};

export default Workout;
