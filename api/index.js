import http from 'http';
import express from 'express';
import {CONFIG} from "./config";

import {AuthController} from "./controllers/index";

import {router} from "./routes"

const app = express();

const server = http.createServer(app);

// check access - any access require auth token (except login routes)
app.use(AuthController.authCheckMiddleware(['/api/login'], true));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router(app);

// set default route
app.get('*', (req, res) => res.status(404).send({
	message: 'Not found',
}));

server.listen(CONFIG.port, CONFIG.host, () => {
	console.log(`Server running at http://${CONFIG.host}:${CONFIG.port}/`);
});