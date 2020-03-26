import { Trait } from '../../models/attributes';

export const index = async (req, res) => {
	const traits = await Trait.find({});
	res.status(200).json({ traits });
};
