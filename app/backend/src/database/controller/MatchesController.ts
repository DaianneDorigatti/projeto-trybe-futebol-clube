import { Request, Response } from 'express';
import MatchesService from '../services/MatchesService';

class MatchesController {
  public static async findFinishedMatches(req: Request, res: Response) {
    const { inProgress } = req.query;
    const result = await MatchesService.findFinishedMatches(inProgress);
    res.status(200).json(result);
  }

  public static async updatingMatches(req: Request, res: Response) {
    const { id } = req.params;
    await MatchesService.updatingMatches(+id);
    return res.status(200).send({
      message: 'Finished',
    });
  }
}

export default MatchesController;
