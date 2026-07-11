import express from "express";
import cors from "cors";

import healthRoute from "./modules/health/health.route.js";
import authRoute from "./modules/auth/auth.route.js";
import repositoryRoute from "./modules/repository/repository.route.js";
import { authenticate } from "./middleware/auth.middleware.js";
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/health", healthRoute);
app.use("/api/auth", authRoute);

app.use("/api/repositories",repositoryRoute);

export default app;