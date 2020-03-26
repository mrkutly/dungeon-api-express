import { model, Schema } from 'mongoose';

const characterEquipmentSchema = new Schema({
	quantity: { type: Number, required: true, default: 1 },
	item: { type: Schema.Types.ObjectId, ref: 'Equipment', required: true },
});

const characterSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	name: {
		type: String,
		trim: true,
		required: 'The character needs a name.',
	},
	gold: {
		type: Number,
		required: true,
		default: 1,
	},
	silver: {
		type: Number,
		required: true,
		default: 1,
	},
	copper: {
		type: Number,
		required: true,
		default: 1,
	},
	dexterity: {
		type: Number,
		required: true,
		default: 1,
	},
	strength: {
		type: Number,
		required: true,
		default: 1,
	},
	constitution: {
		type: Number,
		required: true,
		default: 1,
	},
	wisdom: {
		type: Number,
		required: true,
		default: 1,
	},
	intelligence: {
		type: Number,
		required: true,
		default: 1,
	},
	charisma: {
		type: Number,
		required: true,
		default: 1,
	},
	race: {
		type: Schema.Types.ObjectId,
		ref: 'Race',
		required: true,
	},
	level: {
		type: Number,
		required: true,
		default: 1,
	},
	characterClass: {
		type: Schema.Types.ObjectId,
		ref: 'CharacterClass',
		required: true,
	},
	magicSchool: {
		type: Schema.Types.ObjectId,
		ref: 'MagicSchool',
	},
	equipment: [characterEquipmentSchema],
	features: [{
		type: Schema.Types.ObjectId,
		ref: 'Feature',
	}],
	languages: [{
		type: Schema.Types.ObjectId,
		ref: 'Language',
	}],
	proficiencies: [{
		type: Schema.Types.ObjectId,
		ref: 'Proficiency',
	}],
	skills: [{
		type: Schema.Types.ObjectId,
		ref: 'Skill',
	}],
	spells: [{
		type: Schema.Types.ObjectId,
		ref: 'Spell',
	}],
	traits: [{
		type: Schema.Types.ObjectId,
		ref: 'Trait',
	}],
	subclass: {
		type: Schema.Types.ObjectId,
		ref: 'Subclass',
	},
	subrace: {
		type: Schema.Types.ObjectId,
		ref: 'Subrace',
	},
});

characterSchema.statics.findByIdAndPopulate = async function findAndPop(id) {
	const character = await this.findById(id)
		.populate('race')
		.populate('characterClass')
		.populate('features')
		.populate('magicSchool')
		.populate('equipment')
		.populate('skills')
		.populate('spells')
		.populate('subrace')
		.populate('subclass')
		.populate('traits')
		.populate('proficiencies')
		.populate('languages');
	return character;
};


export default model('Character', characterSchema);
