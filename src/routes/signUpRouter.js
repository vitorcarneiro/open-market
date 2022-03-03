
import { Router } from "express";
import { signUp } from "../controllers/signUpController.js";
import { signUpSchemaValidationMiddleware } from "../middlewares/signUpValidationMiddleware.js";

const signUpRouter = Router();
signUpRouter.post("/sign-up", signUpSchemaValidationMiddleware, signUp);

export default signUpRouter;