import { Request, Response } from 'express';
import UsersService from '../services/UsersService';

class UserController {
  public static async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const { message, type } = await UsersService.authenticateUser(email, password);
    if (type) return res.status(401).json({ message });
    return res.status(200).json({ token: message });
  }

  public static async getUserRole(req: Request, res: Response) {
    // https://expressjs.com/en/api.html - res.locals(variável global)

    const { role } = res.locals.user;
    return res.status(200).json({ role });
  }
}

export default UserController;
