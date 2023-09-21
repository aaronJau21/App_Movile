import User from "../model/User.model";
import { bcryptPassword } from "../utils/password";

export const registerService = async (
  name: string,
  lastname: string,
  email: string,
  password: string,
  number: string
) => {
  await User.sync();

  const repetEmail = await User.findOne({ where: { email } });

  if (repetEmail) {
    const errorMessage = {
      error: "Se repite el password",
    };

    return errorMessage;
  }

  const passwordHash = bcryptPassword(password);

  const createUser = await User.create({
    name,
    lastname,
    email,
    password: passwordHash,
    number,
  });

  return createUser;
};

