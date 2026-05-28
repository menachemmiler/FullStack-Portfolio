import cors from "cors";
import "dotenv/config";
import { config } from "./config/index";
import express from "express";
import { connectToMongo } from "./config/db";
import productsController from "./routes/projects";
import usersController from "./routes/users";

import http from "http";
import { Server } from "socket.io";
import { initSocket } from "./socket/io";

const app = express();
connectToMongo();

const server = http.createServer(app);

export const io = new Server(server, {
  cors: {
    origin: config.corsOrigin,
    methods: "*",
  },
});

initSocket(io);

app.use(express.json());
app.use(
  cors({
    origin: [config.corsOrigin, "http://localhost:3050"],
    credentials: true,
  }),
);

app.use("/health", (req, res) => {
  res.status(200).send("OK");
});

app.use("/api/users", usersController);

app.use("/api/projects", productsController);

server.listen(config.port, () => {
  console.log(`Server started, Visit "http://localhost:${config.port}"`);
});
