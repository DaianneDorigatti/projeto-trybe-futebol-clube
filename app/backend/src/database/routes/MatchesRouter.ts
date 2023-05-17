import { Router } from 'express';
import MatchesController from '../controller/MatchesController';
import authToken from '../middleware/validateToken';

const MatchesRouter = Router();

MatchesRouter.get('/', MatchesController.findFinishedMatches);
MatchesRouter.patch('/:id/finish', authToken, MatchesController.updatingFinishMatches);
MatchesRouter.patch('/:id', authToken, MatchesController.updatingResultMatches);

export default MatchesRouter;
