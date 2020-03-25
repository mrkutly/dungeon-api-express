/* eslint-disable import/first */
import mongoose from 'mongoose';
import dotenv from 'dotenv';
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
});
mongoose.connection.on('error', (err) => {
	Logger.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

// import all of our models
import './models/User';


// Start our app
app.set('port', process.env.PORT || 8888);
const server = app.listen(app.get('port'), () => {
	Logger.info(`✨Dungeon API running → PORT ${server.address().port}`);
});
