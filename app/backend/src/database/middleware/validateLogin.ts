import { NextFunction, Request, Response } from 'express';

const loginExists = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(400).send({
      message: 'All fields must be filled',
    });
  }
  if (!password) {
    return res.status(400).send({
      message: 'All fields must be filled',
    });
  }

  return next();
};

const isEmailValid = (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  const regexEmail = /\S+@\S+\.\S+/;

  if (!regexEmail.test(email)) {
    return res.status(400).send({
      message: '"email" must be a valid email',
    });
  }
  return next();
};

const isPasswordValid = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;

  if (password.length < 6) {
    return res.status(400).send({
      message: '"password" length must be at least 6 characters long',
    });
  }
  return next();
};

const validateLogin = {
  loginExists,
  isEmailValid,
  isPasswordValid,
};

export default validateLogin;