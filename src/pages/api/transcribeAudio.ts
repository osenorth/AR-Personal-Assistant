import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";

type Data = {
  text: String;
};

// GET base-url/api/transcribeAudio
// POST base-url/api/transcribeAudio | body {formData - (file,model,language)}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const { method, body } = req;
  if (method === "GET") {
    res
      .status(200)
      .json({ text: "This endpoint is for Speech-to-Text conversion" });
  } else if (method === "POST") {
    const { file } = JSON.parse(body);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("model", "whisper-1");
    formData.append("language", "en");

    // Limit the audio file size to 25MB
    if (file.size > 25 * 1024 * 1024) {
      res
        .status(400)
        .json({ text: "Please upload an audio file less than 25MB" });
      return;
    }
    const response = await fetch(
      "https://api.openai.com/v1/audio/transcriptions",
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    console.log(data);
    res.status(200).json({ text: "Whisper Generated text as output" });
  } else {
    res.status(405).json({ text: "Method not allowed" });
  }
}
