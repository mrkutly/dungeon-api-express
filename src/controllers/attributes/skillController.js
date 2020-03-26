import { Skill } from '../../models/attributes';

export const index = async (req, res) => {
	const data = await Skill.find({});
	res.status(200).json({ data });
};


export const show = async (req, res) => {
	const { _id } = req.params;
	const data = await Skill.findById(_id);
	res.status(200).json({ data });
};
