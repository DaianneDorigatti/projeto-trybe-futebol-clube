import { Router } from 'express';
import TeamsController from '../controller/TeamsController';

const TeamsRouter = Router();

TeamsRouter.get('/', TeamsController.findAll);
TeamsRouter.get('/:id', TeamsController.findById);

export default TeamsRouter;
