import { Level } from '../models/attributes';

export const index = async (req, res) => {
	const levels = await Level.find({});
	res.status(200).json({ levels });
};
