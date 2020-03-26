import { Race } from '../../models/attributes';

export const index = async (req, res) => {
	const races = await Race.find({});
	res.status(200).json({ races });
};
