/* eslint-disable import/first */
/* eslint-disable no-unused-vars */
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import * as models from './models';
import app from './app';
import Logger from './utils/Logger';

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
});

// Start our app
app.set('port', process.env.PORT || 8888);
const server = app.listen(app.get('port'), () => {
	Logger.info(`✨Dungeon API running → PORT ${server.address().port}`);
});
