import { Equipment } from '../models/attributes';

export const index = async (req, res) => {
	const equipment = await Equipment.find({});
	res.status(200).json({ equipment });
};
