import { useEffect, useState } from "react";
import { FaMicrophone, FaPaperPlane, FaMicrophoneSlash } from "react-icons/fa";
import { useWhisper } from "@chengsokdara/use-whisper";
import { KeyboardAlt } from "@mui/icons-material";
import Fab from "@mui/material/Fab";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import NearMeIcon from "@mui/icons-material/NearMe";
import { useRouter } from "next/router";

export default function () {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [micState, setMicState] = useState(false);
  const [writingMode, setWritingMode] = useState(true);
  const router = useRouter();
  const { transcript, startRecording, stopRecording } = useWhisper({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });

  const handleMode = () => {
    // setListening(!listening);
    setWritingMode(!writingMode);
    // startRecording();
  };
  useEffect(() => {
    if (transcript.text?.includes("navigate")) {
      router.push("/use-cases/directions");
    }
    if (transcript.text?.includes("music")) {
      router.push("/use-cases/music");
    }
    if (transcript.text?.includes("exercise")) {
      router.push("/fitnesstrainer");
    }
  }, [transcript]);
  const handleMicState = async () => {
    if (!micState) {
      startRecording();
    } else {
      stopRecording();
    }
    setMicState(!micState);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleGPT = async (event) => {
    setInputValue("");
    event.preventDefault();
    const content = inputValue;
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: content }),
    });
    const data = await response.json();
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "User", content },
      { sender: "AI", content: data.text.content },
    ]);
  };

  const handleMicGPT = async () => {
    const content = transcript.text;
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: transcript.text }),
    });
    const data = await response.json();
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "User", content },
      { sender: "AI", content: data.text.content },
    ]);
  };
  return (
    <div className="chat-container">
      <div className="chat-window">
        <h1 className="chat-heading">Ossistant Chat</h1>
        <div className="messages">
          {messages.map((message, index) => (
            <p
              key={index}
              className={
                message.sender === "Ossistant" ? "ai-message" : "user-message"
              }
            >
              <strong>{message.sender}:</strong> {message.content}
            </p>
          ))}
        </div>
        <div>
          <div>
            {writingMode ? (
              <div className="input-container">
                <FaMicrophone onClick={handleMode} className="mic-button" />
                <input
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Type your message"
                  className="chat-input"
                  rows={1}
                />
                <button onClick={handleGPT} className="submit-button">
                  <FaPaperPlane />
                </button>
              </div>
            ) : (
              <div className="input-container">
                <KeyboardAlt onClick={handleMode} className="mic-button" />
                <button onClick={handleMicState} className="mic-button whisper">
                  {micState ? "Stop" : "Speak"}
                </button>
                <input
                  disabled
                  value={transcript.text}
                  className="chat-input"
                />
                <button onClick={handleMicGPT} className="submit-button">
                  <FaPaperPlane />
                </button>
              </div>
            )}
          </div>
          <div className="icons-container"></div>
        </div>
      </div>
      <div>
        <Fab
          aria-label="add"
          color="primary"
          sx={{ margin: "10px" }}
          onClick={() => router.push("/fitnesstrainer")}
        >
          <FitnessCenterIcon />
        </Fab>
        <Fab
          aria-label="add"
          color="secondary"
          sx={{ margin: "10px" }}
          onClick={() => router.push("/use-cases/music")}
        >
          <MusicNoteIcon />
        </Fab>
        <Fab
          aria-label="add"
          color="success"
          sx={{ margin: "10px" }}
          onClick={() => router.push("/use-cases/directions")}
        >
          <NearMeIcon />
        </Fab>
      </div>
    </div>
  );
}
