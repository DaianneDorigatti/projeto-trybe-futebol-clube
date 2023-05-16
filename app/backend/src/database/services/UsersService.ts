import { compare } from 'bcryptjs';
import UsersModel from '../models/UsersModel';
import getToken from '../utils/auth';

export type Login = {
  email: string;
  password: string;
};

export type response = {
  message: string,
  type: string | null
};

class UsersService {
  public static async authenticateUser(email: string, password: string): Promise<response> {
    const user = await UsersModel.findOne({
      where: { email },
    });

    if (!user) {
      return { message: 'Invalid email or password', type: 'INVALID_USER' };
    }

    const verifyPassword = await compare(password, user.password);
    if (!verifyPassword) {
      return { message: 'Invalid email or password', type: 'INVALID_PASSWORD' };
    }

    const token = getToken.generateToken(user.dataValues);

    return { message: token, type: null };
  }
}

export default UsersService;
