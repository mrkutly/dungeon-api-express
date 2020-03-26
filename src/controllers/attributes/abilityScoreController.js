import { AbilityScore } from '../../models/attributes';

export const index = async (req, res) => {
	const abilityScores = await AbilityScore.find({});
	res.status(200).json({ abilityScores });
};
