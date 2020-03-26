import express from 'express';
import compression from 'compression';
import cors from 'cors';
import logRequest from './middlewares/logRequest';
import * as errorHandlers from './middlewares/errorHandlers';
import userRouter from './routes/userRouter';
import authRouter from './routes/authRouter';
import attributeRouter from './routes/attributeRouter';
import characterRouter from './routes/characterRouter';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(cors({ credentials: true, origin: true }));
app.use(logRequest);

// Routes
app.use('/', authRouter);
app.use('/', attributeRouter);
app.use('/signup', userRouter);
app.use('/characters', characterRouter);

// Error handlers
app.use(errorHandlers.notFound);
app.use(errorHandlers.validationErrors);
if (app.get('env') === 'development') {
	app.use(errorHandlers.developmentErrors);
}
app.use(errorHandlers.productionErrors);

export default app;
