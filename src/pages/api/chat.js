import NextCors from "nextjs-cors";
const { Configuration, OpenAIApi } = require("openai");

// GET base-url/api/chat
// POST base-url/api/chat | body { text: inputValue }
export default async function handler(req, res) {
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
      .json({ text: "This endpoint is for conversation with GPT-3.5 turbo\n" });
  } else if (method === "POST") {
    const message = req.body.text;

    const configuration = new Configuration({
      apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });

    const response = completion.data.choices[0].message;
    res.status(200).json({ text: response });
  } else {
    res.status(405).json({ text: "Method not allowed" });
  }
}