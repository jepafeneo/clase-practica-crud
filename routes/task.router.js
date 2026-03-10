import { Router } from "express";

const router = Router();

import {
  getTasks,
  createTask,
  getTackById,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";

router.post("/", createTask);

router.get("/", getTasks);
router.get("/:id", getTackById);

router.put("/:id", updateTask);

router.delete("/:id", deleteTask);

export default router;
