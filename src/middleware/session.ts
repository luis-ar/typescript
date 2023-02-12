import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "../utils/jwt.handle";
import { RequesExt } from "../interfaces/req-ext";

const checkJwt = async (req: RequesExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop(); //['beader','token.......']
    const isUser = (await verifyToken(`${jwt}`).then((e) => {
      return e;
    })) as { id: string };
    if (!isUser) {
      res.status(401);
      res.send("NO TIENES UNA SESSION VALIDA");
    } else {
      //   req.user = isUser;
      req.user = isUser;
      next();
    }
  } catch (e) {
    res.status(400);
    res.send("SESSION_NO_VALIDA");
  }
};

export { checkJwt };
