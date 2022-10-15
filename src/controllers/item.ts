import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";

const getItem = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

const getItems = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_ALL_ITEMS");
  }
};

const updateItem = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_UPD_ITEM");
  }
};

const addItem = (req: Request, res: Response) => {
  try {
    console.log(req.body);
  } catch (e) {
    handleHttp(res, "ERROR_POST_ITEM");
  }
};
const deleteItem = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_ITEM");
  }
};

export { getItem, getItems, updateItem, addItem, deleteItem };
