import { NextFunction, Request, Response } from 'express';
import Teams from '../models/TeamsModel';

const isMatchValid = async (req: Request, res: Response, next: NextFunction) => {
  const { homeTeamId, awayTeamId } = req.body;

  if (homeTeamId === awayTeamId) {
    return res.status(422).send({
      message: 'It is not possible to create a match with two equal teams',
    });
  }

  const homeTeam = await Teams.findByPk(homeTeamId);
  const awayTeam = await Teams.findByPk(awayTeamId);

  if (!homeTeam || !awayTeam) {
    return res.status(404).send({
      message: 'There is no team with such id!',
    });
  }
  return next();
};

const validateMatch = {
  isMatchValid,
};

export default validateMatch;
