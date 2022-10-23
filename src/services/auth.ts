import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { decrypt, encrypt } from "../utils/hash.password";
import { generateToken } from "../utils/jwt.handle";

const register = async ({ email, password, name }: User) => {
  const checkIs = await UserModel.findOne({ email });
  if (checkIs) return "USER_ALREADY";

  const hashedPass = await encrypt(password);

  const register = UserModel.create({ email, password: hashedPass, name });

  return register;
};
const login = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ email });
  if (!checkIs) return "USER_NOt_FOUND";

  const passHashed = checkIs.password;
  const isCorrect = await decrypt(password, passHashed);

  if (!isCorrect) return "PASSWORD_NOT_MATCH";

  const jwt = generateToken(checkIs._id.toString());
  
  const data = {
    jwt,
    user: checkIs,
  };

  return data;
};

export { register, login };
