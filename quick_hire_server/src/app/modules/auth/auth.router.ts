import { Router } from "express";
import { UserControllers } from "./auth.controller";
import { UserValidation } from "./auth.validation";
import { validateRequest } from "../../middlewares/validationRequest";

const router = Router();

router.post(
  "/register",
  validateRequest(UserValidation.createUserValidationSchema),
  UserControllers.createUser
);

router.post( "/login", validateRequest( UserValidation.loginValidationSchema ), UserControllers.userLogin );

router.post( "/logout", UserControllers.userLogOut );

export const authRoute = router;