import User from '../models/User';

export const checkAuthHeader = async (req, res, next) => {
	const token = req.headers.authorization;
	if (!token) throw new Error('Missing authorization header');
	const user = await User.fromToken(token);
	if (!user) throw new Error('Invalid authorization header');
	req.user = user;
	next();
};
