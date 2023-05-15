import { NextFunction, Request, Response } from 'express';
import UsersService from '../services/UsersService';

class UserController {
  public static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const token = await UsersService.login(req.body);

      res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }
}
export default UserController;
