import { Router } from "express";
import { loginCtrl, registerCtrl } from "../controllers/auth";

const _router = Router();

_router.post("/register", registerCtrl);
_router.post("/login", loginCtrl);

export { _router };
