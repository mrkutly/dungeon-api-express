import { model, Schema } from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';
import { parseToken } from '../utils/tokenManager';
import Logger from '../utils/Logger';

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
	password: { type: String, required: true, select: false },
	resetPasswordToken: String,
	resetPasswordExpires: Date,
});

userSchema.pre('save', async function hashPassword(next) {
	try {
		if (!this.isModified('password')) return next();

		const hashedPassword = await bcrypt.hash(this.password, 10);
		this.password = hashedPassword;
	} catch (error) {
		next(error);
	}
});

userSchema.methods.authenticate = async function authenticate(password) {
	try {
		const isAuthenticated = await bcrypt.compare(password, this.password);
		return isAuthenticated;
	} catch (error) {
		Logger.error(error.stack);
		return false;
	}
};

userSchema.statics.fromToken = async function fromToken(token) {
	const { userId } = parseToken(token);
	const user = await this.findById(userId);
	return user;
};

export default model('User', userSchema);
