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

	$scope.submitQuote = function() {
		appState.submitQuote();
		$location.path('payment');
	};

})

.controller('PaymentController', function ($scope, $http, $window, $location, appState) {

	$scope.submitPayment = function() {
		$location.path('profile');
	};

})

.controller('ProfileController', function ($scope, $http, $window, $location, appState) {

	$scope.userProfile = {
		name: "Adriana Lima", 
		credits: 5,
		history: [
			{ type: "repair", subject: "bodywork", date: '2014-10-01' },
			{ type: "maintenance", subject: "oil", date: '2014-08-05' },
			{ type: "repair", subject: "engine", date: '2014-03-21' },
		]
	};

})

;
