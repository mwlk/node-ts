import { hash } from "bcryptjs";

const encrypt = async (password: string) => {
  const hashPassword = await hash(password, 8);
  return hashPassword;
};

const decrypt = () => {};

export { encrypt, decrypt };
