import express from "express";
import cors from "cors";
import "dotenv/config";
import usersController from "./controllers/users";
import productsController from "./controllers/projects";
import { connectToMongo } from "./config/db";

const PORT = process.env.PORT || 3000;

import http from "http";
import { Server } from "socket.io";

const app = express();
connectToMongo();

const server = http.createServer(app);

export const io = new Server(server, {
  cors: {
    origin: "http://localhost:3050", // כתובת הלקוח
    methods: "*",
  },
});
import "./socket/io"; //מייבא את הקובץ של הסוקטים

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3050",
    credentials: true,
  })
);

app.use("/api/users", usersController);

app.use("/api/projects", productsController);

server.listen(PORT, () => {
  console.log(`Server started, Visit "http://localhost:${PORT}"`);
});
