/* 
This file is an example and reference for how you can 
convert speech to text.

In order to test the functionality just load this component 
into the index.tsx file.
  <Whisper/>
*/

/*
The working demo of OpenAI prompts for GPT-3.5 models is 
also now included into this demo file itself. 
It should hit /api/chat endpoint.
*/
import { ChangeEvent, SetStateAction, useState } from "react";
import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export default function () {
  // ChatGPT
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
  };

  const handleGPT = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: inputValue }),
    });
    const data = await response.json();
    setOutputValue(data.text.content);
    setInputValue("");
  };

  // Speech Recognition
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  return (
    <div>
      <div>
        <h1>ChatGPT</h1>
        <label>Enter text:</label>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleGPT}>Submit</button>
        <div>{outputValue}</div>
      </div>
      <div>
        <h1>Speech to Text</h1>
        <p>Microphone: {listening ? "on" : "off"}</p>
        <button onClick={() => SpeechRecognition.startListening()}>
          Start
        </button>
        <button onClick={() => SpeechRecognition.stopListening()}>Stop</button>
        <button onClick={() => resetTranscript()}>Reset</button>
        <p>{transcript}</p>
      </div>
    </div>
  );
}
