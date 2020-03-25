import { Router } from 'express';
import { catchError } from '../middlewares/errorHandlers';
import * as userController from '../controllers/userController';
import { checkAuthHeader } from '../middlewares/checks';

const router = new Router();

router.post('/', [
	...userController.validateSignupFunctions,
	userController.handleValidationErrors,
	catchError(userController.signup),
]);

export default router;
