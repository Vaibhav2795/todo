import { Router } from 'express';
import * as controller from './controller';

const router: Router = Router();

router.get('/getAllTodoCards', controller.getAllTodoCards);
router.post('/addTodoCard', controller.addTodoCard);

//Extra functionality
router.put('/updateTodoCard', controller.updateTodoCard);
router.post('/deleteTodoCard', controller.deleteTodoCard);

export default router;
