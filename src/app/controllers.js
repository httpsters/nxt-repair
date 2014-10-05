angular.module('repairControllers', [])

.controller('StartController', [ '$scope', '$http', '$window', '$sce', '$location', function ($scope, $http, $window, $sce, $location) {

}])

.controller('GaragesController', function ($scope, $http, $window, $location, appState) {

	$scope.garages = [
		{name: "Joe's Garage", img: "garage1.jpg", desc: "Certified Drive Clean Test and Repa" },
		{name: "Windsor Garage", img: "garage2.jpg", desc: "Independently owned and family op" },
		{name: "Masters Garage", img: "garage3.jpg", desc: "Masters Garage has been providing a" },
		{name: "Matt's Garage", img: "garage4.jpg", desc: "Highest standards, dedicated mechanics" },
		{name: "George's Auto Repair", img: "garage5.jpg", desc: "Garage repair and serive to custom" },
		{name: "RPR Garage", img: "garage7.jpg", desc: "12 mechanics working to give you " },
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

	$scope.garages = [
		{name: "Tire Replacement", img: "tire.jpg", desc: "$245.00" },
		{name: "Muffler", img: "muffler.jpg", desc: "$300.00" },
		
	];
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
