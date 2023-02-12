import { Request, response, Response } from "express";
import {
  deleteCar,
  getCar,
  getCars,
  insertCar,
  updateCar,
} from "../servicios/item";
import { handleHttp } from "../utils/error.handle";

const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await getCar(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const responseItem = await getCars();
    res.send(responseItem);
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEMS");
  }
};
const updateItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const  body  = req.body;
    const responseItem = await updateCar(id, body);
    res.send(responseItem);
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_ITEM");
  }
};
const postItem = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertCar(body);
    res.send(responseItem);
  } catch (error) {
    handleHttp(res, "ERROR_POST_ITEM", error);
  }
};
const deleteItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const responseItem = await deleteCar(id);
    res.send({ responseItem, msg: `El modelo con el id ${id}: fue eliminado` });
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_ITEM", error);
  }
};

export { getItem, getItems, updateItem, postItem, deleteItem };
