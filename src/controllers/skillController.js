import { Skill } from '../models/attributes';

export const index = async (req, res) => {
	const skills = await Skill.find({});
	res.status(200).json({ skills });
};
