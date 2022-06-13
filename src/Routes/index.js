'use strict';

import CategoriesController from '../Controllers/CategoriesController';


export default function RoutesConfig({ app }) {
	//Categories
	app.route('/category').get(CategoriesController);
	//Animes
	app.route('/anime/:page?').get(animes.list_all);
	app.route('/anime/detail/:slug').get(animes.detail);
	app.route('/anime/episodes/:slug/:page?').get(animes.episodes);
	//Episódios
	app.route('/episodes/:page?/:terms?').get(episodes.list_all);
	app.route('/episode/:video_key').get(episodes.video);
}
