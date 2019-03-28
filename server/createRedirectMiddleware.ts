import * as express from 'express';

export type IExpressMiddleware = (
  req: express.Request,
  res: express.Response,
  next?: express.NextFunction,
  error?: Error,
) => void;

export function createRedirectMiddleware({
  config,
  hostname,
}: {
  hostname: string;
  config: {
    alias: string[];
  };
}): IExpressMiddleware {
  if (typeof config !== 'object' || !Array.isArray(config.alias)) {
    throw new Error(`Couldn't load redirects`);
  }
  const aliases = new Set(config.alias);

  return (req, res, nextFn) => {
    if (req.hostname === hostname || !aliases.has(req.hostname)) {
      nextFn();
      return;
    }
    const uri = new URL(req.url);
    uri.hostname = hostname;

    res.redirect(301, uri.href);
  };
}
