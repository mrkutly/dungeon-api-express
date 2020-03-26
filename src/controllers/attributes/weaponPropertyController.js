import { WeaponProperty } from '../../models/attributes';

export const index = async (req, res) => {
	const weaponProperties = await WeaponProperty.find({});
	res.status(200).json({ weaponProperties });
};
