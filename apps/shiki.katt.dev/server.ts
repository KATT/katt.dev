import { start } from "./server/app.js";

const port = process.env.PORT ?? 3001;

start(port)
  .then((it) => {
    return console.log(`Shiki Service listening on port ${port}!`);
  })
  .catch(async (e) => {
    console.log(e);
    process.exit(1);
  });
