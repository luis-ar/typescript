import ItemModel from "../models/item";
import { Car } from "../interfaces/car.interface";

const getOrders = async () => {
  const responseItem = await ItemModel.find({ estado: true });
  return responseItem;
};

export { getOrders };
 