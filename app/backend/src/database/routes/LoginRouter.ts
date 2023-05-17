import { Router } from 'express';
import UserController from '../controller/UsersController';
import validateLogin from '../middleware/validateLogin';
import authToken from '../middleware/validateToken';

const LoginRouter = Router();

LoginRouter.post(
  '/',
  validateLogin.loginExists,
  validateLogin.isEmailValid,
  validateLogin.isPasswordValid,
  UserController.login,
);

LoginRouter.get(
  '/role',
  authToken,
);

export default LoginRouter;
