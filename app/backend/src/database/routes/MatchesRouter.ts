import { Router } from 'express';
import MatchesController from '../controller/MatchesController';
// import validateMatch from '../middleware/validateMatches';
import authToken from '../middleware/validateToken';

const MatchesRouter = Router();

MatchesRouter.get('/', MatchesController.findFinishedMatches);
MatchesRouter.patch('/:id/finish', authToken, MatchesController.updatingFinishMatches);
MatchesRouter.patch('/:id', authToken, MatchesController.updatingResultMatches);
// MatchesRouter.post('/', authToken, validateMatch.isMatchValid, MatchesController.createMatches);

export default MatchesRouter;
