import NextCors from "nextjs-cors";

// GET base-url/api/direction
export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  const { method, body } = req;
  const origin = body.origin;
  const destination = body.destination;
  console.log(origin,destination);
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${process.env.NEXT_PUBLIC_GOOGLE_CLOUD_API_KEY}`
  );
//   console.log(response);
  const data = await response.json();
  console.log(data);
  res.status(200).json({ direction: data });
}
