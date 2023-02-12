import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface RequesExt extends Request {
  // user?: string | JwtPayload | { id: string };
  user?: JwtPayload | { id: string };
}
