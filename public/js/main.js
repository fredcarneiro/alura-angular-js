angular.module('alurapic', ['customDirectives', 'ngAnimate', 'ngRoute', 'customServices'])
.config(function($routeProvider, $locationProvider){

	$locationProvider.html5Mode(true); /* pode-se omitir o # na url. */

	$routeProvider.when('/fotos', {
		templateUrl: 'partials/Main.html',
		controller: 'FotosController'
	}); /* o link fica /#/fotos */

	$routeProvider.when('/fotos/new', {
		templateUrl: 'partials/CadastroFotos.html',
		controller: 'CadastroFotoController'
	}); /* o link fica /#/fotos/new */	

	$routeProvider.when('/fotos/edit/:fotoId', {
		templateUrl: 'partials/CadastroFotos.html',
		controller: 'CadastroFotoController'
	}); /* o link fica /#/fotos/new */	
	
	$routeProvider.otherwise({redirectTo: '/fotos'});
});