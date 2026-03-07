import { Router } from "express";
import { authRoute } from "../modules/auth/auth.router";
import { jobRoute } from "../modules/jobs/job.router";
import { applicationRoute } from "../modules/applications/applications.router";

const router = Router();

router.use("/auth", authRoute);
router.use("/jobs", jobRoute);
router.use("/applications", applicationRoute);

export { router };
