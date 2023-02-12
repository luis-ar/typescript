import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { RequesExt } from "../interfaces/req-ext";
import { handleHttp } from "../utils/error.handle";

const getItems = (req: RequesExt, res: Response) => {
  try {
    res.send({
        data:'esto solo lo ve las personas con session activada/jwt',
        user:req.user
    })
  } catch (error) {
    handleHttp(res, "ERROR_GET_BLOGS");
  }
};

export { getItems };
