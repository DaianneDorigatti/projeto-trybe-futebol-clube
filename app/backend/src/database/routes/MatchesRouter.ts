import { Router } from 'express';
import MatchesController from '../controller/MatchesController';
import validateMatch from '../middleware/validateMatches';
import authToken from '../middleware/validateToken';

const MatchesRouter = Router();

MatchesRouter.get('/', MatchesController.findFinishedMatches);
MatchesRouter.post('/', authToken, validateMatch.isMatchValid, MatchesController.createMatches);
MatchesRouter.patch('/:id/finish', authToken, MatchesController.updatingFinishMatches);
MatchesRouter.patch('/:id', authToken, MatchesController.updatingResultMatches);

export default MatchesRouter;
