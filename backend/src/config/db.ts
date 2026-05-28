import { connect } from "mongoose";
import { config } from "./index";

export const connectToMongo = async () => {
  try {
    await connect(config.db.uri as string);
    console.log(`connected to mongo`);
  } catch (err) {
    console.log("Can't connect to mongo", err);
  }
};
