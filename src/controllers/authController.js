import { makeToken } from '../utils/tokenManager';
import User from '../models/User';

export const login = async (req, res) => {
	const { email, password } = req.body;
	let user = await User.findOne({ email }).select('_id email name +password');
	const isAuthenticated = await user?.authenticate(password);
	if (!isAuthenticated) throw new Error('Incorrect login credentials');
	res.status(201).json({ token: makeToken(user), user: { email: user.email, name: user.name } });
};
