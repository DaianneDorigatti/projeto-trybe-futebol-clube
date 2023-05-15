import { Router } from 'express';
import validateLogin from '../middleware/validateLogin';
import UsersController from '../controller/UsersController';

const LoginRouter = Router();

LoginRouter.post(
  '/',
  validateLogin.loginExists,
  validateLogin.isEmailValid,
  validateLogin.isPasswordValid,
  UsersController.login,
);

export default LoginRouter;
