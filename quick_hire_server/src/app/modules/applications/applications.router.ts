import { Router } from "express";
import { ApplicationsControllers } from "./applications.controller";
import { ApplicationValidation } from "./applications.validation";
import { validateRequest } from "../../middlewares/validationRequest";

const router = Router();

router.post(
  "/",
  validateRequest(ApplicationValidation.createApplicationValidationSchema),
  ApplicationsControllers.submitApplication
);

router.get("/:userId", ApplicationsControllers.getUserApplications);

router.get("/detail/:id", ApplicationsControllers.getApplicationById);

export const applicationRoute = router;
