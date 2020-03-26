import { model, Schema } from 'mongoose';

const attributeSchema = new Schema({
	name: String,
	index: String,
});

export const AbilityScore = model('AbilityScore', attributeSchema, 'abilityScores');
export const CharacterClass = model('CharacterClass', attributeSchema, 'classes');
export const Condition = model('Condition', attributeSchema);
export const DamageType = model('DamageType', attributeSchema, 'damageTypes');
export const Equipment = model('Equipment', attributeSchema, 'equipment');
export const EquipmentCategory = model('EquipmentCategory', attributeSchema, 'equipmentCategories');
export const Feature = model('Feature', attributeSchema);
export const Language = model('Language', attributeSchema);
export const Level = model('Level', attributeSchema);
export const MagicSchool = model('MagicSchool', attributeSchema, 'magicSchools');
export const Monster = model('Monster', attributeSchema);
export const Proficiency = model('Proficiency', attributeSchema);
export const Race = model('Race', attributeSchema);
export const Skill = model('Skill', attributeSchema);
export const Spellcasting = model('Spellcasting', attributeSchema, 'spellcasting');
export const Spell = model('Spell', attributeSchema);
export const StartingEquipment = model('StartingEquipment', attributeSchema, 'startingEquipment');
export const Subclass = model('Subclass', attributeSchema);
export const Subrace = model('Subrace', attributeSchema);
export const Trait = model('Trait', attributeSchema);
export const WeaponProperty = model('WeaponProperty', attributeSchema, 'weaponProperties');




