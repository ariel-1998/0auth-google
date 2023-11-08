import { NextFunction, Response, Request } from "express";

export const protectRoute = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.user) return next();
  res.status(401).json("User not logged in!");
};
