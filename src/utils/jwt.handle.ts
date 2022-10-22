import { sign, verify } from "jsonwebtoken";
import { User } from "../interfaces/user.interface";

const jwt_secret = process.env.JWT_SECRET || "token.secret";

const generateToken = (id: string) => {
  const jwt = sign({ id }, jwt_secret, {
    expiresIn: "2h",
  });
  return jwt;
};

const verifyToken = async () => {};

export { generateToken, verifyToken };
