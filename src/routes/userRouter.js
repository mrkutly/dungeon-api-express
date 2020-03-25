import { Router } from 'express';
import { catchError } from '../middlewares/errorHandlers';
import * as userController from '../controllers/userController';

const router = new Router();

router.post('/signup', [
	...userController.validateSignupFunctions,
	userController.handleValidationErrors,
	catchError(userController.signup),
]);

export default router;
