import express from 'express';
import apicache from 'apicache';
import bodyParser from 'body-parser';

import RoutesConfig from './src/Routes';

const app = express();
const cache = apicache.middleware;

//Definindo variaveis da API
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cache('5 days'));
//Definindo o Access Control
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});
RoutesConfig(app);
app.listen(port);

console.log('AnimeAPI server started on: ' + port);