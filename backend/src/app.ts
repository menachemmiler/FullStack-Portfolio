import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import { connectToMongo } from './config/db';
import productsController from './routes/projects';
import usersController from './routes/users';

const PORT = process.env.PORT || 3000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:3050';

import http from 'http';
import { Server } from 'socket.io';
import './socket/io'; //מייבא את הקובץ של הסוקטים

const app = express();
connectToMongo();

const server = http.createServer(app);

export const io = new Server(server, {
  cors: {
    origin: CORS_ORIGIN,
    methods: '*',
  },
});

app.use(express.json());
app.use(
  cors({
    origin: [CORS_ORIGIN, 'http://localhost:3050'],
    credentials: true,
  }),
);

app.use('/api/users', usersController);

app.use('/api/projects', productsController);

server.listen(PORT, () => {
  console.log(`Server started, Visit "http://localhost:${PORT}"`);
});
