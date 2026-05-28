import "dotenv/config";

// אובייקט הגדרות מרכזי
export const config = {
  port: process.env.PORT || 3000,
  corsOrigin: process.env.CORS_ORIGIN || "http://localhost:3050",
  db: {
    uri:
      process.env.DB_URI ||
      "mongodb+srv://ms0556727820:gssBTd8i%40j3Gmgc@cluster0.1srxzax.mongodb.net", // ברירת מחדל לפיתוח
  },
};
