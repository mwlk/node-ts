import { Router, Request, Response } from "express";
import {
  addItem,
  deleteItem,
  getItem,
  getItems,
  updateItem,
} from "../controllers/item";
import { logMiddleware } from "../middleware/log";

const _router = Router();

_router.get("/", getItems);
_router.get("/:id", logMiddleware, getItem);
_router.post("/", addItem);
_router.put("/:id", updateItem);
_router.delete("/:id", deleteItem);

export { _router };
