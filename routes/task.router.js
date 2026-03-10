import { Router } from "express";

const router = Router();

import {
  getTasks,
  createTask,
  getTackById,
  updateTask,
} from "../controllers/task.controller.js";

router.post("/", createTask);

router.get("/", getTasks);
router.get("/:id", getTackById);

router.put("/:id", updateTask);

export default router;
