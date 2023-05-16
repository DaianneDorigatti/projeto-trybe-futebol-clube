import { Router } from 'express';
import UserController from '../controller/UsersController';
import validateLogin from '../middleware/validateLogin';

const LoginRouter = Router();

LoginRouter.post(
  '/',
  validateLogin.loginExists,
  validateLogin.isEmailValid,
  validateLogin.isPasswordValid,
  UserController.login,

);

export default LoginRouter;
