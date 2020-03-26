import { Spell } from '../models/attributes';

export const index = async (req, res) => {
	const spells = await Spell.find({});
	res.status(200).json({ spells });
};
