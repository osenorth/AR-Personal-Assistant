/* 
This file is an example and reference for how you can 
leverage the transcribeAudio endpoint to convert speech 
to text.

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

export default function () {
  const [file, setFile] = useState<File | null>(null);
  const [convertedText, setConvertedText] = useState<string>("");
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const handleFile = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFile(file);
      // check if the size is less than 25MB
      if (file.size > 25 * 1024 * 1024) {
        alert("Please upload an audio file less than 25MB");
        return;
      }
    }
  };

  const sendAudio = async () => {
    console.log(file);
    if (file == null) {
      console.log("No audio file found");
      return;
    }
    const response = await fetch("/api/transcribeAudio", {
      method: "POST",
      body: JSON.stringify({
        file: file,
      }),
    });
    const data = await response.json();
    setConvertedText(data.text);
  };

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
  return (
    <div>
      <h1>Whisper</h1>
      <input type="file" accept="audio/*" onChange={handleFile} />
      <button onClick={sendAudio}>Convert</button>
      <div>{convertedText}</div>
      <br />
      <h1>ChatGPT</h1>
      <label>Enter text:</label>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleGPT}>Submit</button>
      <div>{outputValue}</div>
    </div>
  );
}
