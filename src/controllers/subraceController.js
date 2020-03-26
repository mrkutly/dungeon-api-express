import { Subrace } from '../models/attributes';

export const index = async (req, res) => {
	const subraces = await Subrace.find({});
	res.status(200).json({ subraces });
};
