import { Request, Response } from 'express';
import LeaderboardService from '../services/LeaderboardService';

class LeaderboardController {
  public static async findAllHome(_req: Request, res: Response) {
    const result = await LeaderboardService.findAllHome();
    res.status(200).json(result);
  }
}
export default LeaderboardController;
