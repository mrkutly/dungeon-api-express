import { CharacterClass } from '../models/attributes';

export const index = async (req, res) => {
	const classes = await CharacterClass.find({});
	res.status(200).json({ classes });
};
