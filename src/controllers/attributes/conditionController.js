import { Condition } from '../../models/attributes';

export const index = async (req, res) => {
	const conditions = await Condition.find({});
	res.status(200).json({ conditions });
};
