import { model, Schema } from 'mongoose';

const packSchema = new Schema({
	name: String,
	equipment_category: String,
	gear_category: String,
	cost: {
		quantity: Number,
		unit: String,
	},
	contents: [{
		quantity: Number,
		item: {
			type: Schema.Types.ObjectId,
			ref: 'Equipment',
		},
	}],
});

export default model('EquipmentPack', packSchema, 'equipmentPacks');
