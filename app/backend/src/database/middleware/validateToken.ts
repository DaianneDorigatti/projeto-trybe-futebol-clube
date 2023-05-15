import { NextFunction, Request, Response } from 'express';
import { validateToken } from '../utils/auth';

const authToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send({
      message: 'Token not found',
    });
  }
  const { message, type } = validateToken(authorization);

  if (type) {
    return res.status(401).send({
      message,
    });
  }
  next();
};

export default {
  authToken,
};
