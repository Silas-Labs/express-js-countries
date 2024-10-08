import { configDotenv } from "dotenv";
import express from "express";
import { getAfricasCountries, setAfricasCountries } from "./routes/routes.js";
import connectDB from "./db/db.js";

configDotenv();
const app = express();

//define routes
app.get("/africa", getAfricasCountries);
app.post("africa/add", setAfricasCountries);
app.get("/africa/:country", (req, res) => {
  const { country } = req.params;

  res.status(200).send({ success: "true", data: result });
});
//app.get("/europe", getEuropesCountries);
//app.get("/asia"), getAsiasCountries;
//app.get("/america", getAmericasCountries);

app.listen(process.env.PORT || 3000, async () => {
  await connectDB();
  console.log(`Server is up on ${process.env.PORT}`);
});
