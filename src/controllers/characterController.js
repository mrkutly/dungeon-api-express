import { body } from 'express-validator';
import Character from '../models/Character';

export const index = async (req, res) => {
	const { user } = req;
	const characters = await Character.find({ user })
		.populate('race')
		.populate('characterClass');
	res.status(200).json({ characters });
};

export const show = async (req, res) => {
	const { user } = req;
	const _id = req.params.id;
	const character = await Character.findOneAndPopulate({ user, _id });
	if (!character) throw new Error('Character not found');
	res.status(200).json({ character });
};

export const create = async (req, res) => {
	const { user } = req;
	const character = new Character({
		...req.body,
		user,
	});
	await character.save();
	res.status(201).json({ character });
};

export const removeAttribute = async (req, res) => {
	const { user } = req;
	const _id = req.params.id;
	const { attribute, attributeId } = req.params;
	const character = await Character.findOne({ user, _id });
	if (!character) throw new Error('Character not found');

	// remove the deleted attribute
	const filtered = character[attribute].filter((a) => a.toString() !== attributeId);
	character[attribute] = filtered;
	await character.save();

	res.status(201).json({ character });
};

export const removeEquipment = async (req, res) => {
	const { user } = req;
	const { id: _id, equipmentId } = req.params;
	const character = await Character.findOne({ user, _id });
	if (!character) throw new Error('Character not found');

	const filtered = character.equipment.filter((e) => e._id.toString() !== equipmentId);
	character.equipment = filtered;
	await character.save();

	res.status(201).json({ character });
};

export const update = async (req, res) => {
	const { user } = req;
	const _id = req.params.id;
	const character = await Character.findOneAndUpdate({ user, _id }, req.body, {
		new: true,
		runValidators: true,
	});

	if (!character) throw new Error('Character not found');
	res.status(200).json({ character });
};

export const validateCreateFns = [
	body('name').notEmpty().withMessage('A name is required.'),
	body('race').notEmpty().withMessage('A race is required.'),
	body('characterClass').notEmpty().withMessage('A class is required.'),
	body('level')
		.isInt()
		.custom((val) => val <= 20 && val > 0)
		.withMessage('Level must be between 1 and 20.'),
	body('dexterity')
		.isInt()
		.custom((val) => val <= 20 && val > 0)
		.withMessage('Dexterity must be between 1 and 20.'),
	body('strength')
		.isInt()
		.custom((val) => val <= 20 && val > 0)
		.withMessage('Strength must be between 1 and 20.'),
	body('constitution')
		.isInt()
		.custom((val) => val <= 20 && val > 0)
		.withMessage('Constitution must be between 1 and 20.'),
	body('wisdom')
		.isInt()
		.custom((val) => val <= 20 && val > 0)
		.withMessage('Wisdom must be between 1 and 20.'),
	body('intelligence')
		.isInt()
		.custom((val) => val <= 20 && val > 0)
		.withMessage('Intelligence must be between 1 and 20.'),
	body('charisma')
		.isInt()
		.custom((val) => Number(val) <= 20 && Number(val) > 0)
		.withMessage('Charisma must be between 1 and 20.'),
];
