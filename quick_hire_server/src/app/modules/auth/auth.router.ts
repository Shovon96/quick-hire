import { Router } from "express";
import { UserControllers } from "./auth.controller";
import { UserValidation } from "./auth.validation";
import { validateRequest } from "../../middlewares/checkAuth.validation";

const router = Router();

router.post(
  "/register",
  validateRequest(UserValidation.createUserValidationSchema),
  UserControllers.createUser
);

// router.post( "/login", validateRequest( authLogin ), userLogin );

// router.post( "/logout", checkAuth( UserRole.ADMIN, UserRole.DRIVER, UserRole.RIDER ), userLogout );

export const authRoute = router;