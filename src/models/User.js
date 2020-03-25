import { model, Schema } from 'mongoose';
import validator from 'validator';
import passportLocalMongoose from 'passport-local-mongoose';

const userSchema = new Schema({
	email: {
		type: String,
		unique: true,
		lowercase: true,
		trim: true,
		validate: [validator.isEmail, 'Invalid email address.'],
		required: 'Please supply an email address.',
	},
	name: {
		type: String,
		required: 'Please supply a name.',
		trim: true,
	},
});

userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

export default model('User', userSchema);
