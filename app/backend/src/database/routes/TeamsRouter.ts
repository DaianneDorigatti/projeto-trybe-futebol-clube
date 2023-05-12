import { Router } from 'express';
import TeamsController from '../controller/TeamsController';

const TeamsRouter = Router();

TeamsRouter.get('/', TeamsController.findAll);

export default TeamsRouter;
