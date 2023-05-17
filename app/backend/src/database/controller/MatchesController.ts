import { Request, Response } from 'express';
import MatchesService from '../services/MatchesService';

class MatchesController {
  public static async findFinishedMatches(req: Request, res: Response) {
    const { inProgress } = req.query;
    const result = await MatchesService.findFinishedMatches(inProgress);
    res.status(200).json(result);
  }

  public static async updatingFinishMatches(req: Request, res: Response) {
    const { id } = req.params;
    await MatchesService.updatingFinishMatches(+id);
    return res.status(200).send({
      message: 'Finished',
    });
  }

  public static async updatingResultMatches(req: Request, res: Response) {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    await MatchesService.updatingResultMatches(+id, +homeTeamGoals, +awayTeamGoals);
    return res.status(200).send({
      message: 'Changes successfully',
    });
  }
}

export default MatchesController;
