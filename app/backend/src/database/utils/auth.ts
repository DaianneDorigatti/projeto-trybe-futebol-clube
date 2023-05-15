import { SignOptions } from 'jsonwebtoken';
import jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET || 'jwt_secret';

const configJWT: SignOptions = {
  expiresIn: '2d',
  algorithm: 'HS256',
};

const generateToken = (payload: string) => {
  const token = jwt.sign(payload, secretKey, configJWT);
  return token;
};

const validateToken = (token:string) => {
  try {
    const jwtPayload = jwt.verify(token, secretKey);
    return { message: jwtPayload, type: null };
  } catch (err) {
    return { message: 'Expired or invalid token', type: 'INVALID_TOKEN' };
  }
};

const getToken = {
  generateToken,
  validateToken,
};

export default getToken;
