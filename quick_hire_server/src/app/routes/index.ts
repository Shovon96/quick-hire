import { Router } from "express";
import { authRoute } from "../modules/auth/auth.router";
import { jobRoute } from "../modules/jobs/job.router";

const router = Router();

router.use("/auth", authRoute);
router.use("/jobs", jobRoute);

export { router };
