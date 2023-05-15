import { Router } from 'express';
import MatchesController from '../controller/MatchesController';

const MatchesRouter = Router();

MatchesRouter.get('/', MatchesController.findAll);

export default MatchesRouter;
