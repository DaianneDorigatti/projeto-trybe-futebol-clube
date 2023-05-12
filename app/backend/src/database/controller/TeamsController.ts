import { NextFunction, Request, Response } from 'express';
import TeamsService from '../services/TeamsService';

class TeamsController {
  public static async findAll(_req: Request, res: Response) {
    const result = await TeamsService.findAll();
    res.status(200).json(result);
  }

  public static async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const teamById = await TeamsService.findById(+id);

      return res.status(200).json(teamById);
    } catch (error) {
      next(error);
    }
  }
}
export default TeamsController;
