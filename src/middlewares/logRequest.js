import Logger from '../utils/Logger';

export default (req, res, next) => {
	Logger.info(`api.request - ${req.method} ${req.path}`);
	next();
};
