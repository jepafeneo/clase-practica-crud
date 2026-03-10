import { Router } from "express";

const router = Router();

import { getTasks } from "../controllers/task.controller.js";

router.get("/task", getTasks);

export default router;
