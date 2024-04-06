import bodyParser from "body-parser";
import express from "express";
import { v1Router } from "./server/v1.js";

const app = express();
const port = process.env.PORT ?? 3001;

app.use(bodyParser.json());

app.get("/", (_req, res) => {
  res.send("Healthy!");
});

app.use("/v1", v1Router);

const start = async () => {
  app.listen(port, () =>
    console.log(`Shiki Service listening on port ${port}!`)
  );
};

start().catch(async (e) => {
  console.log(e);
  process.exit(1);
});
