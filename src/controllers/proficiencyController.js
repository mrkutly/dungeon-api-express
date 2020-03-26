import { Proficiency } from '../models/attributes';

export const index = async (req, res) => {
	const proficiencies = await Proficiency.find({});
	res.status(200).json({ proficiencies });
};
