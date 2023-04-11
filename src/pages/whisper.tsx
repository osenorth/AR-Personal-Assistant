/* 
This file is an example and reference for how you can 
leverage the transcribeAudio endpoint to convert speech 
to text.

In order to test the functionality just load this component 
into the index.tsx file.
  <Whisper/>
*/

import { ChangeEvent, useState } from "react";

export default function () {
  const [file, setFile] = useState<File | null>(null);
  const [convertedText, setConvertedText] = useState<string>("");

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

  return (
    <div>
      <input type="file" accept="audio/*" onChange={handleFile} />
      <button onClick={sendAudio}>Convert</button>
      <div>{convertedText}</div>
    </div>
  );
}