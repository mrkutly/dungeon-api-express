import { Router } from 'express';
import { catchError } from '../middlewares/errorHandlers';
import * as characterController from '../controllers/characterController';
import { handleValidationErrors } from '../controllers/userController';
import { checkAuthHeader } from '../middlewares/checks';

const router = new Router();

router.get('/', [
	catchError(checkAuthHeader),
	catchError(characterController.index),
]);

router.get('/:id', [
	catchError(checkAuthHeader),
	catchError(characterController.show),
]);

router.put('/:id', [
	catchError(checkAuthHeader),
	catchError(characterController.update),
]);

router.post('/', [
	catchError(checkAuthHeader),
	...characterController.validateCreateFns,
	handleValidationErrors,
	catchError(characterController.create),
]);

router.delete('/:id/equipment/:equipmentId', [
	catchError(checkAuthHeader),
	catchError(characterController.removeEquipment),
]);

router.delete('/:id/:attribute/:attributeId', [
	catchError(checkAuthHeader),
	catchError(characterController.removeAttribute),
]);

export default router;
