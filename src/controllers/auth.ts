import { Request, Response } from "express";
import { login, register } from "../services/auth";

const registerCtrl = async ({ body }: Request, res: Response) => {
  const response = await register(body);
  res.send(response);
};

const loginCtrl = async ({ body }: Request, res: Response) => {
  const { email, password } = body;
  const response = await login({ email, password });
  res.send(response);
};

export { loginCtrl, registerCtrl };
