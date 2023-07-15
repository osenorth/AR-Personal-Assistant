import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Stepper,
  Step,
  StepButton,
  Button,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import ReactHtmlParser from "react-html-parser";
import { Fab } from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import dynamic from "next/dynamic";

const LeftFemale = dynamic(() => import("./ModelViews/leftFemale"), {
  ssr: false,
});
const RightFemale = dynamic(() => import("./ModelViews/rightFemale"), {
  ssr: false,
});
const StopFemale = dynamic(() => import("./ModelViews/stopFemale"), {
  ssr: false,
});
const LeftMale = dynamic(() => import("./ModelViews/leftMale"), {
  ssr: false,
});
const RightMale = dynamic(() => import("./ModelViews/rightMale"), {
  ssr: false,
});
const StopMale = dynamic(() => import("./ModelViews/stopMale"), {
  ssr: false,
});

export default function ({ mapState, toggleComponent }) {
  const [directions, setDirections] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [gender, setGender] = useState("male");
  const scrollRef = useRef(null); // Ref for the currently focused card

  useEffect(() => {
    const calculateDirections = async () => {
      const response = await fetch(`/api/direction`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          origin: mapState.start,
          destination: mapState.destination,
        }),
      });
      const data = await response.json();
      const map_directions = data?.direction;
      setDirections(map_directions.routes[0].legs[0]);
    };
    calculateDirections();
  }, []);

  useEffect(() => {
    // Scroll the focused card into view when activeStep changes
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [activeStep]);

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const allStepsCompleted = () => {
    // Check if all steps are completed
    return activeStep === (directions ? directions.steps.length : 0);
  };

  const extractFirstDirection = (instructions) => {
    const directions = ["left", "right", "straight"];
    const parser = new DOMParser();
    const doc = parser.parseFromString(instructions, "text/html");
    const textContent = doc.body.textContent || "";
    const words = textContent.trim().split(" ");
    for (let i = 0; i < words.length - 1; i++) {
      const value = words[i].trim();
      if (directions.includes(value)) {
        return value;
      }
    }
    return "stop";
  };

  const changeGender = () => {
    console.log("gender changed");
    gender === "male" ? setGender("female") : setGender("male");
  };

  return (
    <Box
      sx={{
        width: "100%",
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <style>
        {`
            /* Hide the Y scroll bar */
            ::-webkit-scrollbar {
              width: 0;
            }
            /* Show the X scroll bar */
            ::-webkit-scrollbar {
              width: 1;
              height: 1;
            }
          `}
      </style>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        sx={{
          width: "100%",
          overflow: "auto",
          height: "35vh",
        }}
      >
        {directions &&
          directions.steps.map((step, index) => (
            <Step key={index} completed={index < activeStep}>
              <StepButton onClick={handleStep(index)}>
                <Card
                  sx={{
                    width: 300,
                    height: 200,
                    padding: "2px",
                  }}
                  ref={index === activeStep ? scrollRef : null}
                >
                  <CardContent>
                    {ReactHtmlParser(step.html_instructions)}
                  </CardContent>
                </Card>
              </StepButton>
            </Step>
          ))}
      </Stepper>
      {directions ? (
        <Box>
          {allStepsCompleted() ? (
            <Typography sx={{ mt: 2, mb: 1 }}>
              You reached your destination
            </Typography>
          ) : (
            <>
              <Button
                variant="contained"
                onClick={changeGender}
                sx={{ margin: 1 }}
                color={"warning"}
              >
                Change Gender
              </Button>
              <Button
                variant="contained"
                color="secondary"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ margin: 1 }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleComplete}
              >
                Next
              </Button>
              <Box
                sx={{
                  width: "100%",
                  height: "40vh",
                }}
              >
                {extractFirstDirection(
                  directions.steps[activeStep].html_instructions
                ) === "left" &&
                  gender === "male" && <LeftMale />}
                {extractFirstDirection(
                  directions.steps[activeStep].html_instructions
                ) === "left" &&
                  gender === "female" && <LeftFemale />}
                {extractFirstDirection(
                  directions.steps[activeStep].html_instructions
                ) === "right" &&
                  gender === "male" && <RightMale />}
                {extractFirstDirection(
                  directions.steps[activeStep].html_instructions
                ) === "right" &&
                  gender === "female" && <RightFemale />}
                {extractFirstDirection(
                  directions.steps[activeStep].html_instructions
                ) === "stop" &&
                  gender === "male" && <StopMale />}
                {extractFirstDirection(
                  directions.steps[activeStep].html_instructions
                ) === "stop" &&
                  gender === "female" && <StopFemale />}
              </Box>
              <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                Step {activeStep + 1}/{directions.steps.length}
              </Typography>
            </>
          )}
          <Box
            sx={{
              border: "1px solid black",
              alignContent: "center",
              borderRadius: "10%",
              position: "fixed",
              bottom: 20,
              right: 5,
              width: 60,
              height: 60,
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999, // Ensure the button stays on top of other content
            }}
          >
            <Fab aria-label="add" color="success" onClick={toggleComponent}>
              <MapIcon />
            </Fab>
          </Box>
        </Box>
      ) : (
        <p>Loading directions...</p>
      )}
    </Box>
  );
}
