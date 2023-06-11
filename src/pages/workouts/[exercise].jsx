import React from "react";
import dynamic from "next/dynamic";
const WorkoutCanvas = dynamic(
  () => import("../../components/FitnessTrainer/WorkoutCanvas"),
  { ssr: false }
);

export default () => {
  return <WorkoutCanvas />;
};

