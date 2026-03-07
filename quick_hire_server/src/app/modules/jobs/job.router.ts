import { Router } from "express";
import { JobsControllers } from "./job.controller";
import { JobValidation } from "./job.validation";
import { validateRequest } from "../../middlewares/validationRequest";

const router = Router();

router.get("/", JobsControllers.getAllJobs);

router.get("/:id", JobsControllers.getJobById);

router.post(
  "/",
  validateRequest(JobValidation.createJobValidationSchema),
  JobsControllers.createJob
);

export const jobRoute = router;