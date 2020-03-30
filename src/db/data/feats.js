export default [
	{
		index: 'alert',
		name: 'Alert',
		desc: [
			'Always on the lookout for danger, you gain the following benefits:',
			'• You gain a +5 bonus to initiative.',
			"• You can't be surprised while you are conscious.",
			"• Other creatures don't gain advantage on attack rolls against you as a result of being hidden from you.",
		],
		prerequisite: 'None',
	},
	{
		index: 'athlete',
		name: 'Athlete',
		desc: [
			'You have undergone extensive physical training to gain the following benefits:',
			'• Increase your Strength or Dexterity score by 1, to a maximum of 20.',
			'• When you are prone, standing up uses only 5 feet of your movement.',
			"• Climbing doesn't halve your speed.",
			' You can make a running long jump or a running high jump after moving only 5 feet on foot, rather than 10 feet.',
		],
		prerequisite: 'None',
	},
	{
		index: 'actor',
		name: 'Actor',
		desc: [
			'Skilled at mimicry and dramatics, you gain the following benefits:',
			'• Increase your Charisma score by 1, to a maximum of 20.',
			'• You have advantage on Charisma (Deception) and Charisma (Performance) checks when trying to pass yourself off as a different person.',
			'• You can mimic the speech of another person or the sounds made by other creatures. You must have heard the person speaking, or heard the creature make the sound, for at least 1 minute. A successful Wisdom (Insight) check contested by your Charisma (Deception) check allows a listener to determine that the effect is faked.',
		],
		prerequisite: 'None',
	},
	{
		index: 'charger',
		name: 'Charger',
		desc: [
			'When you use your action to Dash, you can use a bonus action to make one melee weapon attack or to shove a creature.',
			"If you move at least 10 feet in a straight line immediately before taking this bonus action, you either gain a +5 bonus to the attack's damage roll (if you chose to make a melee attack and hit) or push the target up to 10 feet away from you (if you chose to shove and you succeed).",
		],
		prerequisite: 'None',
	},
	{
		index: 'crossbow-expert',
		name: 'Crossbow Expert',
		desc: [
			'Thanks to extensive practice with the crossbow, you gain the following benefits:',
			'• You ignore the loading quality of crossbows with which you are proficient.',
			"• Being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls.",
			'• When you use the Attack action and attack with a one- handed weapon, you can use a bonus action to attack with a loaded hand crossbow you are holding.',
		],
		prerequisite: 'None',
	},
	{
		index: 'defensive-duelist',
		name: 'Defensive Duelist',
		desc: [
			'When you are wielding a finesse weapon with which you are proficient and another creature hits you with a melee attack, you can use your reaction to add your proficiency bonus to your AC for that attack, potentially causing the attack to m iss you.',
		],
		prerequisite: 'Dexterity 13 or higher',
	},
	{
		index: 'dual-wielder',
		name: 'Dual Wielder',
		desc: [
			'You master fighting with two weapons, gaining the following benefits:',
			'• You gain a +1 bonus to AC while you are wielding a separate melee weapon in each hand.',
			"• You can use two-weapon fighting even when the one- handed melee weapons you are wielding aren't light.",
			'• You can draw or stow two one-handed weapons when you would normally be able to draw or stow only one.',
		],
		prerequisite: 'None',
	},
	{
		index: 'dungeon-delver',
		name: 'Dungeon Delver',
		desc: [
			'Alert to the hidden traps and secret doors found in many dungeons, you gain the following benefits:',
			'• You have advantage on Wisdom (Perception) and Intelligence (Investigation) checks made to detect the presence of secret doors.',
			'• You have advantage on saving throws made to avoid or resist traps.',
			'• You have resistance to the damage dealt by traps.',
			'• You can search for traps while traveling at a normal pace, instead of only at a slow pace.',
		],
		prerequisite: 'None',
	},
	{
		index: 'durable',
		name: 'Durable',
		desc: [
			'Hardy and resilient, you gain the following benefits:',
			'• Increase your Constitution score by 1, to a maximum of 20.',
			'• When you roll a Hit Die to regain hit points, the minimum number of hit points you regain from the roll equals twice your Constitution modifier (minimum of 2).',
		],
		prerequisite: 'None',
	},
	{
		index: 'elemental-adept',
		name: 'Elemental Adept',
		desc: [
			'When you gain this feat, choose one of the following damage types: acid, cold, fire, lightning, or thunder.',
			'Spells you cast ignore resistance to damage of the chosen type. In addition, when you roll damage for a spell you cast that deals damage of that type, you can treat any 1 on a damage die as a 2.',
			'You can select this feat multiple times. Each time you do so, you must choose a different damage type.',
		],
		prerequisite: 'The ability to cast at least one spell',
	},
	{
		index: 'grappler',
		name: 'Grappler',
		desc: [
			"You've developed the Skills necessary to hold your own in close--quarters Grappling. You gain the following benefits:",
			'• You have advantage on Attack rolls against a creature you are Grappling.',
			'• You can use your action to try to pin a creature Grappled by you. To do so, make another grapple check. If you succeed, you and the creature are both Restrained until the grapple ends.',
		],
		prerequisite: 'Strength 13 or higher',
	},
	{
		index: 'great-weapon-master',
		name: 'Great Weapon Master',
		desc: [
			"You've learned to put the weight of a weapon to your advantage, letting its momentum empower your strikes. You gain the following benefits:",
			'• On your turn, when you score a critical hit with a melee weapon or reduce a creature to 0 hit points with one, you can make one melee weapon attack as a bonus action.',
			'• Before you make a melee attack with a heavy weapon with which you are proficient, you can choose to take a -5 penalty to the attack roll. If you do so and the attack hits, it deals +10 damage.',
		],
		prerequisite: 'None',
	},
	{
		index: 'healer',
		name: 'Healer',
		desc: [
			'You are an able physician, allowing you to mend wounds quickly and get your allies back in the fight. You gain the following benefits:',
			"• When you use a healer's kit to stabilize a creature, they also regain 1 hit point",
			"• As an action, you can spend one use of a healer's kit to tend to a creature and heal 1d6+4 hit points to it, plus a number of hit points equal to the creature's maximum number of Hit Dice. That creature can't regain hit points in this way again until they finish a short or long rest.",
		],
		prerequisite: 'None',
	},
	{
		index: 'heavily-armored',
		name: 'Heavily Armored',
		desc: [
			'You have trained to master the use of heavy armor, gaining the following benefits:',
			'• Increase your Strength by 1, to a maximum of 20.',
			'• You become proficient with heavy armor.',
		],
		prerequisite: 'Proficiency with medium armor',
	},
	{
		index: 'heavy-armor-master',
		name: 'Heavy Armor Master',
		desc: [
			'You can use your armor to deflect strikes that would kill others. You gain the following benefits:',
			'• Increase your Strength by 1, to a maximum of 20.',
			'• When wearing heavy armor, bludgeoning, slashing and piercing damage you take from non-magical weapons is reduced by 3.',
		],
		prerequisite: 'Proficiency with heavy armor',
	},
	{
		index: 'inspiring-leader',
		name: 'Inspiring Leader',
		desc: [
			"You can spend 10 minutes inspiring your companions, shoring up their resolve to fight. When you do so, choose up to six friendly creatures (which can include yourself) within 30 feet of you who can see or hear you and can understand you. Each creature can gain temporary hit points equal to your level + your Charisma modifier. A creature can't gain temporary hit points from this feat again until they finish a short or long rest.",
		],
		prerequisite: 'Charisma 13 or higher',
	},
	{
		index: 'keen-mind',
		name: 'Keen Mind',
		desc: [
			'You have a mind that can track time, direction, and detail with uncanny precision. You gain the following benefits:',
			'• Increase your Intelligence by 1, to a maximum of 20.',
			'• You always know which way is north.',
			'• You always know how the number of hours left before the next sunrise or sunset.',
			'• You can accurately recall anything you have seen or heard within the past month.',
		],
		prerequisite: 'None',
	},
	{
		index: 'lightly-armored',
		name: 'Lightly Armored',
		desc: [
			'You have trained to master the use of light armor, gaining the following benefits:',
			'• Increase your Strength or Dexterity by 1, to a maximum of 20.',
			'• You become proficient with light armor.',
		],
		prerequisite: 'None',
	},
	{
		index: 'linguist',
		name: 'Linguist',
		desc: [
			'You have studied languages and codes, gaining the following benefits:',
			'• Increase your Intelligence by 1, to a maximum of 20.',
			'• You learn three languages of your choice.',
			'• You can ably create written ciphers. Others cannot decipher a code you create unless you teach it to them, they succeed on an Intelligence check (DC equal to your Intelligence score + your proficiency bonus), or they use magic to decipher it.',
		],
		prerequisite: 'None',
	},
	{
		index: 'lucky',
		name: 'Lucky',
		desc: [
			'You have inexplicable luck that seems to kick in at just the right moment.',
			'You have 3 luck points. Whenever you make an attack roll, ability check, or saving throw, you may spend 1 luck point to roll an additional d20. You can use this ability after the original roll, but before the outcome is revealed. You choose which of the d20s is used for the attack roll, ability check, or saving throw.',
			"You can also spend one luck point when an attack roll is made against you. Roll a d20, and choose whether the attacker's roll uses their d20 roll or yours.",
			'If multiple creatures use a luck point on the same roll, they cancel out, resulting in no additional dice.',
			'You regain expended luck points when you finish a long rest.',
		],
		prerequisite: 'None',
	},
	{
		index: 'mage-slayer',
		name: 'Mage Slayer',
		desc: [
			'You have practiced techniques useful in melee combat against spellcasters, gaining the following benefits:',
			'• When a creature within 5 feet of you casts a spell, you can use your reaction to make a melee weapon attack against that creature.',
			'• When you damage a creature that is concentrating on a spell, that creature has disadvantage on the saving throw it makes to maintain its concentration.',
			'• You have advantage on saving throws against spells cast by creatures within 5 feet of you.',
		],
		prerequisite: 'None',
	},
	{
		index: 'magic-initiate',
		name: 'Magic Initiate',
		desc: [
			"Choose a class: bard, cleric, druid, sorcerer, warlock, or wizard. You learn two cantrips of your choice from that class's spell list.",
			'In addition, choose one 1st-level spell from that same list. You learn that spell and can cast it at its lowest level. Once you cast it, you must finish a long rest before you can cast it again.',
			'Your spellcasting ability for these spells depends on the class you chose: Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid: or Intelligence for wizard.',
		],
		prerequisite: 'None',
	},
	{
		index: 'martial-adept',
		name: 'Martial Adept',
		desc: [
			'You have martial training that allows you to perform special combat maneuvers. You gain the following benefits:',
			"• You learn two maneuvers of your choice from among those available to the Battle Master archetype in the fighter class. If a maneuver you use requires your tar- get to make a saving throw to resist the maneuver's effects, the saving throw DC equals 8 + your profi- ciency bonus + your Strength or Dexterity modifier (your choice).",
			'• If you already have superiority dice, you gain one more; otherwise, you have one superiority die, which is a d6. This die is used to fuel your maneuvers. A superiority die is expended when you use it. You regain your expended superiority dice when you finish a short or long rest.',
		],
		prerequisite: 'None',
	},
	{
		index: 'medium-armor-master',
		name: 'Medium Armor Master',
		desc: [
			'You have practiced moving in medium armor to gain the following benefits:',
			"• Wearing medium armor doesn't impose disadvantage on your Dexterity (Stealth) checks.",
			'• When you wear medium armor, you can add 3, rather than 2, to your AC if you have a Dexterity of 16 or higher.',
		],
		prerequisite: 'Proficiency with medium armor',
	},
	{
		index: 'mobile',
		name: 'Mobile',
		desc: [
			'You are exceptionally speedy and agile. You gain the following benefits:',
			'• Your speed increases by 10 feet.',
			"• When you use the Dash action, difficult terrain doesn't cost you extra movement on that turn.",
			"• When you make a melee attack against a creature, you don't provoke opportunity attacks from that creature for the rest of the turn, whether you hit or not.",
		],
		prerequisite: 'None',
	},
	{
		index: 'moderately-armored',
		name: 'Moderately Armored',
		desc: [
			'You have trained to master the use of medium armor and shields, gaining the following benefits:',
			'• Increase your Strength or Dexterity score by 1, to a maximum of 20.',
			'• You gain proficiency with medium armor and shields.',
		],
		prerequisite: 'Proficiency with light armor',
	},
	{
		index: 'mounted-combatant',
		name: 'Mounted Combatant',
		desc: [
			"You are a dangerous foe to face while mounted. While you are mounted and aren't incapacitated, you gain the following benefits:",
			'• You have advantage on melee attack rolls against any unmounted creature that is smaller than your mount.',
			'• You can force an attack targeted at your mount to target you instead.',
			'• If your mount is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails.',
		],
		prerequisite: 'None',
	},
	{
		index: 'observant',
		name: 'Observant',
		desc: [
			'Quick to notice details of your environment, you gain the following benefits:',
			'• Increase your Intelligence or Wisdom score by 1, to a maximum of 20.',
			"• If you can see a creature's mouth while it is speaking a language you understand, you can interpret what it's saying by reading its lips.",
			'• You have a +5 bonus to your passive Wisdom (Perception) and passive Intelligence (Investigation) scores.',
		],
		prerequisite: 'None',
	},
	{
		index: 'polearm-master',
		name: 'Polearm Master',
		desc: [
			'You can keep your enemies at bay with reach weapons. You gain the following benefits:',
			"• When you take the Attack action and attack with only a glaive, halberd, or quarterstaff, you can use a bonus action to make a melee attack with the opposite end of the weapon. The weapon's damage die for this attack is a d4, and the attack deals bludgeoning damage.",
			'• While you are wielding a glaive, halberd, pike, or quarterstaff, other creatures provoke an opportunity attack from you when they enter your reach.',
		],
		prerequisite: 'None',
	},
	{
		index: 'resilient',
		name: 'Resilient',
		desc: [
			'Choose one ability score. You gain the following benefits:',
			'• Increase the chosen ability score by 1, to a maximum of 20.',
			'• You gain proficiency in saving throws using the chosen ability.',
		],
		prerequisite: 'None',
	},
	{
		index: 'ritual-caster',
		name: 'Ritual Caster',
		desc: [
			'You have learned a number of spells you can cast as rituals. These spells are written in a ritual book, which you must have on hand when casting one of them.',

			'When you gain this feat, choose one of the following classes: bard, cleric, druid, sorcerer, warlock, or wizard. You acquire a ritual book holding two 1st level spells with the ritual tag, which must be on the list of the chosen class. Your casting ability for these rituals are the same as the chosen class (Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid; Intelligence for wizard).',

			"If you come across a spell in written from, such as a magical scroll or a wizard's spellbook, you might be able to add it to your ritual book. The spell must be on the spell list for the class you chose, the spell's level must not be higher than half your level (rounded up), and it must have the ritual tag. The process of copying the spell into your ritual books takes 2 hours per level of the spells, and costs 50 gp per level of the spell. This cost represents material components spent on practicing the spell, as well as the fine inks you must use to record it.",
		],
		prerequisite: 'Intelligence or Wisdom 13 or higher',
	},
	{
		index: 'savage-attacker',
		name: 'Savage Attacker',
		desc: [
			"Once per turn when you roll damage for a melee weapon attack, you can reroll the weapon's damage dice and use either total.",
		],
		prerequisite: 'None',
	},
	{
		index: 'sentinel',
		name: 'Sentinel',
		desc: [
			"You have mastered techniques to take advantage of every drop in any enemy's guard, gaining the following benefits:",
			'• Whenever you hit a creature with an opportunity attack, its speed drops to 0 for the rest of the turn. This stops any movement they may have been taking.',
			'• Creatures within your reach provoke opportunity attacks even if they took the Disengage action.',
			"• When a creature within your reach makes an attack against a target other than you (and that target doesn't have this feat), you can use your reaction to make a melee weapon attack against the attacking creature.",
		],
		prerequisite: 'None',
	},
	{
		index: 'sharpshooter',
		name: 'Sharpshooter',
		desc: [
			'You have mastered ranged weapons and can make shots that others find impossible. You gain the following benefits:',
			"• Attacking at long range doesn't impose disadvantage on your ranged weapon attack rolls.",
			'• Your ranged weapons ignore half cover and three-quarters cover.',
			'• Before you make a ranged attack with a ranged weapon with which you are proficient, you can choose to take a -5 penalty to the attack roll. If you do so and the attack hits, it deals +10 damage.',
		],
		prerequisite: 'None',
	},
	{
		index: 'shield-master',
		name: 'Shield Master',
		desc: [
			'You use shields not just for protection but also for offense. You gain the following benefits while you are wielding a shield:',
			'• If you take the Attack action on your turn, you can use a bonus action to try to shove a creature within 5 feet of you using your shield.',
			"• If you aren't incapacitated, you can add your shield's AC bonus to any Dexterity save made against a spell or other effect that affects only you.",
			'• If you are subjected to an effect which allows you to make a Dexterity save for half damage, you can use your reaction to take no damage, interposing you shield between you and the effect.',
		],
		prerequisite: 'None',
	},
	{
		index: 'skilled',
		name: 'Skilled',
		desc: [
			'You gain proficiency in any combination of three skills or tools of your choice.',
		],
		prerequisite: 'None',
	},
	{
		index: 'skulker',
		name: 'Skulker',
		desc: [
			'You are expert at slinking through shadows. You gain the following benefits:',
			'• You can try to hide when you are only lightly obscured from the creature from which you are hiding.',
			"• When you are hidden from a creature and miss it with a ranged weapon attack, making the attack doesn't reveal your position.",
			"• Dim light doesn't impose disadvantage on Wisdom (Perception) bonuses made with sight.",
		],
		prerequisite: 'Dexterity 13 or higher',
	},
	{
		index: 'spell-sniper',
		name: 'Spell Sniper',
		desc: [
			'You have learned techniques to enhance your attacks with certain kinds of spells, gaining the following benefits:',
			"• When you cast a spell that requires a ranged attack roll, the spell's range is doubled.",
			'• Your ranged spell attacks ignore half cover and three-quarters cover.',
			'• You learn a single cantrip that requires an attack roll from a class of your choice: bard, cleric, sorcerer, warlock, or wizard. Your spellcasting modifier for these spells is the same as the class you chose (Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid; Intelligence for wizard).',
		],
		prerequisite: 'The ability to cast at least one spell',
	},
	{
		index: 'tavern-brawler',
		name: 'Tavern Brawler',
		desc: [
			'Accustomed to rough-and-tumble fighting using whatever weapons happen to be at hand, you gain the following benefits:',
			'• Increase your Strength or Constitution by 1, to a maximum of 20.',
			'• You are proficient with all improvised weapons.',
			'• Your unarmed strike uses a d4 for damage.',
			'• When you hit a creature with an unarmed strike or improvised weapon on your turn, you can use a bonus action to attempt to grapple the target.',
		],
		prerequisite: 'None',
	},
	{
		index: 'war-caster',
		name: 'War Caster',
		desc: [
			'You have practiced casting spells in the midst of combat, learning techniques that grant you the following benefits:',
			'• You have advantage on Constitution saving throws that you make to maintain your concentration on a spell when you take damage.',
			'• You can perform the somatic components of spells even when you have weapons or a shield in one or both hands.',
			"• When a hostile creature's movement provokes an opportunity attack from you, you can use your reaction to cast a spell at the creature, rather than making an opportunity attack. The spell must have a casting time of 1 action and must target only that creature.",
		],
		prerequisite: 'The ability to cast at least one spell',
	},
	{
		index: 'weapon-master',
		name: 'Weapon Master',
		desc: [
			'You have practiced extensively with a variety of weapons, gaining the following benefits:',

			'• Increase your Strength or Dexterity score by 1, to a maximum of 20.',

			'• You gain proficiency with four weapons of your choice.',
		],
		prerequisite: 'None',
	},
];
