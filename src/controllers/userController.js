import { body, validationResult } from 'express-validator';
import { makeToken } from '../utils/tokenManager';
import User from '../models/User';

export const validateSignupFunctions = [
	body('name'),
	body('name').notEmpty().withMessage('A name is required.'),
	body('email').isEmail().withMessage('That Email is not valid.'),
	body('email').normalizeEmail({
		gmail_remove_dots: false,
		remove_extension: false,
		gmail_remove_subaddress: false,
	}),
	body('password').notEmpty().withMessage('Password cannot be blank.'),
	body('confirmPassword').exists().custom((value, { req }) => value === req.body.password),
];

export const handleValidationErrors = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		res.status(400).json(errors);
		return; // stop the fn from running
	}
	next();
};

export const signup = async (req, res) => {
	const { name, password, email } = req.body;

	if (!name || !password) throw new Error('Username and password required.');

	const user = new User({ name, email, password });
	await user.save();

	const token = makeToken(user);
	res.status(201).json({ token, user: { name, email } });
};
