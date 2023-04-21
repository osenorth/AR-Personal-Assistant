import NextCors from 'nextjs-cors';
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  project: string;
};

// GET base-url/api/project
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
  res.status(200).json({ project: "Ossistent Bot" });
}
