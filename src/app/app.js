angular.module( 'repair', [
	'repairControllers',
	'repairDirectives',
  'ngRoute'
])

.config([ '$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      // Start Page
      .when('/', {
        templateUrl: 'app/partials/start.html',
        controller: 'StartController'
      })
      // Garage Page
      .when('/garage', {
        templateUrl: 'app/partials/garage.html',
        controller: 'GarageController',
      })
      // Mechanics Page
      .when('/mechanics', {
        templateUrl: 'app/partials/mechanics.html',
        controller: 'MechanicsController',
      })
      // Listings Page
      .when('/listings', {
        templateUrl: 'app/partials/listings.html',
        controller: 'ListingsController',
      })
      // Whatever Page
      .when('/whatever', {
        templateUrl: 'app/partials/whatever.html',
        controller: 'WhateverController',
      })
      // Add Extra Pages Here
      // .when('/name', {
      //   templateUrl: 'app/partials/name.html',
      //   controller: 'NameController',
      // })
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
