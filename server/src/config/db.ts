import { Sequelize, Dialect } from "sequelize";

const name_data = process.env.NAME_DB as string;
const user_db = process.env.USER_DB as string;
const password_db = process.env.PASSWORD_DB as string;
const host_db = process.env.HOST_DB as string;
const dialect_db = process.env.DIALECT_EB as Dialect;
const port_db = parseInt(process.env.PORT_DB as string);

export const sequelize = new Sequelize(name_data, user_db, password_db, {
  host: host_db,
  dialect: dialect_db,
  port: port_db,
});

// export const connect = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// };
