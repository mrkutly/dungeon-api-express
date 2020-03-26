import { Router } from 'express';
import { catchError } from '../middlewares/errorHandlers';
import * as characterController from '../controllers/characterController';
import { handleValidationErrors } from '../controllers/userController';
import { checkAuthHeader } from '../middlewares/checks';

const router = new Router();

router.post('/', [
	catchError(checkAuthHeader),
	...characterController.validateCreateFns,
	handleValidationErrors,
	catchError(characterController.create),
]);

export default router;
