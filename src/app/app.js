angular.module( 'repair', [
	'repairControllers',
	'repairDirectives',
	'appServices',
	'ngRoute',
	'ui.bootstrap'
])

.config([ '$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider
	// Start Page
	.when('/', {
		templateUrl: 'app/partials/start.html',
		controller: 'StartController'
	})
	// Garage Page
	.when('/garages', {
		templateUrl: 'app/partials/garages.html',
		controller: 'GaragesController',
	})
	// Info Page
	.when('/info', {
		templateUrl: 'app/partials/info.html',
		controller: 'InfoController',
	})
	// Quote Page
	.when('/quote', {
		templateUrl: 'app/partials/quote.html',
		controller: 'QuoteController',
	})
	// Profile Page
	.when('/profile', {
		templateUrl: 'app/partials/profile.html',
		controller: 'ProfileController',
	})


	.otherwise({redirectTo:'/'});
	$locationProvider.html5Mode(true);
}])

.run(function run () {

})

.controller('AppCtrl', [ '$scope', '$location', function ($scope, $location) {
	$scope.linkTo = function (location) {
		$location.path('/' + location);
	};
}])

;
