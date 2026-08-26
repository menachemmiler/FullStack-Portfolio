import "dotenv/config";

// אובייקט הגדרות מרכזי
export const config = {
  port: process.env.PORT || 4000,
  corsOrigin: process.env.CORS_ORIGIN || "http://localhost:3050",
  db: {
    uri:
      process.env.DB_URI ||
      "mongodb+srv://ms0556727820_db_user:35jfWOEz7VJxcnwW@cluster0.a62e1qq.mongodb.net", // ברירת מחדל לפיתוח
  },
};
