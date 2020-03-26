import { Subclass } from '../models/attributes';

export const index = async (req, res) => {
	const subclasses = await Subclass.find({});
	res.status(200).json({ subclasses });
};
