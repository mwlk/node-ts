import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt } from "../utils/hash.password";

const register = async ({ email, password, name }: User) => {
  const checkIs = await UserModel.findOne({ email });
  if (checkIs) return "USER_ALREADY";

  const hashedPass = await encrypt(password);

  const register = UserModel.create({ email, password: hashedPass, name });

  return register;
};
const login = async () => {};

export { register, login };
