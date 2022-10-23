import { compare, hash } from "bcryptjs";

const encrypt = async (password: string) => {
  const hashPassword = await hash(password, 8);
  return hashPassword;
};

const decrypt = async (pass: string, hashed: string) => {
  const isCorrect = await compare(pass, hashed);
  return isCorrect;
};

export { encrypt, decrypt };
