const url = require('url');
import model from '../db/models';

const { User } = model;

export class AuthController {
	static authCheckMiddleware (noAuthPaths = [], disableCORS = false) {
		return (req, res, next) => {
			if (disableCORS) {
				res.header('Access-Control-Allow-Origin', '*');
				res.header('Access-Control-Allow-Methods', 'GET, POST, HEAD, OPTIONS, PUT, DELETE, PATCH');
				res.header('Access-Control-Allow-Credentials', 'true');
				res.header("Access-Control-Allow-Headers",
					"Origin, X-Requested-With, Content-Type, Accept, Content-Range, Access-Control-Allow-Credentials, Authorization");
				res.header("Access-Control-Expose-Headers",
					"Origin, X-Requested-With, Content-Type, Accept, Content-Range, Access-Control-Allow-Credentials, Authorization");
			}
			if (req.method === 'OPTIONS') {
				next();
				return null;
			}
			// console.log('************************');
			// console.log(`${req.url} ${req.method}`);
			// console.log(req.headers);
			// console.log('************************');
			if (String(req.header('Authorization') || '').toLowerCase() === 'bearer authorized') {
				// console.log('auth passed');
				next()
			} else {
				const requestUrl = url.parse(req.url, true);
				if (noAuthPaths.includes(requestUrl.pathname)) {
					// console.log('noauth passed');
					next()
				}
				else {
					// console.log('auth failed');
					res.status(401).send({})
				}
			}
		}
	}
	static login(req, res) {
		const { email, password } = req.body;
		return User
		.findAll({
			where: {
				email: email || null,
				password: password || null,
			}
		})
		.then(users => {
			if (users.length === 1) {
				res.status(200).send({
					token: 'authorized'
				});
			} else {
				res.status(401).send({token: ''});
			}
		})
		.catch(error => {
			console.error(error);
			res.status(500).send({})
		})
	}
}

