import { Router } from 'express';
import { catchError } from '../middlewares/errorHandlers';
import * as authController from '../controllers/authController';

const router = new Router();

router.post('/login', catchError(authController.login));

export default router;
