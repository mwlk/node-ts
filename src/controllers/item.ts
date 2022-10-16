import { Request, Response } from "express";
import {
  deleteCar,
  getCarDetail,
  getCars,
  insertCar,
  updateCar,
} from "../services/item";
import { handleHttp } from "../utils/error.handler";

const getItem = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const response = await getCarDetail(id);
    const data = response ? response : `Not Found Car ${id}`;

    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCars();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ALL_ITEMS");
  }
};

const updateItem = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateCar(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPD_ITEM");
  }
};

const addItem = async (req: Request, res: Response) => {
  try {
    // console.log(req.body);
    const response = await insertCar(req.body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_POST_ITEM", e);
  }
};
const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteCar(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_ITEM", e);
  }
};

export { getItem, getItems, updateItem, addItem, deleteItem };
