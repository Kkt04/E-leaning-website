import express from "express";
import { getCourse } from "../course.controller";

const router = express.Router();
router.get("/", getCourse);

export default router;