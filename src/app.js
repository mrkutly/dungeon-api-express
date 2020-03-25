import express from 'express';
import compression from 'compression';
import cors from 'cors';
import passport from 'passport';
import User from './models/User';
import logRequest from './middlewares/logRequest';
import * as errorHandlers from './middlewares/errorHandlers';
import userRouter from './routes/userRouter';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(cors({ credentials: true, origin: true }));
app.use(logRequest);

// Set up passport to use the local strategy from our schema
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(passport.initialize());

// Routes
app.use('/', userRouter);

// Error handlers
app.use(errorHandlers.notFound);
app.use(errorHandlers.validationErrors);
if (app.get('env') === 'development') {
	app.use(errorHandlers.developmentErrors);
}
app.use(errorHandlers.productionErrors);

export default app;
