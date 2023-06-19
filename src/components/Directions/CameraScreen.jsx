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

export default function ({ mapState, toggleComponent }) {
  const [directions, setDirections] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = React.useState({});
  const scrollRef = useRef(null); // Ref for the currently focused card

  useEffect(() => {
    const calculateDirections = async () => {
      console.log(mapState);
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
    for (let i = 0; i < words.length; i++) {
      const value = words[i].trim();
      if (directions.includes(value)) {
        return value;
      }
    }
    return "Keep Going";
  };

  return (
    <Box sx={{ width: "100%", marginTop: "20px" }}>
      <Box
        sx={{
          width: "100%",
          overflow: "auto",
          marginBottom: "20px",
          height: "300px",
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
        <Stepper nonLinear activeStep={activeStep} alternativeLabel>
          {directions &&
            directions.steps.map((step, index) => (
              <Step key={index} completed={index < activeStep}>
                <StepButton onClick={handleStep(index)}>
                  <Card
                    sx={{
                      width: 300,
                      height: 200,
                      margin: "0 8px",
                      padding: "16px",
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
      </Box>
      <div>
        {directions ? (
          <React.Fragment>
            {allStepsCompleted() ? (
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you're finished
              </Typography>
            ) : (
              <>
                <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                  Step {activeStep + 1}/{directions.steps.length}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ marginRight: 1 }}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleComplete}
                    sx={{ marginRight: 1 }}
                  >
                    Next
                  </Button>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                  <Box
                    sx={{
                      width: "100px",
                      height: "100px",
                      backgroundColor: "#f50057",
                      color: "#fff",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: "8px",
                    }}
                  >
                    {/* Here instead of left, right, straight etc. Show the models. */}
                    {extractFirstDirection(
                      directions.steps[activeStep].html_instructions
                    )}
                  </Box>
                </Box>
              </>
            )}
            <button onClick={toggleComponent}>Map</button>
          </React.Fragment>
        ) : (
          <p>Loading directions...</p>
        )}
      </div>
    </Box>
  );
}
