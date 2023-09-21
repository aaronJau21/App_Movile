import bcrypt from "bcrypt";

export const bcryptPassword = (password: string) => {
  const hashPassword = bcrypt.hashSync(password, 10);

  return hashPassword;
};
