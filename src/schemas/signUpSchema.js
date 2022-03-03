import joi from "joi";

const signUpSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email({ minDomainSegments: 2 }).lowercase().required(),
  password: joi.string().required(),
  confirmPassword: joi.ref("password"),
});

export { signUpSchema };