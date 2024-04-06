import bodyParser from "body-parser";
import express from "express";
import { v1Router } from "./v1.js";

export const app = express();

app.use(bodyParser.json());
app.get("/", (_req, res) => {
  res.send("Healthy!");
});
app.use("/v1", v1Router);

export async function start(port: number | string) {
  return new Promise<{
    port: number;
    stop: () => Promise<void>;
  }>((resolve) => {
    const srv = app.listen(port, () => {
      resolve({
        port: (srv.address() as { port: number }).port,
        stop: () => new Promise((resolve) => srv.close(() => resolve())),
      });
    });
  });
}
