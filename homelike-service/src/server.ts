import "dotenv/config";
import app from "./app";
import mongoose, { ConnectOptions } from "mongoose";
import seeder from "./config/seedDB";

const port = process.env.SERVER_PORT;
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;
const db_credentials = DB_USER && DB_PASSWORD ? DB_USER+":"+DB_PASSWORD+"@" : "";
const mongo_url = `mongodb://${db_credentials}${DB_HOST}:${DB_PORT}/`;

(async () => {
  try {
    mongoose
      .connect(mongo_url, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:false
      } as ConnectOptions)
      .then(async () => {
        await seeder();
        app.listen(port, () => {
          console.log(`🚀 The application is listening on port http://localhost:${port}/api/`);
        });
      })
      .catch((error) => {
        throw Error(`❌ Database Connection Error: ${error}`);
      });
  } catch (error) {
    throw Error(`❌ Server Connection Error: ${error}`);
  }
})();
