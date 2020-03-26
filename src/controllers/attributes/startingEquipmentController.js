import { StartingEquipment } from '../../models/attributes';

export const index = async (req, res) => {
	const startingEquipment = await StartingEquipment.find({});
	res.status(200).json({ startingEquipment });
};
