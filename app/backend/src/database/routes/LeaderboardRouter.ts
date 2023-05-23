import { Router } from 'express';
import LeaderboardController from '../controller/LeaderboardController';

const LeaderboardRouter = Router();

LeaderboardRouter.get('/home', LeaderboardController.findAllHome);

export default LeaderboardRouter;
