import { Router } from "express";
import { getOrders } from "../controllers/order";
import { checkJwt } from "../middleware/session";

const _router = Router();

_router.get("/", checkJwt, getOrders);

export { _router };
