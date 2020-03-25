/* eslint-disable no-unused-vars */
import Logger from '../utils/Logger';

export const catchError = (fn) => (req, res, next) => fn(req, res, next).catch(next);

export const notFound = (req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
};

export const validationErrors = (err, req, res, next) => {
	if (!err.errors) return next(err);
	const errorKeys = Object.keys(err.errors);
	const messages = errorKeys.map((key) => err.errors[key].message);
	res.status(400).json({ errors: messages });
};

export const developmentErrors = (err, req, res, next) => {
	err.stack = err.stack || '';
	Logger.warn(err.stack);
	res.status(err.status || 500).json({ error: JSON.stringify(err.stack, null, 2) });
};

export const productionErrors = (err, req, res, next) => {
	Logger.warn(err.stack);
	res.status(err.status || 500).json({ error: err.message });
};
