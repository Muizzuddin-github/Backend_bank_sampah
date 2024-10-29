import express from "express";
import ResponseErr from "../helpers/errorRes";

const errorHandling = (
  err: Error,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (!err) {
    next();
    return;
  }

  if (err instanceof ResponseErr) {
    return res.status(err.getStatus).json({ errors: err.message.split(".") });
  }

  return res.status(500).json({ errors: [err.message] });
};

export default errorHandling as (
  err: Error,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => void;
