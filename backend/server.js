import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import connectDB from "./config/db.js";
import contactRoutes from "./routes/contact.js";
import chatbotRoutes from "./routes/chatbot.js";
import errorHandler from "./middleware/errorHandler.js";

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

/* ===============================
   SECURITY MIDDLEWARE
================================ */
app.use(helmet());

/* ===============================
   CORS CONFIGURATION (VERY IMPORTANT)
   Must come BEFORE rate limiting
================================ */
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://portfolio-website-tau-bice.vercel.app", // Vercel frontend
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests without origin (Postman, curl, mobile apps)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.log("❌ CORS blocked origin:", origin);
      return callback(null, false);
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

// Handle preflight requests
app.options("*", cors());

/* ===============================
   BODY PARSERS
================================ */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ===============================
   RATE LIMITING (AFTER CORS)
================================ */
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  standardHeaders: true,
  legacyHeaders: false
});

app.use("/api", limiter);

/* ===============================
   ROUTES
================================ */
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio API is running",
    environment: process.env.NODE_ENV || "development"
  });
});

app.use("/api/contact", contactRoutes);
app.use("/api/chatbot", chatbotRoutes);

/* ===============================
   ERROR HANDLING
================================ */
app.use(errorHandler);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

/* ===============================
   START SERVER
================================ */
app.listen(PORT, () => {
  console.log(
    `🚀 Server running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`
  );
});

export default app;
