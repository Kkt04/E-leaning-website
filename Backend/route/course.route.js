import express from "express";
import { getCourse } from "../controller/course.controller";

const router = express.Router();
router.get("/", getCourse);

export default router;