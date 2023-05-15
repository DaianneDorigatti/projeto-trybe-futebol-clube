import { compare } from 'bcryptjs';
import UsersModel from '../models/UsersModel';
import getToken from '../utils/auth';

export type Login = {
  email: string;
  password: string;
};

class UsersService {
  public static async login({ email, password }: Login): Promise<string> {
    const user = await UsersModel.findOne({
      where: { email },
    });

    if (!user) {
      throw new Error('Usuário ou senha inválidos!');
    }

    const verifyPassword = await compare(password, user.password);
    if (!verifyPassword) {
      throw new Error('Senha inválida!');
    }

    const token = getToken.generateToken(user.dataValues);

    return token;
  }
}

export default UsersService;
