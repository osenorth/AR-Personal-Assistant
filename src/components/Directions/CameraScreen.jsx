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
import { useRouter } from "next/router";

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
const StraightFemale = dynamic(() => import("./ModelViews/straightFemale"), {
  ssr: false,
});
const StraightMale = dynamic(() => import("./ModelViews/straightMale"), {
  ssr: false,
});

export default function ({ mapState, toggleComponent }) {
  const [directions, setDirections] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [gender, setGender] = useState("male");
  const scrollRef = useRef(null); // Ref for the currently focused card
  const router = useRouter();
  const [speech, setSpeech] = useState(window.speechSynthesis);

  useEffect(() => {
    if (router.isReady) {
      setSpeech(window.speechSynthesis);
    }
  }, [router.isReady]);

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
    const instructions = directions.steps[activeStep + 1].html_instructions;
    const inputString = instructions;
    // Remove HTML tags
    let cleanString = inputString.replace(/<.*?>/g, "");
    cleanString = cleanString.replace(/(.*?)/g, "");
    // Remove line breaks
    const sentence = cleanString.replace(/\/<wbr\/>/g, "/");
    speak(sentence);
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const speak = (speechText) => {
    const object = new SpeechSynthesisUtterance(speechText);
    object.lang = "en-US";
    speech.speak(object);
  };

  const allStepsCompleted = () => {
    // Check if all steps are completed
    return activeStep === (directions ? directions.steps.length : 0);
  };

  const extractFirstDirection = (instructions) => {
    const inputString = instructions;
    // Remove HTML tags
    let cleanString = inputString.replace(/<.*?>/g, "");
    cleanString = cleanString.replace(/(.*?)/g, "");
    // Remove line breaks
    const sentence = cleanString.replace(/\/<wbr\/>/g, "/");
    if (sentence.includes("right")) {
      console.log("paplu");
      return "right";
    } else if (sentence.includes("left")) {
      console.log("dablu");
      return "left";
    } else if (sentence.includes("stop")) {
      console.log("jablu");
      return "stop";
    }
    console.log("ghesaplu");
    return "straight";
  };

  const changeGender = () => {
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
                {(() => {
                  const direction = extractFirstDirection(
                    directions.steps[activeStep].html_instructions
                  );

                  if (direction === "left" && gender === "male") {
                    return <LeftMale />;
                  } else if (direction === "left" && gender === "female") {
                    return <LeftFemale />;
                  } else if (direction === "right" && gender === "male") {
                    return <RightMale />;
                  } else if (direction === "right" && gender === "female") {
                    return <RightFemale />;
                  } else if (direction === "stop" && gender === "male") {
                    return <StopMale />;
                  } else if (direction === "stop" && gender === "female") {
                    return <StopFemale />;
                  } else if (direction === "straight" && gender === "female") {
                    return <StraightFemale />;
                  } else if (direction === "straight" && gender === "male") {
                    return <StraightMale />;
                  }
                })()}
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
