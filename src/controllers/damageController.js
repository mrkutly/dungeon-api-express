import { DamageType } from '../models/attributes';

export const index = async (req, res) => {
	const damageTypes = await DamageType.find({});
	res.status(200).json({ damageTypes });
};
