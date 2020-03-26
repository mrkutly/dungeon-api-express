import { Language } from '../../models/attributes';

export const index = async (req, res) => {
	const languages = await Language.find({});
	res.status(200).json({ languages });
};
