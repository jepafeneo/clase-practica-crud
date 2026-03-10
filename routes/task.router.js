import { Router } from "express";

const router = Router();

import Task from "../models/Task.js";

router.get("/task", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

export default router;
