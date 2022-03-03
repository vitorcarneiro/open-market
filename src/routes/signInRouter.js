import { Router } from "express";
import { signIn } from "../controllers/signInController.js";
import { signInSchemaValidationMiddleware } from "../middlewares/signInValidationMiddleware.js";

const signInRouter = Router();
signInRouter.post("/sign-in", signInSchemaValidationMiddleware, signIn);

export default signInRouter;