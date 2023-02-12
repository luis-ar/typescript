import StorageModel from "../models/storage";
import { Storage } from "../interfaces/storage";

const registerUpload = async ({fileName,idUser,path}:Storage) => {
  const responseItem = await StorageModel.create({fileName,idUser,path})
  return responseItem;
};

export { registerUpload };
 