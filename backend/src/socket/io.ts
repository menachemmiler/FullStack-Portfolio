import { io } from "../app";



io.on("connection", (socket) => {
  console.log("A user connected"); // הדפסת התחברות לקוח
  socket.on("login", () => {
    console.log(`a user is login`);
  });


  socket.on("disconnect", () => {
    console.log("A user disconnected"); // הדפסת התנתקות לקוח
  });
});
