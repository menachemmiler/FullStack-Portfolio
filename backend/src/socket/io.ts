import { Server, Socket } from 'socket.io';

// אנחנו מגדירים ש-io הוא מסוג Server ו-socket הוא מסוג Socket
export const initSocket = (io: Server) => {
  io.on('connection', (socket: Socket) => {
    console.log('A user connected:', socket.id);

    // כאן הלוגיקה שלך...

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });
};
