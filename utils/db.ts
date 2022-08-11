import { Database, DataTypes, Model, PostgresConnector } from "denoDb";

// const connection = new PostgresConnector({
//   host: "...",
//   username: "user",
//   password: "password",
//   database: "airlines",
// });

// const db = new Database(connection);

// class Flight extends Model {
//   static table = "flights";
//   static timestamps = true;

//   static fields = {
//     id: { primaryKey: true, autoIncrement: true },
//     departure: DataTypes.STRING,
//     destination: DataTypes.STRING,
//     flightDuration: DataTypes.FLOAT,
//   };

//   static defaults = {
//     flightDuration: 2.5,
//   };
// }

// db.link([Flight]);

// await db.sync({ drop: true });
