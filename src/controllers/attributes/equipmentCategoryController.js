import { EquipmentCategory } from '../../models/attributes';

export const index = async (req, res) => {
	const equipmentCategories = await EquipmentCategory.find({});
	res.status(200).json({ equipmentCategories });
};
