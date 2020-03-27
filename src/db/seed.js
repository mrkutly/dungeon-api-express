import mongoose from 'mongoose';
import dotenv from 'dotenv';
import equipmentPacks from './data/equipmentPacks';
import Logger from '../utils/Logger';

import EquipmentPack from '../models/EquipmentPack';
import { Equipment } from '../models/attributes';

const envFile = process.env.NODE_ENV === 'production' ? '.env' : '.env.dev';

// import environmental variables from our variables.env file
dotenv.config({ path: envFile });

// Connect to our Database and handle any bad connections
mongoose.connect(process.env.MONGODB_URI, {
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
		for (const pack of equipmentPacks) {
			// get all the contents
			const contents = [];
			for (const item of pack.contents) {
				const equipment = await Equipment.findOne({ name: item.name });
				contents.push({ item: equipment, quantity: item.quantity });
			}

			// create the pack
			const newPack = new EquipmentPack({
				name: pack.name,
				equipment_category: pack.equipment_category,
				gear_category: pack.gear_category,
				cost: {
					quantity: pack.cost.quantity,
					unit: pack.cost.unit,
				},
				contents,
			});
			await newPack.save();
		}

		Logger.info('✨ Successfully seeded the equipment packs ✨');
	} catch (error) {
		Logger.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${error.message}`);
		process.exit(1);
	} finally {
		process.exit(0);
	}
}

seed();
