import { Feature } from '../models/attributes';

export const index = async (req, res) => {
	const features = await Feature.find({});
	res.status(200).json({ features });
};
