import { MagicSchool } from '../../models/attributes';

export const index = async (req, res) => {
	const magicSchools = await MagicSchool.find({});
	res.status(200).json({ magicSchools });
};
