import { model, Schema } from 'mongoose';

const characterSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	experience: {
		type: Number,
		required: true,
		default: 0,
	},
	maxHp: {
		type: Number,
		required: true,
		default: 1,
	},
	currentHp: {
		type: Number,
		required: true,
		default: 1,
	},
	name: {
		type: String,
		trim: true,
		required: 'The character needs a name.',
	},
	gold: {
		type: Number,
		required: true,
		default: 0,
	},
	silver: {
		type: Number,
		required: true,
		default: 0,
	},
	copper: {
		type: Number,
		required: true,
		default: 0,
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
	equipment: [{
		item: {
			type: Schema.Types.ObjectId,
			ref: 'Equipment',
		},
		quantity: Number,
	}],
	feats: [{
		type: Schema.Types.ObjectId,
		ref: 'Feat',
	}],
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
	conditions: [{
		type: Schema.Types.ObjectId,
		ref: 'Condition',
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

characterSchema.statics.findOneAndPopulate = async function findAndPop(where) {
	const character = await this.findOne(where)
		.populate('race')
		.populate('characterClass')
		.populate('feats')
		.populate('features')
		.populate('magicSchool')
		.populate('equipment.item')
		.populate('skills')
		.populate('spells')
		.populate('subrace')
		.populate('subclass')
		.populate('traits')
		.populate('proficiencies')
		.populate('conditions')
		.populate('languages');
	return character;
};


export default model('Character', characterSchema);
