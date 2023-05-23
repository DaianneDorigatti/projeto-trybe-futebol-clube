import { Request, Response } from 'express';
import TeamsService from '../services/TeamsService';

class TeamsController {
  public static async findAll(_req: Request, res: Response) {
    const result = await TeamsService.findAll();
    res.status(200).json(result);
  }

  public static async findById(req: Request, res: Response) {
    const { id } = req.params;
    const teamById = await TeamsService.findById(+id);
    return res.status(200).json(teamById);
  }
}
export default TeamsController;
