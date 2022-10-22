import { NextFunction, Response } from "express";
import { RequestExt } from "../interfaces/requestExt";
import { verifyToken } from "../utils/jwt.handle";

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const authToken = req.headers.authorization || "";

    const jwt = authToken.split(" ").pop(); //* ['Bearer', 'jwt*****']

    //! payload
    const isUser = verifyToken(`${jwt}`);
    if (!isUser) {
      res.status(401);
      res.send("jwt not valid");
    } else {
      req.user = isUser;
      console.log(authToken);
      next();
    }
  } catch (error) {
    res.status(400);
    res.send("not_valid_session");
  }
};

export { checkJwt };
