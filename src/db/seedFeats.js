import mongoose from 'mongoose';
import dotenv from 'dotenv';
import feats from './data/feats';
import Logger from '../utils/Logger';

import { Feat } from '../models/attributes';

const envFile = process.env.NODE_ENV === 'production' ? '.env' : '.env.dev';

const { parsed } = dotenv.config({ path: envFile });

// Connect to our Database and handle any bad connections
mongoose.connect(parsed.MONGODB_URI, {
	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});
mongoose.connection.on('error', (err) => {
	Logger.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
	process.exit(1);
});

/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
async function seed() {
	try {
		for (const feat of feats) {
			// create the pack
			const newFeat = new Feat(feat);
			await newFeat.save();
		}

		Logger.info('✨ Successfully seeded the feats ✨');
	} catch (error) {
		Logger.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${error.message}`);
		process.exit(1);
	} finally {
		process.exit(0);
	}
}

seed();
