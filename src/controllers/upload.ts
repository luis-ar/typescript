import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import { RequesExt } from "../interfaces/req-ext";
import { registerUpload } from "../servicios/storage";
import { handleHttp } from "../utils/error.handle";

const getFile = async (req: RequesExt, res: Response) => {
  try {

    const {user,file}=req
    console.log(file)
    const dataRegister={
        fileName:`${file?.filename}`,
        idUser:`${user?.id}`,
        path:`${file?.path}`
    }
    const response=await registerUpload(dataRegister)
    res.send(response)
  } catch (e) {
    handleHttp(res, "ERROR_GET_BLOG");
  }
};

export { getFile };