/* 
Not used currently. There are some troubles which handling the 
audio file in the server for creating readStream. So, Whisper is 
handled from client side leveraging direct openAI API endpoint.

TODO: We need to fix this endpoint for dealing with formData 
and create ReadStream and then we shall handle the queries on 
server side.
*/
import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import * as fs from "fs";
const { Configuration, OpenAIApi } = require("openai");

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
    const file: string = req.body;
    console.log(file);
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const resp = await openai.createTranscription(
      fs.createReadStream("location-of-file-goes-here"),
      "whisper-1"
    );
    res.status(200).json({ text: resp.data.text });
  } else {
    res.status(405).json({ text: "Method not allowed" });
  }
}
