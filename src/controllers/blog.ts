import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";

const getItem = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_BLOG");
  }
};

const getItems = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_ALL_BLOGS");
  }
};

const updateItem = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_UPD_BLOG");
  }
};

const addItem = (req: Request, res: Response) => {
  try {
    console.log(req.body);
  } catch (e) {
    handleHttp(res, "ERROR_POST_BLOG");
  }
};
const deleteItem = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_BLOG");
  }
};

export { getItem, getItems, updateItem, addItem, deleteItem };
