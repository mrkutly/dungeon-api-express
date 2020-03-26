import { Monster } from '../models/attributes';

export const index = async (req, res) => {
	const monsters = await Monster.find({});
	res.status(200).json({ monsters });
};
