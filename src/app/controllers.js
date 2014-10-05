angular.module('repairControllers', [])

.controller('StartController', [ '$scope', '$http', '$window', '$sce', '$location', function ($scope, $http, $window, $sce, $location) {

}])

.controller('GaragesController', function ($scope, $http, $window, $location, appState) {

	$scope.garages = [
		{name: "Joe's Garage", img: "dupe.png", desc: "Tire replacements" },
		{name: "Bill's Garage", img: "dupe.png", desc: "Engine replacements" },
		{name: "Kai's Garage", img: "dupe.png", desc: "Regular maintenance" },
		{name: "Fud's Garage", img: "dupe.png", desc: "Restoration" },
	];

	$scope.selectedGarage = undefined;

	$scope.selectGarage = function(garage, idx) {
		$scope.selectedGarage = garage;
	};

	$scope.bookGarage = function(date) {
		appState.bookGarage($scope.selectedGarage, date);
		$location.path('quote');
	};

})

.controller('QuoteController', function ($scope, $http, $window, $location, appState) {

})

.controller('MechanicsController', [ '$scope', '$http', '$window', '$sce', '$location', function ($scope, $http, $window, $sce, $location) {

}])

.controller('ListingsController', [ '$scope', '$http', '$window', '$sce', '$location', function ($scope, $http, $window, $sce, $location) {

}])

.controller('WhateverController', [ '$scope', '$http', '$window', '$sce', '$location', function ($scope, $http, $window, $sce, $location) {

}])

;
