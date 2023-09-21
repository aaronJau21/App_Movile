import { Request, Response } from "express";
import { registerService } from "../services/Auth.service";

export const register = async (req: Request, res: Response) => {
  const { name, lastname, email, password, number } = req.body;

  const user = await registerService(name, lastname, email, password, number);

  if ("error" in user) {
    return res.status(400).send({
      msg: user.error,
    });
  }

  return res.status(200).send({
    user,
    response: "Se creo Correctamente",
  });
};
