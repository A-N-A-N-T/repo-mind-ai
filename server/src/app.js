import express from "express";
import cors from "cors";

import healthRoute from "./modules/health/health.route.js";
import authRoute from "./modules/auth/auth.route.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/health", healthRoute);
app.use("/api/auth", authRoute);

export default app;