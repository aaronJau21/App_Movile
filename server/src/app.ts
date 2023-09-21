import express, { json, urlencoded } from "express";
import "dotenv/config";
import morgan from "morgan";

import Authrouter from "./router/auth.router";

export const port = process.env.PORT;
export const app = express();

app.use(morgan("dev"));
app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/api", Authrouter);
