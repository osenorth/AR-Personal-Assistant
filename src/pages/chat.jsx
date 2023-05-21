import { ChangeEvent, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { FaMicrophone, FaPaperPlane } from "react-icons/fa";
import { HiOutlineEllipsisHorizontal } from "react-icons/hi2";
import { TbRobot } from "react-icons/tb";
import Link from "next/link";

export default function () {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [showPalette, setShowPalette] = useState(false);

  const handleInputChange = (event) => {
    console.log("handled");
    setInputValue(event.target.value);
  };

  const handleGPT = async (event) => {
    event.preventDefault();
    const content = showPalette ? transcript : inputValue;
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
    setInputValue("");
    resetTranscript();
  };

  // Speech Recognition
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  const handleMicButtonClick = () => {
    setShowPalette(!showPalette);
    if (!listening) {
      SpeechRecognition.startListening();
    } else {
      SpeechRecognition.stopListening();
    }
  };

  const handlePopup = () => {
    console.log("clicked");
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
        <div className="input-container">
          {listening ? (
            <button onClick={handleMicButtonClick} className="mic-button">
              <HiOutlineEllipsisHorizontal />
            </button>
          ) : (
            <button onClick={handleMicButtonClick} className="mic-button">
              <FaMicrophone />
            </button>
          )}
          <textarea
            value={showPalette ? transcript : inputValue}
            onChange={handleInputChange}
            placeholder="Type your message"
            className="chat-input"
            rows={1}
          />
          <div className="icons-container">
            <button onClick={handleGPT} className="submit-button">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
      <Link className="rounded-popup" href={"test"}>
        <TbRobot />
      </Link>
    </div>
  );
}