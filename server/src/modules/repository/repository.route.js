import { Router } from "express";
import { authenticate } from "../../middleware/auth.middleware.js";
import { create , chat, getAll, analyze, remove , getOne } from "./repository.controller.js";

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

router.get(
  "/",
  authenticate,
  getAll
);

router.post(
  "/:id/analyze",
  authenticate,
  analyze
)

router.delete(
  "/:id",
  authenticate,
  remove
)

router.post(
  "/chat",
  authenticate,
  chat
)

router.get(
  "/:id",
  authenticate,
  getOne
);

export default router;