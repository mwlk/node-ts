import { Request, Response } from "express";
import { RequestExt } from "../interfaces/requestExt";
import { handleHttp } from "../utils/error.handler";

const getOrders = (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: "only with session",
      user: req.user,
    });
  } catch (e) {
    handleHttp(res, "ERROR_GET_ALL_BLOGS");
  }
};

export { getOrders };
