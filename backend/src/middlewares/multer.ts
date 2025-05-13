import multer from "multer";

const storage = multer.memoryStorage(); // לא שומר קובץ בדיסק
export const upload = multer({ storage });