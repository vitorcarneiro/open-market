import { signInSchema } from "../schemas/signInSchema.js";

export function signInSchemaValidationMiddleware(req, res, next) {
  const user = req.body;
  const validation = signInSchema.validate(user);
  if (validation.error) {
    res.sendStatus(422);
    return;
  }

  next();
}