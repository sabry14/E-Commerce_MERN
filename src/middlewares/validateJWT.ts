import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { userModel } from "../models/userModel";

const validateJWT = (req: Request, res: Response, next: NextFunction) => {
  const authorizationHeader = req.get("authorization");

  if (!authorizationHeader) {
    res.status(403).send("Authorization header was not provided");
    return;
  }

  const token = authorizationHeader.split(" ")[1];

  if (!token) {
    res.status(403).send("Bearer token not found");
    return;
  }

  jwt.verify(token, "3FDF4C8E8D49D", async (err, payload) => {
    if (err) {
      res.status(403).send("Invalid token");
      return;
    }

    if (!payload) {
      res.status(403).send("Invalid payload");
      return;
    }

    const userPayload = payload as { email: string; firstName: string; lastName: string };

    const user = await userModel.findOne({ email: userPayload.email });
    req.user = user; // ✅ now recognized everywhere
    next();
  });
};

export default validateJWT;
