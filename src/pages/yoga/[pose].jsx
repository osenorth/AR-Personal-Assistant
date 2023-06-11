import React from "react";
import dynamic from "next/dynamic";
const YogaCanvas = dynamic(
  () => import("../../components/FitnessTrainer/YogaCanvas"),
  { ssr: false }
);

export default () => {
  return <YogaCanvas />;
};
