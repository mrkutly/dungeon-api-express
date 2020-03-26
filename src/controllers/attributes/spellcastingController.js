import { Spellcasting } from '../../models/attributes';

export const index = async (req, res) => {
	const spellcastings = await Spellcasting.find({});
	res.status(200).json({ spellcastings });
};
