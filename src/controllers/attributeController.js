export const makeIndex = (model) => async (req, res) => {
	const { name } = req.query;
	let searchParams = {};

	if (name) {
		const filter = new RegExp(name, 'i');
		searchParams = { index: filter };
	}

	const data = await model.find(searchParams);
	res.status(200).json({ data });
};

export const makeShow = (model) => async (req, res) => {
	const { _id } = req.params;
	const data = await model.findById(_id);
	res.status(200).json({ data });
};
