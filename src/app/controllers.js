angular.module('repairControllers', [])

.controller('StartController', [ '$scope', '$http', '$window', '$sce', '$location', function ($scope, $http, $window, $sce, $location) {

}])

.controller('GarageController', [ '$scope', '$http', '$window', '$sce', '$location', function ($scope, $http, $window, $sce, $location) {

	$scope.garages = [
		{name: "Joe's Garage", img: "dupe.png", desc: "Tire replacements" },
		{name: "Bill's Garage", img: "dupe.png", desc: "Engine replacements" },
		{name: "Kai's Garage", img: "dupe.png", desc: "Regular maintenance" },
		{name: "Fud's Garage", img: "dupe.png", desc: "Restoration" },
	];

}])

.controller('MechanicsController', [ '$scope', '$http', '$window', '$sce', '$location', function ($scope, $http, $window, $sce, $location) {

}])

.controller('ListingsController', [ '$scope', '$http', '$window', '$sce', '$location', function ($scope, $http, $window, $sce, $location) {

}])

.controller('WhateverController', [ '$scope', '$http', '$window', '$sce', '$location', function ($scope, $http, $window, $sce, $location) {

}])

;
