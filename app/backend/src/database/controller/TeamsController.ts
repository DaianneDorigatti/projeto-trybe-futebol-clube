import { Request, Response } from 'express';
import TeamsService from '../services/TeamsService';

class TeamsController {
  public static async findAll(_req: Request, res: Response) {
    const result = await TeamsService.findAll();
    res.status(200).json(result);
  }
}
export default TeamsController;
