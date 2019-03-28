import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import next from 'next';
import nowConfig from '../now.json';
import { createRedirectMiddleware } from './createRedirectMiddleware';

const port = parseInt(process.env.PORT, 10) || 5000;

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(
    createRedirectMiddleware({
      hostname: 'kattcorp.com',
      config: nowConfig,
    }),
  );

  server.use(cookieParser());
  server.use(bodyParser.urlencoded({ extended: false }));

  server.get('*', (req, res) => {
    handle(req, res);
  });

  server.listen(port, (err?: any) => {
    if (err) {
      throw err;
    }

    // tslint:disable-next-line:no-console
    console.log(`> ✅  Web App is running on http://localhost:${port}`);
  });
});
