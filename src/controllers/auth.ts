import { Request, Response } from "express";
import { register } from "../services/auth";

const registerCtrl = async ({ body }: Request, res: Response) => {
  const response = await register(body);
  res.send(response);
};

const loginCtrl = async (req: Request, res: Response) => {};

export { loginCtrl, registerCtrl };
