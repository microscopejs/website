'use strict';

// Router class
function Router($routeProvider) {

	$routeProvider

		.when('/', {
			templateUrl: '/components/home/controllers/home.html'
		})

		.when('/docs/:page', {
			templateUrl: '/components/docs/controllers/docs.html'
		})

		.when('/cloud', {
			templateUrl: '/components/server/controllers/server.html'
		})

		.when('/frontend', {
			templateUrl: '/components/frontend/controllers/frontend.html'
		})

		.when('/mobile', {
			templateUrl: '/components/mobile/controllers/mobile.html'
		})

		.when('/preview/:id', {
			templateUrl: '/components/preview/controllers/preview.html'
		})

		.when('/detail/:id', {
			templateUrl: '/components/starterkit/controllers/detail.html'
		})

		.when('/team', {
			templateUrl: '/components/team/controllers/team.html'
		})
		
		.when('/trello', {
			templateUrl: '/components/trello/trello.html'
		})

		.otherwise({ redirectTo: '/' });
}

module.exports = Router;