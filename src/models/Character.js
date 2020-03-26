import { model, Schema } from 'mongoose';

const attributeSchema = new Schema({
	user: { 
		type: Schema.Types.ObjectId, 
		ref: 'User', 
		required: true 
	},
	name: {
		type: String,
		trim: true,
		required: 'The character needs a name.',
	},
	dexterity: {
		type: Number,
		required: true,
	},
	strength: {
		type: Number,
		required: true,
	},
	constitution: {
		type: Number,
		required: true,
	},
	wisdom: {
		type: Number,
		required: true,
	},
	intelligence: {
		type: Number,
		required: true,
	},
	charisma: {
		type: Number,
		required: true,
	},
	race: { 
		type: Schema.Types.ObjectId, 
		ref: 'Race', 
		required: true 
	},
	level: { 
		type: Number, 
		required: true 
	},
	characterClass: { 
		type: Schema.Types.ObjectId, 
		ref: 'CharacterClass', 
		required: true 
	},
	magicSchool: { 
		type: Schema.Types.ObjectId, 
		ref: 'MagicSchool' 
	},
	equipment: [{ 
		type: Schema.Types.ObjectId, 
		ref: 'Equipment' 
	}],
	features: [{ 
		type: Schema.Types.ObjectId, 
		ref: 'Feature' 
	}],
	languages: [{ 
		type: Schema.Types.ObjectId, 
		ref: 'Language' 
	}],
	proficiencies: [{ 
		type: Schema.Types.ObjectId, 
		ref: 'Proficiency' 
	}],
	skills: [{ 
		type: Schema.Types.ObjectId, 
		ref: 'Skill' 
	}],
	spells: [{ 
		type: Schema.Types.ObjectId, 
		ref: 'Spell' 
	}],
	traits: [{ 
		type: Schema.Types.ObjectId, 
		ref: 'Trait' 
	}],
	subclass: { 
		type: Schema.Types.ObjectId, 
		ref: 'Subclass' 
	},
	subrace: { 
		type: Schema.Types.ObjectId, 
		ref: 'Subrace' 
	},
});

export default model('Character', attributeSchema);