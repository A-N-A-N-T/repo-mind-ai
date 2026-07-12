import { Router } from "express";
import { authenticate } from "../../middleware/auth.middleware.js";
import { create , chat } from "./repository.controller.js";

const router = Router();

router.post(
  "/",
  authenticate,
  create
);

router.post(
  "/chat",
  authenticate,
  chat
);

export default router;