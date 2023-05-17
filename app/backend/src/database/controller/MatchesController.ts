import { Request, Response } from 'express';
import MatchesService from '../services/MatchesService';

class MatchesController {
  public static async findAll(req: Request, res: Response) {
    const { inProgress } = req.query;
    const result = await MatchesService.findAll(inProgress);
    res.status(200).json(result);
  }

  public static async matchesFinished(req: Request, res: Response) {
    const { id } = req.params;
    const result = await MatchesService.findMatchFinished(+id);
    res.status(200).json(result);
  }
}

export default MatchesController;
