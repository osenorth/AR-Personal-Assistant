import React, { useState, useEffect } from "react";
import * as promptGPT from "./prompts";
import Fab from "@mui/material/Fab";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

export default function ({ mapState, updateMapState }) {
  const [open, setOpen] = useState(false);
  const [startDesc, setStartDesc] = useState("Loading...");
  const [endDesc, setEndDesc] = useState("Loading...");
  const [journeyDesc, setJourneyDesc] = useState("Loading...");
  const router = useRouter();
  const [speech, setSpeech] = useState(window.speechSynthesis);

  useEffect(() => {
    if (router.isReady) {
      setSpeech(window.speechSynthesis);
    }
  }, [router.isReady]);

  const handleClose = () => {
    setOpen(false);
  };

  // const speak = (speechText) => {
  //   const object = new SpeechSynthesisUtterance(speechText);
  //   object.lang = "en-US";
  //   speech.speak(object);
  // };

  const askGPT = async (start, end) => {
    setOpen(true);
    const starting = await promptGPT.locationGPT(start);
    const ending = await promptGPT.locationGPT(end);
    const journey = await promptGPT.journeyGPT(start, end);
    setStartDesc(starting);
    setEndDesc(ending);
    setJourneyDesc(journey);
  };

  const handleButtonClick = () => {
    router.push("/chat"); // Redirect to '/other-page'
  };

  // const AccordianChange = () => {
  //   speak(endDesc);
  // };
  return (
    <>
      <Box
        sx={{
          border: "1px solid black",
          alignContent: "center",
          borderRadius: "10%",
          position: "fixed",
          bottom: 5,
          left: 5,
          width: 60,
          height: 60,
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999, // Ensure the button stays on top of other content
        }}
      >
        <Fab
          aria-label="add"
          color="primary"
          onClick={() => askGPT(mapState.start, mapState.destination)}
        >
          <AutoAwesomeIcon />
        </Fab>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "90vw",
            height: "80vh",
            bgcolor: "background.paper",
            border: "2px solid black",
            boxShadow: 24,
            p: 2,
            overflow: "scroll",
          }}
        >
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Know more about {mapState.start}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{startDesc}</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Know more about {mapState.destination}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{endDesc}</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>Explore for your journey</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{journeyDesc}</Typography>
            </AccordionDetails>
          </Accordion>
          <Button onClick={handleButtonClick}>Ask more to Ossistant</Button>
        </Box>
      </Modal>
    </>
  );
}
